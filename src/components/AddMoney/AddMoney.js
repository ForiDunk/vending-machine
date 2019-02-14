import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/actions';
import * as styles from './AddMoney.module.css';
import GoldCoin from './goldCoin.svg';
import SilverCoin from './silverCoin.svg';

const addMoney = ({ addCoin }) => (
  <div className={styles.addMoney}>
    <GoldCoin onClick={() => addCoin(1)} className={styles.addMoney__coin} />
    <SilverCoin onClick={() => addCoin(0.50)} className={styles.addMoney__coin} />
  </div>
);

const mapDispatchToProps = dispatch => {
  return {
    addCoin: (value) => dispatch(actions.addCoin(value))
  }
}

export default connect(null, mapDispatchToProps)(addMoney);