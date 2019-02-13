import React from 'react';
import * as styles from './Keypad.module.css';
import Key from './Key/Key';

const keyValues = [1,2,3,4,5,6,7,8,9,'Clear','Buy'];
const keys = keyValues.map(keyItem => <Key key={keyItem} keyValue={keyItem} />)

const keypad = () => (
  <div className={styles.keypad}>
    {keys}
  </div>
);

export default keypad;