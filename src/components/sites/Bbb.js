import { React, useState, useEffect, createContext } from "react";
import ReactSlidy from "react-slidy";
import styles from "../../css/projects.module.css";
import "react-slidy/lib/styles.css";

const SLIDES = ["images/slider/bbb.jpg", "images/slider/prices.jpg", "images/slider/contact.jpg"];

const Bbb = () => {
  const [actualSlide, setActualSlide] = useState(0);

  const updateSlide = ({ currentSlide }) => {
    setActualSlide(currentSlide);
  };

  return (
    <>
     <h5 className={styles.title}>Beautician</h5>
      <ReactSlidy infiniteLoop doAfterSlide={updateSlide} slide={actualSlide}>
        {SLIDES.map((src) => (
          <img className={styles.siteImage}  width="100%" height="316px" alt="Job Site" key={src} src={src} />
        ))}
      </ReactSlidy>
      <div className={styles.tags}>
        <ul className={styles.tags2}>
          <li>HTML</li>
          <li>CSS</li>
          <li>Javascript</li>
          <li>PHP</li>
        </ul>
      </div>
      {actualSlide === 0 ? (
        <p className={styles.text}>
         Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown
        </p>
      ) : null}
      {actualSlide === 1 ? (
        <p className={styles.text}>
         Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown
        </p>
      ) : null}
       {actualSlide === 2 ? (
        <p className={styles.text}>
         Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown
        </p>
      ) : null}
    </>
  );
};

export default Bbb;
