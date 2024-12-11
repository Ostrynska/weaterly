import React from 'react';
import { MdMyLocation } from "react-icons/md";
import styles from './CurrentWeather.module.scss';

interface CurrentWeatherProps {
    temp: number;
    feelsLike: number;
    description: string;
    icon: string;
}

const CurrentWeather: React.FC<CurrentWeatherProps> = ({ temp, feelsLike, description, icon }) => (
    <div className={styles.currentWeather}>
        <h2 className={styles.sectionTitle}><MdMyLocation className={styles.iconTitle}/>Current Weather</h2>
        <div className={styles.weatherSummary}>
        <div className={styles.summaryRight}>
            <img
            src={`https://openweathermap.org/img/wn/${icon}@4x.png`}
            alt={description}
            className={styles.weatherIconLarge}
            />
            <div className={styles.weatherDescription}>{description}</div>
        </div>
        <div className={styles.summaryLeft}>
            <div className={styles.temperature}>{Math.round(temp)}°C</div>
            <div className={styles.feelsLike}>Feels like {Math.round(feelsLike)}°</div>
        </div>
        </div>
    </div>
);

export default CurrentWeather;
