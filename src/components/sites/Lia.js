import { React, useState, useEffect, useRef } from "react";
import ReactSlidy from "react-slidy";
import styles from "../../css/projects.module.css";
import "react-slidy/lib/styles.css";

const SLIDES = ["images/slider/lia.jpg", "images/slider/carer.jpg","images/slider/clientLarge.jpg","images/slider/blog.jpg","images/slider/jobsboard.jpg","images/slider/dash.jpg","images/slider/form.jpg","images/slider/indexcarer.jpg"  ];

const Lia = () => {
  const [actualSlide, setActualSlide] = useState(0);

  const updateSlide = ({ currentSlide }) => {
    setActualSlide(currentSlide);
  };

  return (
    <>
     <h5 className={styles.title}>Live in Carers</h5>
      <ReactSlidy infiniteLoop doAfterSlide={updateSlide} slide={actualSlide}>
        {SLIDES.map((src) => (
          <img className={styles.siteImage} width="100%" height="316px" alt="Job Site" key={src} src={src} />
        ))}
      </ReactSlidy>
      <div className={styles.tags}>
        <ul>
          <li>Next.js</li>
          <li>Node.js</li>
          <li>Express</li>
          <li>Material UI</li>
          <li>MongoDb</li>
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
      {actualSlide === 3 ? (
        <p className={styles.text}>
       Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown
        </p>
      ) : null}
      {actualSlide === 4 ? (
        <p className={styles.text}>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown
        </p>
      ) : null}
      {actualSlide === 5 ? (
        <p className={styles.text}>
         Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown
        </p>
      ) : null}
       {actualSlide === 6 ? (
        <p className={styles.text}>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown
        </p>
      ) : null}
        {actualSlide === 7 ? (
        <p className={styles.text}>
        ELorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown
        </p>
      ) : null}
      
    </>
  );
};

export default Lia;
