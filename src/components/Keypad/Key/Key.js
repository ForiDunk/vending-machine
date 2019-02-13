import React from 'react';
import * as styles from './Key.module.css'

const key = ({ keyValue }) => {
  const styleIsNaN = isNaN(keyValue) ? styles.text : styles.number;

  return (
    <div className={[styles.key + ' ' + styleIsNaN]}>{keyValue}</div>
  );
}

export default key;