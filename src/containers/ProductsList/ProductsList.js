import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/actions';
import styles from './ProductsList.module.css';
import Product from '../../components/Product/Product';

class ProductsList extends Component {

  componentDidMount() {
    this.props.getProducts();
  }
  render() {

    const { products } = this.props;
    const product = products.map(product => <Product product={product} key={product.code} />);

    return (
      <div className={styles.container}>
        <div className={styles.productsList}>
          {product}
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