import { React, useState, useEffect, createContext } from "react";
import ReactSlidy from "react-slidy";
import styles from "../../css/projects.module.css";
import "react-slidy/lib/styles.css";

const SLIDES = ["images/slider/h20One.jpg", "images/slider/h20Three.jpg", "images/slider/h20Two.jpg"];

const Blockchain = () => {

    const [actualSlide, setActualSlide] = useState(0);

    const updateSlide = ({ currentSlide }) => {
      setActualSlide(currentSlide);
    };

    
    return (
        <>
       
        {actualSlide === 0 ? (
       <h5 className={styles.title}>Smart Divers</h5>
      ) : null}
      {actualSlide === 1 ? (
        <h5 className={styles.title}>TITLE SLIDE TWO</h5>
      ) : null}
      {actualSlide === 2 ? (
         <h5 className={styles.title}>TITLE SLIDE THREE</h5>
      ) : null}
             <ReactSlidy infiniteLoop doAfterSlide={updateSlide} slide={actualSlide}>
        {SLIDES.map((src) => (
          <img className={styles.siteImage}  width="100%" height="316px" alt="Job Site" key={src} src={src} />
        ))}
      </ReactSlidy>
      <div className={styles.tags}>
        <ul className={styles.tags2}>
          <li>Next.js</li>
          <li>Solidity</li>
          <li>Node.js</li>
        </ul>
      </div>
      <hr className={styles.hr}/>
      {actualSlide === 0 ? (
        <p className={styles.text}>
          INFO SLIDE ONE
        </p>
      ) : null}
      {actualSlide === 1 ? (
        <p className={styles.text}>
          INFO SLIDE TWO
        </p>
      ) : null}
      {actualSlide === 2 ? (
        <p className={styles.text}>
          INFO SLIDE THREE
        </p>
      ) : null}
      
        </>
        
    )
}

export default Blockchain
