import React from "react";
import styles from "../css/landing.module.css";
import { Link } from "react-scroll";
import Nav from "../components/NavBar";
import Technologies from "./Technologies";
import Projects from "./Projects";
import AboutMe from "./AboutMe";
import Header from "./Header";
import Contact from "./Contact";

const Landing = () => {
  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  };

  return (
    <div>
      <Nav />
      <div className={styles.background} id="home">
        <Header />
        <Link
          to="about"
          spy={true}
          smooth={true}
          offset={0}
          duration={1000}
          className={styles.chevronPostion1}
        >
          <span className={styles.chevron}></span>
        </Link>
      </div>
      <div className={styles.background2} id="about">
        <h2 style={{ margin: "3em auto 0 auto" }} className={styles.headers}>
          A Little About Me
        </h2>
        <hr className={styles.hrNoMargin} />
        <AboutMe />
        <Link
          to="technologies"
          spy={true}
          smooth={true}
          offset={-100}
          duration={1000}
          className={styles.chevronPostion2}
        >
          <span className={styles.chevron}></span>
        </Link>
      </div>
      <div className={styles.background3} id="technologies">
        <h2 style={{ margin: "1.5em auto 0 auto" }} className={styles.headers}>
          Technologies I Know
        </h2>
        <hr className={styles.hr} />

        <Technologies />

        <Link
          to="projects"
          spy={true}
          smooth={true}
          offset={0}
          duration={1000}
          className={styles.chevronPostion3}
        >
          <span className={styles.chevron}></span>
        </Link>
      </div>
      <div className={styles.background4} id="projects">
        <h2 className={styles.headers}>My Projects</h2>
        <hr className={styles.hr} />
        <Projects />
        <Link
          to="contact"
          spy={true}
          smooth={true}
          offset={0}
          duration={1000}
          className={styles.chevronPostion4}
        >
          <span className={styles.chevron}></span>
        </Link>
      </div>
      <div className={styles.background5} id="contact">
        <h2 className={styles.headers}>Get In Touch</h2>
        <hr className={styles.hr} />
        <Contact />
        <Link
          to="home"
          spy={true}
          smooth={true}
          offset={0}
          duration={1000}
          className={styles.chevronPostion5}
        >
          <span className={styles.chevron}></span>
        </Link>
      </div>
    </div>
  );
};

export default Landing;
