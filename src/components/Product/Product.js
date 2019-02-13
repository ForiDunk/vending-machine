import React from 'react';
import * as styles from './Product.module.css';

const product = ({ product }) => {
  console.log(product);
  return (
    <div className={styles.product}>
      {product.name}
    </div>
  );
};

export default product;