import React from "react";
import styles from "./Product.module.css";

import { useStateValue } from "../../state/stateProvider";

function Product({ id, title, image, price, rating }) {
  const [{ basket }, dispatch] = useStateValue("");
  const addToBasket = () => {
    // dispatch the item into the data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };
  return (
    <div className={styles.product}>
      <div className={styles.product_info}>
        <p>{title}</p>
        <p className={styles.product_price}>
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className={styles.product_rating}>
          {Array(rating)
            .fill()
            .map((_, index) => (
              <p key={index}>*</p>
            ))}
        </div>
      </div>
      <img src={image} alt='' />
      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  );
}

export default Product;
