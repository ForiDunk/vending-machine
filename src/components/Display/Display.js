import React from 'react';
import * as styles from './Display.module.css';

const display = () => (
  <div className={styles.display}>
    <p className={styles.display__money}>$10.00</p>
    <p className={styles.display__text}>Cocktail</p>
  </div>
);

export default display;