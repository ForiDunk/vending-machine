import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/actions';
import styles from './ProductsList.module.css';
import Product from '../../components/Product/Product';
import drinks from '../../components/Product/svgs';
import ProductBought from '../../components/ProductBought/ProductBought';

class ProductsList extends Component {

  componentDidMount() {
    this.props.getProducts();
  }
  render() {
    const { products, selectedProduct } = this.props;
    const product = products.map(product => (
      <Product 
        product={product} 
        key={product.code} 
        image={drinks[product.code]}
        isSelected={product.code === selectedProduct.code}
      />
    ));

    return (
      <div className={styles.container}>
        <div className={styles.productsList}>
          {product}
        </div>
        <ProductBought />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    products: state.products,
    selectedProduct: state.selectedProduct
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getProducts: () => dispatch(actions.getProducts())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsList);