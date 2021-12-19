import React from "react";
import styles from "../css/projects.module.css";

const Projects = () => {
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.box}>
          <div className={styles.front}>
            <img
              src={"images/bbb.jpg"}
              alt="Beauty By Brendan Site "
              width="100%"
              height="auto"
            />
          </div>
          <div className={styles.back}>
            <section className={styles.starWars}>
              <div className={styles.crawl}>
                <div className={styles.title}>
                  <p>Live In Angels</p>
                </div>

                <p>
                  It is a period of civil war. Rebel spaceships, striking from a
                  hidden base, have won their first victory against the evil
                  Galactic Empire.
                </p>

                <p>
                  It is a period of civil war. Rebel spaceships, striking from a
                  hidden base, have won their first victory against the evil
                  Galactic Empire.
                </p>
                <p>
                  It is a period of civil war. Rebel spaceships, striking from a
                  hidden base, have won their first victory against the evil
                  Galactic Empire.
                </p>
                <p>
                  It is a period of civil war. Rebel spaceships, striking from a
                  hidden base, have won their first victory against the evil
                  Galactic Empire.
                </p>
              </div>
            </section>
          </div>
          <div className={styles.btnBox}>
            <div className={styles.binocularsTip}>
              <img
                src="/images/binoculars.svg"
                alt="binoculars"
                width="35"
                s
                height="auto"
              />
              <span>Observe in the wild</span>
            </div>

            <div className={styles.codeTip}>
              <img src="/images/code.svg" alt="code" width="35" height="auto" />
              <span>Look behind the scenes</span>
            </div>
          </div>
        </div>

        <div className={styles.box} id={styles.box2}>
          <div className={styles.front}>
            <img
              src={"images/lia.jpg"}
              alt="Live In Angels Site"
              width="100%"
              height="auto"
            />
          </div>
          <div className={styles.back}>
            <section className={styles.starWars}>
              <div className={styles.crawl}>
                <div className={styles.title}>
                  <p>Live In Angels</p>
                </div>
                <img
                  src={"images/bbb.jpg"}
                  alt="Beauty By Brendan Site "
                  width="100%"
                  height="auto"
                />
                <p>
                  It is a period of civil war. Rebel spaceships, striking from a
                  hidden base, have won their first victory against the evil
                  Galactic Empire.
                </p>
                <img
                  src={"images/lia.jpg"}
                  alt="Live In Angels Site"
                  width="100%"
                  height="auto"
                />
                <p>
                  It is a period of civil war. Rebel spaceships, striking from a
                  hidden base, have won their first victory against the evil
                  Galactic Empire.
                </p>
                <img
                  src={"images/bbb.jpg"}
                  alt="Beauty By Brendan Site "
                  width="100%"
                  height="auto"
                />

                <img
                  src={"images/lia.jpg"}
                  alt="Live In Angels Site"
                  width="100%"
                  height="auto"
                />
              </div>
            </section>
          </div>
          <div className={styles.btnBox}>
            <div className={styles.binocularsTip}>
              <img
                src="/images/binoculars.svg"
                alt="binoculars"
                width="35"
                s
                height="auto"
              />
              <span>Observe in the wild</span>
            </div>

            <div className={styles.codeTip}>
              <img src="/images/code.svg" alt="code" width="35" height="auto" />
              <span>Look behind the scenes</span>
            </div>
          </div>
        </div>
        <div className={styles.box} box={styles.box3}>
          <div className={styles.front}>
            <img
              src={"images/bbb.jpg"}
              alt="Beauty By Brendan Site "
              width="100%"
              height="auto"
            />
          </div>
          <div className={styles.back}>
            <section className={styles.starWars}>
              <div className={styles.crawl}>
                <div className={styles.title}>
                  <p>Live In Angels</p>
                </div>

                <p>
                  It is a period of civil war. Rebel spaceships, striking from a
                  hidden base, have won their first victory against the evil
                  Galactic Empire.
                </p>

                <p>
                  It is a period of civil war. Rebel spaceships, striking from a
                  hidden base, have won their first victory against the evil
                  Galactic Empire.
                </p>
                <p>
                  It is a period of civil war. Rebel spaceships, striking from a
                  hidden base, have won their first victory against the evil
                  Galactic Empire.
                </p>
                <p>
                  It is a period of civil war. Rebel spaceships, striking from a
                  hidden base, have won their first victory against the evil
                  Galactic Empire.
                </p>
              </div>
            </section>
          </div>
          <div className={styles.btnBox}>
            <div className={styles.binocularsTip}>
              <img
                src="/images/binoculars.svg"
                alt="binoculars"
                width="35"
                s
                height="auto"
              />
              <span>Observe in the wild</span>
            </div>

            <div className={styles.codeTip}>
              <img src="/images/code.svg" alt="code" width="35" height="auto" />
              <span>Look behind the scenes</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
