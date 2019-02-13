import React from 'react';
import * as styles from './Product.module.css';

const product = ({ product, image }) => {
  const Image = image;
  return (
    <div className={styles.product}>
      <Image width={50} height={50} />
      <p className={styles.product__code}>{product.code}</p>
      <p className={styles.product__name}>{product.name}</p>
      <div className={styles.product__quantity}>X{product.quantity}</div>
    </div>
  );
};

export default product;