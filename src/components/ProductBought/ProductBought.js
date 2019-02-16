import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/actions';
import * as styles from './ProductBought.module.css';

const productBought = ({ boughtProduct, takeProduct }) => {

  let productBoughtStyles = styles.productBought;

  if (boughtProduct.name) {
    productBoughtStyles = productBoughtStyles + ' ' + styles.productBought__active;
  }

  return (
    <div onClick={takeProduct} className={productBoughtStyles}>
      {boughtProduct.name}
    </div>
  );
}

const mapStateToProps = state => {
  return {
    boughtProduct: state.boughtProduct
  }
}

const mapDispatchToProps = dispatch => {
  return {
    takeProduct: () => dispatch(actions.takeProduct())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(productBought);