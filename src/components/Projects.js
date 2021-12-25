import { React, useState, useEffect, useRef } from "react";
import styles from "../css/projects.module.css";
import Lia from "../components/sites/Lia";
import Bbb from "../components/sites/Bbb";
import Blockchain from "../components/sites/Blockchain";

const Projects = () => {
  
  return (
    <>
      <h2 className={styles.header}>Work</h2>
      <div className={styles.wrapper}>
        <div className={styles.card}>
          <Lia />
        </div>
       
        <div className={styles.card}>
          <Bbb />
        </div>

        <div className={styles.card}>
          <Blockchain />
        </div>
      </div>
    </>
  );
};

export default Projects;
