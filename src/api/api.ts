/* eslint-disable @typescript-eslint/no-unused-vars */
import axios from 'axios';

const API_KEY = import.meta.env.VITE_API_API_WEATHER;

export const searchCities = async (cityName: string) => {
  const url = 'http://api.openweathermap.org/geo/1.0/direct';
  try {
    const response = await axios.get(url, {
      params: {
        q: cityName,
        limit: 5,
        appid: API_KEY,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching cities:', error);
    throw error;
  }
};

export const getWeather = async (lat: number, lon: number, _p0: { cacheBuster: number; }) => {
  const url = 'https://api.openweathermap.org/data/2.5/weather';
  try {
    const response = await axios.get(url, {
      params: {
        lat,
        lon,
        appid: API_KEY,
        units: 'metric',
        lang: 'en',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching weather:', error);
    throw error;
  }
};
