import React from 'react';
import { SiRefinedgithub } from "react-icons/si";
import styles from './Footer.module.scss';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <p className={styles.text}>Made for Come Back Agency</p>
        <a 
              href="https://github.com/Ostrynska/weatherly-app" 
              target="_blank" 
              rel="noopener noreferrer" 
              className={styles.link}
            >
              <SiRefinedgithub className={styles.iconButton} />
            </a>
      </div>
    </footer>
  );
};

export default Footer;
