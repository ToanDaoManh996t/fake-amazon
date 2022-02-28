import React from "react";
import styles from "./Footer.module.css";
import "/node_modules/flagpack/dist/flagpack.css";

import LanguageIcon from "@material-ui/icons/Language";

function Footer() {
  return (
    <>
      <section className={styles.footer}>
        <section className={styles.amazon_services}>
          <section className={styles.section_list}>
            <h4>Get to Know Us</h4>
            <ul>
              <li>Careers</li>
              <li>Blog</li>
              <li>About Amazon</li>
              <li>Investor Relations</li>
              <li>Amazon Devices</li>
              <li>Amazon Science</li>
            </ul>
          </section>
          <section className={styles.section_list}>
            <h4>Make Money with Us</h4>
            <ul>
              <li>Sell products on Amazon</li>
              <li>Sell on Amazon Business</li>
              <li>Sell apps on Amazon</li>
              <li>Become an Affiliate</li>
              <li>Advertise Your Products</li>
              <li>Self-Publish with Us</li>
              <li>Host an Amazon Hub</li>
              <li>> See More Make Money with Us</li>
            </ul>
          </section>
          <section className={styles.section_list}>
            <h4>Amazon Payment Products</h4>
            <ul>
              <li>Amazon Business Card</li>
              <li>Shop with Points</li>
              <li>Reload Your Balance</li>
              <li>Amazon Currency Converter</li>
            </ul>
          </section>
          <section className={styles.section_list}>
            <h4>Let Us Help You</h4>
            <ul>
              <li>Amazon and COVID-19</li>
              <li>Your Account</li>
              <li>Your Orders</li>
              <li>Shipping Rates & Policies</li>
              <li>Returns & Replacements</li>
              <li>Manage Your Content and Devices</li>
              <li>Amazon Assistant</li>
              <li>Help</li>
            </ul>
          </section>
        </section>
        <section className={styles.region}>
          <div>
            <img
              className={styles.footer_logo}
              src='http://pngimg.com/uploads/amazon/amazon_PNG11.png'
              alt=''
            />
          </div>
          <div className={styles.selections}>
            <div className={`${styles.language} ${styles.select}`}>
              <LanguageIcon
                style={{ fontSize: 18, paddingLeft: 9, paddingRight: 9 }}
              />
              English
            </div>
            <div className={`${styles.currency} ${styles.select}`}>
              <p>$ USD - U.S Dollar</p>
            </div>
            <div className={`${styles.countries} ${styles.select}`}>
              <span className='fp us'></span>
              <p>United States</p>
            </div>
          </div>
        </section>
      </section>
    </>
  );
}

export default Footer;
