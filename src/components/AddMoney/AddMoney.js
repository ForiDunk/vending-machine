import React from 'react';
import * as styles from './AddMoney.module.css';
import GoldCoin from './goldCoin.svg';
import SilverCoin from './silverCoin.svg';

const addMoney = () => (
  <div className={styles.addMoney}>
    <GoldCoin width={40} height={40} />
    <SilverCoin width={40} height={40} />
  </div>
);

export default addMoney;