import React from "react";
import styles from "./Checkout.module.css";

import { Subtotal, Header, CheckoutProduct } from "../components";
import { useStateValue } from "../../state/stateProvider";

function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();

  return (
    <>
      <Header />
      <div className={styles.checkout}>
        <div className={styles.checkout_left}>
          <img
            className={styles.checkout_ad}
            src='https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg'
            alt=''
          />
          <div>
            <h3>Hello {user?.email}</h3>
            <h2 className={styles.checkout_title}>Your shopping Basket</h2>
            {basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        </div>
        <div className={styles.checkout_right}>
          <Subtotal />
        </div>
      </div>
    </>
  );
}

export default Checkout;
