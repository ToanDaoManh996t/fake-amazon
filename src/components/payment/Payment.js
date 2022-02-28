import React from "react";
import styles from "./Payment.module.css";

import { useStateValue } from "../../state/stateProvider";
import { CheckoutProduct, Header } from "../components";

import { Link } from "react-router-dom";

function Payment() {
  const [{ basket, user }, dispatch] = useStateValue();

  const log = () => {
    console.log({ basket });
  };
  return (
    <>
      <Header />
      <div className={styles.payment}>
        <div className={styles.payment_container}>
          <h2>
            Checkout: {<Link to={"/checkout"}>{basket?.length} items</Link>}
          </h2>
          <div className={styles.payment_section}>
            <div className={styles.payment_title}>
              <h3>Delivery Address</h3>
            </div>
            <div className={styles.payment_address}>
              <p>{user?.email}</p>
              <p>123 React Lane</p>
              <p>Los Angeles</p>
            </div>
          </div>
          <div className={styles.payment_section}>
            <div className={styles.payment_title}>
              <h3>Review items and Delivery</h3>
            </div>
            <div className={styles.payment_item}>
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
          <div className={styles.payment_section}>
            <div className={styles.payment_title}>
              <h3>Payment Method</h3>
            </div>
            <div className={styles.payment_details}></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Payment;
