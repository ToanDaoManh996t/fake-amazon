import React from "react";
import styles from "./CheckoutProduct.module.css";
import { useStateValue } from "../../state/stateProvider";

import { Flipper, Flipped } from "react-flip-toolkit";

function CheckoutProduct({ id, image, title, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();
  const removeFromBasketHandler = () => {
    console.log(id);
    dispatch({ type: "REMOVE_FROM_BASKET", id: id });
  };

  return (
    <div className={styles.checkoutProduct}>
      <img className={styles.checkoutProduct_image} src={image} alt='' />
      <div className={styles.checkoutProduct_info}>
        <p className={styles.checkoutProduct_title}>{title}</p>
        <p className={styles.checkoutProduct_price}>
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className={styles.checkoutProduct_rating}>
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p key={i}>*</p>
            ))}
        </div>
        <button onClick={removeFromBasketHandler}>Remove from Basket</button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
