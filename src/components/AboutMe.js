import { React, useState, useEffect } from "react";
import styles from "../css/aboutMe.module.css";

const AboutMe = () => {
  const [startTimestamp, setStartTimestamp] = useState("January, 10, 2030");

  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  setInterval(() => {
    setStartTimestamp(timer());
  }, 1000);

  const timer = () => {
    const time = Date.parse("September, 12, 2020") - Date.parse(new Date());
    const seconds = Math.floor((time / 1000) % 60);
    const minutes = Math.floor((time / 1000 / 60) % 60);
    const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    setSeconds(seconds.toString().replace("-", " "));
    setMinutes(minutes.toString().replace("-", " "));
    setHours(hours.toString().replace("-", " "));
    setDays(days.toString().replace("-", " "));
  };

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
          Hello I'm Brendan, its been{" "}
          <span className={styles.counter}>
            {days} days {hours} hours {minutes} minutes {seconds} seconds
          </span>{" "}
          since I decided to pick up my first programming book since I decided to pick up my first programming book since I decided to pick up my first programming book since I decided to pick up my first programming book.
        </p>
      </div>

      
    </>
  );
};

export default AboutMe;
