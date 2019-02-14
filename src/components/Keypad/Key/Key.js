import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions/actions';
import * as styles from './Key.module.css';


const key = ({ keyValue, selectProduct }) => {
  const styleIsNaN = isNaN(keyValue) ? styles.text : styles.number;

  return (
    <div 
      className={[styles.key + ' ' + styleIsNaN]} 
      onClick={() => selectProduct(keyValue)}
    >{keyValue}</div>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    selectProduct: (keyValue) => dispatch(actions.selectProduct(keyValue))
  }
}

export default connect(null, mapDispatchToProps)(key);