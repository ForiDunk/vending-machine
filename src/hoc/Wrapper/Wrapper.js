import React from 'react';
import styles from './Wrapper.module.css';

const wrapper = (props) => (
  <div className={styles.wrapper}>
    {props.children}
  </div>
);

export default wrapper;