import React from "react";
import styles from "./Home.module.css";

import { Product, Header, Footer } from "../components";
import HomeSlider from "./homeSlider/Slider";
import { SliderData } from "../../assets/SliderData";

function Home() {
  return (
    <>
      <Header />
      <div className={styles.home}>
        <HomeSlider slides={SliderData} />
        <div className={styles.home_row}>
          <Product
            id={1}
            title='The lean startup'
            price={29.99}
            image='https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg'
            rating={5}
          />
          <Product
            id={2}
            title='Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl'
            price={239.0}
            image='https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg'
            rating={4}
          />
        </div>
        <div className={styles.home_row}>
          <Product
            id={3}
            title='Samsung LC49RG'
            price={199.99}
            image='https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg'
            rating={3}
          />
          <Product
            id={4}
            title='Amazon Echo'
            price={98.99}
            image='https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$'
            rating={5}
          />
          <Product
            id={5}
            title='New Apple Ipad Pro'
            price={598.99}
            image='https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg'
            rating={5}
          />
        </div>
        <div className={styles.home_row}>
          <Product
            id={6}
            title='Samsung LC49RGUXEN'
            price={1049.99}
            image='https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg'
            rating={5}
          />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
