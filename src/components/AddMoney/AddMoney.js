import React from 'react';
import * as styles from './AddMoney.module.css';
import GoldCoin from './goldCoin.svg';
import SilverCoin from './silverCoin.svg';

const addMoney = () => (
  <div className={styles.addMoney}>
    <GoldCoin className={styles.addMoney__coin} />
    <SilverCoin className={styles.addMoney__coin} />
  </div>
);

export default addMoney;