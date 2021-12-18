import React from "react";
import styles from "../css/aboutMe.module.css";

const AboutMe = () => {
  return (
    <>
      <div className={styles.lightBox}>
        <img
          className={styles.light}
          src="images/light.png"
          alt="hanging light bulb"
          width="180"
          height="auto"
        />
        <div className={styles.lightBeam}></div>
        <p className={styles.aboutMe}>
          In publishing and graphic design, Lorem ipsum is a placeholder text
          commonly used to demonstrate the visual form of a documents In
          publishing and graphic.
          In publishing and graphic design, Lorem ipsum is a placeholder text
          commonly used to demonstrate the visual form of a documents In
          publishing and graphic.
        </p>
        
      </div>
    </>
  );
};

export default AboutMe;
