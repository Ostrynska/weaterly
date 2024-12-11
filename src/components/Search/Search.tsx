import React, { useState } from 'react';
import Select from 'react-select';
import { searchCities } from '../../api/api';
import Location from './Location/Location';
import styles from './Search.module.scss';

interface CityOption {
  label: string;
  value: {
    lat: number;
    lon: number;
    name: string;
  };
}

interface CitySearchProps {
  onCitySelect: (city: { lat: number; lon: number; name: string }) => void;
}

const CitySearch: React.FC<CitySearchProps> = ({ onCitySelect }) => {
  const [cityOptions, setCityOptions] = useState<CityOption[]>([]);

  const handleSearch = async (inputValue: string) => {
    if (!inputValue.trim()) return;

    try {
      const cities = await searchCities(inputValue);

      const uniqueCities = cities.filter(
        (city: any, index: number, self: any[]) =>
          index ===
          self.findIndex(
            (c) =>
              c.name === city.name &&
              c.country === city.country &&
              (c.state || '') === (city.state || '')
          )
      );

      setCityOptions(
        uniqueCities.map((city: any) => ({
          label: `${city.name}${city.state ? ', ' + city.state : ''}, ${city.country}`,
          value: { lat: city.lat, lon: city.lon, name: city.name },
        }))
      );
    } catch (error) {
      console.error('Error searching cities:', error);
    }
  };

  const handleCityChange = (option: CityOption | null) => {
    if (!option) return;
    onCitySelect(option.value);
  };

  const customStyles = {
    control: (provided: any) => ({
        ...provided,
        background: 'rgba(255, 255, 255, 0.1)',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(255, 255, 255, 0.2)',
        borderRadius: '10px',
        boxShadow: 'none',
        color: '#0f5190',
        padding: '5px 0px 5px 30px',
        transition: 'border 0.3s ease',
        '&:hover': {
          border: '1px solid #0f5190',
        },
      }),
    placeholder: (provided: any) => ({
      ...provided,
      color: '#0f5190',
    }),
    singleValue: (provided: any) => ({
      ...provided,
      color: '#0f5190',
    }),
    input: (provided: any) => ({
      ...provided,
      color: '#0f5190',
    }),
    dropdownIndicator: (provided: any) => ({
      ...provided,
      color: '#f3e9e9',
      paddingRight: '10px'
    }),
    indicatorSeparator: () => ({
      display: 'none',
    }),
    menu: (provided: any) => ({
      ...provided,
      backgroundColor: 'rgba(0, 0, 0, 0.8)',
      border: '1px solid rgba(255, 255, 255, 0.3)',
      borderRadius: '10px',
    }),
    option: (provided: any, state: any) => ({
      ...provided,
      backgroundColor: state.isFocused
        ? 'rgba(255, 255, 255, 0.2)'
        : 'transparent',
      color: '#fff',
      cursor: 'pointer',
    }),
  };

  return (
    <div className={styles.container} >
      <Select
        styles={customStyles}
        placeholder="Enter city name or pick up current location"
        onInputChange={(value) => {
          if (typeof value === 'string') handleSearch(value);
        }}
        options={cityOptions}
        onChange={handleCityChange}
        isClearable
      />
      <Location />
    </div>
  );
};

export default CitySearch;
