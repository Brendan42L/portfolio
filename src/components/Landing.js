import React from "react";
import styles from "../css/landing.module.css";
import { Link } from "react-scroll";
import Nav from "../components/NavBar";
import Technologies from "./Technologies";
import Projects from "./Projects";
import AboutMe from "./AboutMe";
import Header from "./Header";
import Contact from "./Contact";
import Footer from "./Footer";


const Landing = () => {
  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  };

  return (
    <>
      <Nav />
      <div className={styles.background} id="home">
        <Header />
        <Link
          to="about"
          spy={true}
          smooth={true}
          offset={-100}
          duration={1000}
          className={styles.chevronPostion1}
        >
         <img
          className={styles.chevron}
          src="images/chev.svg"
          alt="svg"
          width="55"
          height="auto"
        />
        </Link>
      </div>
      <div className={styles.background2} id="about">
        <h2 style={{ margin: "2.5em auto 0.5em auto", opacity: "0.8" }} className={styles.headers}>
          About Me
        </h2>
        {/* <hr className={styles.hrNoMargin} /> */}
        <AboutMe />
        <Link
          to="technologies"
          spy={true}
          smooth={true}
          offset={-100}
          duration={1000}
          className={styles.chevronPostion2}
        >
         <img
          className={styles.chevron}
          src="images/chev.svg"
          alt="svg"
          width="55"
          height="auto"
        />
        </Link>
      </div>
      <div className={styles.background3} id="technologies">
        <h2 style={{ margin: "2em auto 0.5em auto" }} className={styles.headers}>
          Technologies I Know
        </h2>
        <hr className={styles.hr} />

        <Technologies />

        <Link
          to="projects"
          spy={true}
          smooth={true}
          offset={-131}
          duration={1000}
          className={styles.chevronPostion3}
        >
           <img
          className={styles.chevron}
          src="images/chev.svg"
          alt="svg"
          width="55"
          height="auto"
        />
        </Link>
      </div>
      <div className={styles.background4} id="projects">
        <h2 style={{ margin: "1em auto 0.5em auto"}} className={styles.headers}>My Projects</h2>
        <hr className={styles.hr} />
        <Projects />
        <Link
          to="contact"
          spy={true}
          smooth={true}
          offset={-100}
          duration={1000}
          className={styles.chevronPostion4}
        >
           <img
          className={styles.chevron}
          src="images/chev.svg"
          alt="svg"
          width="55"
          height="auto"
        />
        </Link>
      </div>
      <div className={styles.background5} id="contact">
        
        <Contact />
        <Link
          to="home"
          spy={true}
          smooth={true}
          offset={-120}
          duration={1000}
          className={styles.chevronPostion5}
        >
          <img
          id={styles.returnChev}
          className={styles.chevron}
          src="images/chev.svg"
          alt="svg"
          width="55"
          height="auto"
        />
        </Link>
      </div>
      <Footer/>
    </>
  );
};

export default Landing;
