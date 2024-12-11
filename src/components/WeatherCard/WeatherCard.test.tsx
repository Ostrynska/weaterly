import { render, screen } from '@testing-library/react';
import WeatherCard from './WeatherCard';

const mockWeather = {
    id: 1,
    name: 'Kyiv',
    dt: 1681234567,
    visibility: 10000,
    coord: {
        lat: 50.4501,
        lon: 30.5234,
        p0: 67,
    },
    main: {
        temp: 15,
        feels_like: 14,
        pressure: 1012,
        humidity: 80,
    },
    weather: [
        {
        icon: '10d',
        description: 'light rain',
        },
    ],
    wind: {
        speed: 5,
        deg: 200,
        },
    sys: {
        sunrise: 1638678000,
        sunset: 1638711000,
        country: 'Ukraine',
    },
    updatedAt: 1681237890,
};


describe('WeatherCard Component', () => {
    it('renders city name and temperature', () => {
        render(<WeatherCard weather={mockWeather} selectedCityName="Kyiv" />);

        expect(screen.getByText(/Kyiv/i)).toBeInTheDocument();
        expect(screen.getByText(/15°C/i)).toBeInTheDocument();
        expect(screen.getByText(/light rain/i)).toBeInTheDocument();
    });

    it('renders weather icon', () => {
        render(<WeatherCard weather={mockWeather} selectedCityName="Kyiv" />);
        const img = screen.getByAltText(/light rain/i);
        expect(img).toHaveAttribute('src', 'https://openweathermap.org/img/wn/10d@2x.png');
    });
});
