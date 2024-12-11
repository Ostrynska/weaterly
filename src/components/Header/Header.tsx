import React, { useEffect, useState } from 'react';
import { NavLink, useLocation, useParams } from 'react-router-dom';

import styles from './Header.module.scss';

import WeatherIcon from "../../assets/weather-icon.svg";

const Header: React.FC = () => {
  const location = useLocation();
  const { id } = useParams();
  const [activeLinks, setActiveLinks] = useState<{ home: boolean; details: boolean }>({
    home: false,
    details: false,
  });

  useEffect(() => {
    setActiveLinks({
      home: location.pathname === '/',
      details: !!id,
    });
  }, [location.pathname, id]);

  return (
    <header className={styles.header}>
      <div className={styles.content}>
        <div className={styles.left}>
          <img src={WeatherIcon} alt="Weatherly" className={styles.icon} />
          <h1 className={styles.title}>Weatherly</h1>
        </div>
        <div className={styles.linksContainer}>
          <nav className={styles.nav}>
            <NavLink 
              to="/" 
              className={activeLinks.home ? `${styles.link} ${styles.active}` : styles.link}
            >
              Home
            </NavLink>
            {activeLinks.details && (
              <NavLink 
                to={`/${id}`} 
                className={activeLinks.details ? `${styles.link} ${styles.active}` : styles.link}
              >
                Details
              </NavLink>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
