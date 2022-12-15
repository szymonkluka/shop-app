import styles from './Product.module.scss';
import PropTypes from 'prop-types';
import { useState, useMemo } from 'react';
import ProductImage from '../ProductImage/ProductImage';
import ProductForm from '../ProductForm/ProductForm';

const Product = ({ name, title, basePrice, colors, sizes }) => {
  const [currentColor, setCurrentColor] = useState(colors[0]);
  const [currentSize, setCurrentSize] = useState(sizes[0].name);

  const getSummary = (e) => {
    e.preventDefault();
    console.log(`
    Summary
    ==============
    Name: ${title} 
    Price: ${calculatedPrice}
    Size: ${currentSize}
    Color: ${currentColor}`);
  };

  const getPrice = (basePrice, additionalPrice) => {
    return basePrice + additionalPrice;
  };

  const calculatedPrice = useMemo(() => getPrice(
    basePrice,
    sizes.find((item) => item.name === currentSize).additionalPrice
  ),
    [basePrice, currentSize, sizes]
  );

  return (
    <article className={styles.product}>
      <ProductImage name={name} currentColor={currentColor} />
      <div>
        <header>
          <h2 className={styles.name}>{title}</h2>
          <span className={styles.price}>
            Price:
            {calculatedPrice}
            $
          </span>
        </header>
        <ProductForm
          sizes={sizes}
          currentSize={currentSize}
          setCurrentSize={setCurrentSize}
          colors={colors}
          currentColor={currentColor}
          setCurrentColor={setCurrentColor}
          getSummary={getSummary}
        />
      </div>
    </article>
  );
};

Product.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  basePrice: PropTypes.number.isRequired,
  colors: PropTypes.array.isRequired,
  sizes: PropTypes.array.isRequired,
};

export default Product;