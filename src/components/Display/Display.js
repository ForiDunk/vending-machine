import React from 'react';
import { connect } from 'react-redux';
import * as styles from './Display.module.css';

const display = ({ balance, selectedProduct, displayText }) => {

  const selectedPrice = selectedProduct.price ? <p className={styles.display__text}>price: ${selectedProduct.price}</p> : null;

  return (
    <div className={styles.display}>
      <p className={styles.display__money}>Balance: ${balance}</p>
      <p className={styles.display__text}>{displayText.toUpperCase()}</p>
      {selectedPrice}
    </div>
  );
}

const mapStateToProps = state => {
  return {
    balance: state.balance,
    selectedProduct: state.selectedProduct,
    displayText: state.displayText
  }
}

export default connect(mapStateToProps, null)(display);