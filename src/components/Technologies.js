import React from "react";
import styles from "../css/technologies.module.css";

function Technologies() {
  return (
    <>
      <div className={styles.parent}>
        <div className={styles.languageBox}>
          <img
            className={styles.languageLogo}
            src={"images/html.png"}
            alt="html 5 logo"
            width="auto"
            height="60"
          />
          <p>HTML</p>
        </div>
        <div className={styles.languageBox}>
          <img
            className={styles.languageLogo}
            src={"images/css.png"}
            alt="css logo"
            width="auto"
            height="60"
          />
          <p>CSS</p>
        </div>

        <div className={styles.languageBox}>
          <img
            className={styles.languageLogo}
            src={"images/js.png"}
            alt="javascript logo"
            width="auto"
            height="60"
          />
          <p>Javascript</p>
        </div>
        <div className={styles.languageBox}>
          <img
            className={styles.languageLogo}
            src={"images/solidity.svg"}
            alt="solidity logo"
            width="auto"
            height="80"
          />
          <p>Solidity</p>
        </div>

        <div className={styles.languageBox}>
          <img
            className={styles.languageLogo}
            src={"images/Node.js_logo.svg"}
            alt="node js logo"
            width="auto"
            height="80"
          />
        </div>
        <div className={styles.languageBox}>
          <img
            className={styles.languageLogo}
            src={"images/nextjs.svg"}
            alt="next.js logo"
            width="auto"
            height="62"
          />
        </div>
        <div className={styles.languageBox}>
          <img
            className={styles.languageLogo}
            src={"images/react.png"}
            alt="react logo"
            width="auto"
            height="65"
          />
          <p>React</p>
        </div>

        <div className={styles.languageBox}>
          <img
            className={styles.languageLogo}
            src={"images/express.svg"}
            alt="Express logo"
            width="auto"
            height="70"
          />
        </div>
        <div className={styles.languageBox}>
          <img
            className={styles.languageLogo}
            src={"images/web3js.svg"}
            alt="web3.js logo"
            width="auto"
            height="90"
          />
          <p>Web3.js</p>
        </div>
        <div className={styles.languageBox}>
          <img
            className={styles.languageLogo}
            src={"images/material UI.png"}
            alt="material UI logo"
            width="auto"
            height="80"
          />
          <p>Material UI</p>
        </div>
        <div className={styles.languageBox}>
          <img
            className={styles.languageLogo}
            src={"images/mySql.svg"}
            alt="mySql logo"
            width="auto"
            height="110"
          />
        </div>

        <div className={styles.languageBox}>
          <img
            className={styles.languageLogo}
            src={"images/mongoDB.png"}
            alt="mongoDb logo"
            width="auto"
            height="90"
          />
        </div>

      

        <div className={styles.languageBox}>
          <img
            className={styles.languageLogo}
            src={"images/ether.svg"}
            alt="Ethers.js logo"
            width="auto"
            height="70"
          />
           <p>Ethers.js</p>
        </div>

        <div className={styles.languageBox}>
          <img
            className={styles.languageLogo}
            src={"images/git.svg"}
            alt="git logo"
            width="auto"
            height="70"
          />
          <p>Git</p>
        </div>
        <div className={styles.languageBox}>
          <img
            className={styles.languageLogo}
            src={"images/github.svg"}
            alt="git logo"
            width="auto"
            height="85"
          />
          <p>Github</p>
        </div>

        <div className={styles.languageBox}>
          <img
            className={styles.languageLogo}
            src={"images/affinity.svg"}
            alt="Affinity logo"
            width="auto"
            height="95"
          />
        </div>

        <div className={styles.languageBox}>
          <img
            className={styles.languageLogo}
            src={"images/affinityDesigner.svg"}
            alt="Affinity Designer logo"
            width="auto"
            height="95"
          />
        </div>

        

        
        <div className={styles.languageBox}>
          <img
            className={styles.languageLogo}
            src={"images/Figma-logo.svg"}
            alt="Figma logo"
            width="auto"
            height="75"
          />
          <p>Figma</p>
        </div>
      </div>
    </>
  );
}

export default Technologies;
 