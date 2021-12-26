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
      <hr className={styles.hr}/>
      {actualSlide === 0 ? (
        <p className={styles.text}>
       Content coming soon...
        </p>
      ) : null}
       <div style={{ display: "flex", justifyContent: "space-between" }}>
        <a href={"https://bbb-yz3t4.ondigitalocean.app/"}>
          <img
            className={styles.view}
            src="images/code.svg"
            alt="code"
            width="43"
            height="auto"
          />
        </a>
        <a href={"https://bbb-yz3t4.ondigitalocean.app/"}>
          <img
            className={styles.view}
            src="images/binoculars.svg"
            alt="binoculars"
            width="43"
            height="auto"
          />
        </a>
      </div>
        </>
        
    )
}

export default Blockchain
