import React from 'react';
import { useDispatch } from 'react-redux';
import { MapPinIcon } from '@heroicons/react/24/solid';
import { getWeather } from '../../../api/api';
import { addCityWeather } from '../../../redux/city/slice';
import styles from './Location.module.scss';

const Location: React.FC = () => {
  const dispatch = useDispatch();

  const handleLocationClick = () => {
    if (!navigator.geolocation) {
      alert('Geolocation is not supported by your browser.');
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;

        if (!latitude || !longitude) {
          console.error('Coordinates not available from geolocation API.');
          alert('Failed to retrieve location coordinates.');
          return;
        }

        try {
          const weatherData = await getWeather(latitude, longitude, { cacheBuster: Date.now() });
          const cityName = weatherData.name || 'Unknown Location';
          console.log(weatherData);
          dispatch(addCityWeather({ ...weatherData, name: cityName }));
        } catch (error) {
          console.error('Error fetching weather by location:', error);
          alert('Failed to fetch weather data.');
        }
      },
      (error) => {
        console.error('Error getting location:', error);
        alert('Permission to access location was denied.');
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 0,
      }
    );
  };

  return (
    <button className={styles.button} onClick={handleLocationClick}>
      <MapPinIcon className={styles.iconButton} />
    </button>
  );
};

export default Location;
