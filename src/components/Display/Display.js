import React from 'react';
import { connect } from 'react-redux';
import * as styles from './Display.module.css';

const display = ({ balance, selectedProduct }) => {

  const handleDispalyText = () => {
    let displayText = 'Insert Coin';

    if (balance >= 0.50) {
      displayText = 'Select product';
      
      if (selectedProduct.name) {
        displayText = selectedProduct.name;
      }
    }
    return displayText;
  }

  return (
    <div className={styles.display}>
      <p className={styles.display__money}>Balance: ${balance}</p>
      <p className={styles.display__text}>{handleDispalyText()}</p>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    balance: state.balance,
    selectedProduct: state.selectedProduct
  }
}

export default connect(mapStateToProps, null)(display);