import React, { useState, useEffect } from "react";
import styles from "./Slider.module.css";
import { SliderData } from "../../../assets/SliderData";

import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

function HomeSlider({ slides }) {
  const [current, setCurrent] = useState(0);
  const [arraySlide, setArraySlide] = useState([]);
  const length = slides.length;

  const prevSlideHandler = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  const nextSlideHandler = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  // useEffect(() => {
  //   setArraySlide({ slides });
  //   return arraySlide;
  // }, []);

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <div className={styles.home_container}>
      <button
        className={`${styles.button} ${styles.prev}`}
        onClick={prevSlideHandler}
      >
        <ArrowBackIosIcon style={{ fontSize: 50 }} />
      </button>
      {SliderData.map((slide, index) => {
        return (
          <div
            key={index}
            className={
              index === current
                ? `${styles.slide} ${styles.active}`
                : `${styles.slide}`
            }
          >
            {index === current && (
              <img className={styles.image} src={slide.image} alt='' />
            )}
          </div>
        );
      })}
      <button
        onClick={nextSlideHandler}
        className={`${styles.button} ${styles.next}`}
      >
        <ArrowForwardIosIcon style={{ fontSize: 50 }} />
      </button>
    </div>
  );
}

export default HomeSlider;
