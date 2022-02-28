import React from "react";
import styles from "./Header.module.css";

import { Link } from "react-router-dom";
import { useStateValue } from "../../state/stateProvider";
import { auth } from "../../firebase";

import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import LocationOnIcon from "@material-ui/icons/LocationOn";

function Header() {
  const [{ basket, user }, setState] = useStateValue();

  const authenticationHandler = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <header className={styles.header}>
      <Link to='/'>
        <img
          className={styles.header_logo}
          src='http://pngimg.com/uploads/amazon/amazon_PNG11.png'
        />
      </Link>
      <div className={styles.header_location}>
        <LocationOnIcon />
        <div>
          <p className={styles.header_option_upperline}>Deliver to</p>
          <h3 className={styles.header_option_lowerline}>Vietnam</h3>
        </div>
      </div>
      <div className={styles.header_search}>
        <input type='text' className={styles.header_searchInput} />
        <SearchIcon className={styles.header_searchIcon} />
      </div>
      <div className={styles.header_nav}>
        <Link to={!user && "/login"}>
          <div onClick={authenticationHandler} className={styles.header_option}>
            <span className={styles.header_option_upperline}>
              Hello {user ? user.email : "Guest"}
            </span>
            <span className={styles.header_option_lowerline}>
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>

        <div className={styles.header_option}>
          <span className={styles.header_option_upperline}>Returns</span>
          <span className={styles.header_option_lowerline}>& Orders</span>
        </div>
        <div className={styles.header_option}>
          <span className={styles.header_option_upperline}>Your</span>
          <span className={styles.header_option_lowerline}>Prime</span>
        </div>
      </div>
      <Link to='/checkout'>
        <div className={styles.header_option_basket}>
          <ShoppingBasketIcon />
          <span
            className={`${styles.header_option_lowerline}  ${styles.header_basketCount}`}
          >
            {basket?.length}
          </span>
        </div>
      </Link>
    </header>
  );
}

export default Header;
