import React from 'react';
import * as styles from './Product.module.css';

const product = ({ product, image, isSelected }) => {

  let productStyles = styles.product;

  if (isSelected) {
    productStyles = productStyles + ' ' + styles.product__selected;
  }

  if (product.quantity === 0) {
    productStyles = productStyles + ' ' + styles.product__out;
  }

  const Image = image;
  return (
    <div className={productStyles}>
      <Image width={50} height={50} />
      <p className={styles.product__code}>{product.code}</p>
      <p className={styles.product__price}>${product.price}</p>
      <div className={styles.product__quantity}>{product.quantity ? 'x' + product.quantity : 'OUT'}</div>
    </div>
  );
};

export default product;