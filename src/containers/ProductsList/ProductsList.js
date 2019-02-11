import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/actions';
import styles from './ProductsList.module.css';

class ProductsList extends Component {

  componentDidMount() {
    this.props.getProducts();
  }
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.productsList}>
          <div className={styles.product}>Product</div>
          <div className={styles.product}>Product</div>
          <div className={styles.product}>Product</div>
          <div className={styles.product}>Product</div>
          <div className={styles.product}>Product</div>
          <div className={styles.product}>Product</div>
          <div className={styles.product}>Product</div>
          <div className={styles.product}>Product</div>
          <div className={styles.product}>Product</div>
        </div>
        <div>ProductBought</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    products: state.products
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getProducts: () => dispatch(actions.getProducts())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsList);