import React from 'react';
import { FaCloud, FaWind, FaEye, FaArrowDown, FaSun } from 'react-icons/fa';
import { BsFillSunsetFill } from "react-icons/bs";
import styles from './ConditionsList.module.scss';

interface ConditionsListProps {
    humidity: number;
    windSpeed: number;
    pressure: number;
    visibility: number;
    sunrise: string;
    sunset: string;
}

const ConditionsList: React.FC<ConditionsListProps> = ({
    humidity,
    windSpeed,
    pressure,
    visibility,
    sunrise,
    sunset,
    }) => (
    <div className={styles.conditions}>
        <div className={styles.detailItem}>
        <FaCloud className={styles.conditionIcon} />
        <strong>Humidity: </strong> {humidity}%
        </div>
        <div className={styles.detailItem}>
        <FaWind className={styles.conditionIcon} />
        <strong>Wind Speed: </strong> {windSpeed} m/s
        </div>
        <div className={styles.detailItem}>
        <FaArrowDown className={styles.conditionIcon} />
        <strong>Pressure: </strong> {pressure} hPa
        </div>
        <div className={styles.detailItem}>
        <FaEye className={styles.conditionIcon} />
        <strong>Visibility: </strong> {visibility / 1000} km
        </div>
        <div className={styles.detailItem}>
        <FaSun className={styles.conditionIcon} />
        <strong>Sunrise: </strong> {sunrise}
        </div>
        <div className={styles.detailItem}>
        <BsFillSunsetFill className={styles.conditionIcon} />
        <strong>Sunset: </strong> {sunset}
        </div>
    </div>
);

export default ConditionsList;
