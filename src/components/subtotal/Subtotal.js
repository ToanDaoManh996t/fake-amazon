import React, { useState } from "react";
import styles from "./Subtotal.module.css";

import CurrencyFormat from "react-currency-format";
import { useStateValue } from "../../state/stateProvider";
import { getBasketTotals } from "../../interface/initialState";
import { useNavigate } from "react-router-dom";

function Subtotal() {
  const navigate = useNavigate();
  const [{ basket }, dispatch] = useStateValue();

  const navigateToCheckout = (e) => {
    navigate("/payment");
  };
  //   const [total, setTotal] = useState(0);

  //   const totalPriceHandler = (state) => {
  //     const totalItems = state.basket;
  //     let totalPrice = 0;
  //     totalItems.forEach((item) => {
  //       totalPrice += item.price;
  //       setTotal(totalPrice);
  //     });
  //   };

  //   useEffect(() => {
  //     totalPriceHandler(state);
  //   }, []);

  return (
    <div className={styles.subtotal}>
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              {/* homework */}
              Subtotal ({basket.length} items): <strong>{value}</strong>
            </p>
            <small className={styles.subtotal_gift}>
              <input type='checkbox' />
              This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotals(basket)} // homework
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <button onClick={navigateToCheckout}>Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;
