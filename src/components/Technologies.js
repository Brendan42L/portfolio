import { React, useState, useEffect } from "react";
import styles from "../css/technologies.module.css";

function Technologies() {
  const [open, setOpen] = useState(false);

  const openDrawer = () => {
    open ? setOpen(false) : setOpen(true);
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <h2 className={styles.header}>Tech Stack</h2>
          <ul>
            <li>React/Next.js</li>
            <li>Node.js</li>
            <li>Express</li>
            <li>Solidity</li>
            <li>Hardhat</li>
            <li>Mongodb</li>
            <li>Mysql</li>
            <li id={styles.expander} onClick={openDrawer}>
              {open ? "View Less" : "View More"}
            </li>
          </ul>
        </div>
        {open ? (
          <ul className={styles.extra}>
            <li>Javascript</li>
            <li>HTML 5</li>
            <li>CSS</li>
            <li>Web3.js</li>
            <li>Ether.js</li>
            <li>Material UI</li>
            <li>Git</li>
            <li>Github</li>
            <li>Affinity Photo</li>
            <li>Affinity Designer</li>
            <li>Figma</li>
          </ul>
        ) : null}
      </div>
    </>
  );
}

export default Technologies;
