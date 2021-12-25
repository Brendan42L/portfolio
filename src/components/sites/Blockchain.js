import { React, useState, useEffect, createContext } from "react";
import ReactSlidy from "react-slidy";
import styles from "../../css/projects.module.css";
import "react-slidy/lib/styles.css";

const SLIDES = ["images/slider/comingSoon.jpg"];

const Blockchain = () => {

    const [actualSlide, setActualSlide] = useState(0);

    const updateSlide = ({ currentSlide }) => {
      setActualSlide(currentSlide);
    };

    
    return (
        <>
        <h5 className={styles.title}>Solidity/Blockchain</h5>
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
    )
}

export default Blockchain
