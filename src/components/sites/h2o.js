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
        <h5 className={styles.title}>Employer/Client Profiles</h5>
      ) : null}
      {actualSlide === 2 ? (
        <h5 className={styles.title}>Tag Searchable Blogs</h5>
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
          A employment/resource website equipped with a admin panel, built in
          roster creation/mailer, employer/client directory & employer portal.
        </p>
      ) : null}
      {actualSlide === 1 ? (
        <p className={styles.text}>
          A secure way to store employer/client credentials and documentation. A
          Built in notes widget with notifications to help keep organised and a
          roster system to create, save and email out weekly rosters.
        </p>
      ) : null}
      {actualSlide === 2 ? (
        <p className={styles.text}>
          A blogs directory with regex querying of blog tags, all images are
          stored in Amazons S3 Bucket.
        </p>
      ) : null}
      
        </>
        
    )
}

export default Blockchain
