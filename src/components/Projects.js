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
                  <p>Beautician</p>
                </div>

                
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
                  <p className={styles.sliderTitle}>Live-In Carers</p>
                </div>
                <img
                  src={"images/slider/carer.jpg"}
                  alt="Live-In Carers Site "
                  width="100%"
                  height="auto"
                />
                <p>Employees/Client Profile Features</p>
                <ul>
                  <li>Personal notes with notifactions</li>
                  <li>Rosterer with built in mailer</li>
                  <li>Employee portal</li>
                  <li>Document manager</li>
                  <li>Store personal details securely</li>
                </ul>
                <img
                  src={"images/slider/clientLarge.jpg"}
                  alt="Live-In Carers Site "
                  width="100%"
                  height="auto"
                />
                <p>JSON-Token Sign Up Forms</p>

                <img
                  src={"images/slider/form.jpg"}
                  alt="Live-In Carers Site "
                  width="100%"
                  height="auto"
                />

                <p>Admin Control Panel</p>

                <img
                  src={"images/slider/dash.jpg"}
                  alt="Live-In Carers Site "
                  width="100%"
                  height="auto"
                />

                <p>Jobs Board</p>

                <img
                  src={"images/slider/jobsboard.jpg"}
                  alt="Live-In Carers Site "
                  width="100%"
                  height="auto"
                />

                <p>Tag Searchable Blogs</p>

                <img
                  src={"images/slider/blog.jpg"}
                  alt="Live-In Carers Site "
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
              src={"images/slider/comingSoon.jpg"}
              alt="Coming Soon "
              width="100%"
              height="280"
            />
          </div>
          <div className={styles.back}>
            <section className={styles.starWars}>
              <div className={styles.crawl}>
                <div className={styles.title}>
                  <p>Solidty - Blockchain</p>
                </div>
               
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
