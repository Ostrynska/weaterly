import React from 'react';
import { ChevronDoubleLeftIcon, ChevronLeftIcon } from '@heroicons/react/24/outline';
import styles from './Title.module.scss';

interface TitleProps {
  cityName: string;
  onBack: () => void;
  hovered: boolean;
  setHovered: (hovered: boolean) => void;
  date: number;
}

const Title: React.FC<TitleProps> = ({ cityName, onBack, hovered, setHovered, date }) => {
  const cityDate = new Date(date * 1000);
  const formattedDate = `${cityDate.toLocaleDateString('en-GB', {
    weekday: 'long',
  })} | ${cityDate.toLocaleDateString('en-GB', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  })}`;

  return (
    <div className={styles.titleContainer}>
      <div
        className={styles.title}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onFocus={() => setHovered(true)}
        onBlur={() => setHovered(false)}
        onClick={onBack}
      >
        <button className={styles.buttonBack}>
          {hovered ? (
            <ChevronDoubleLeftIcon className={styles.iconLocation} />
          ) : (
            <ChevronLeftIcon className={styles.iconLocation} />
          )}
        </button>
        <span className={styles.locationTitle}>{cityName}</span>
      </div>
      <div className={styles.date}>{formattedDate}</div>
    </div>
  );
};

export default Title;
