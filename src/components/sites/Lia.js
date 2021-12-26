import { React, useState, useEffect, useRef } from "react";
import ReactSlidy from "react-slidy";
import styles from "../../css/projects.module.css";
import "react-slidy/lib/styles.css";

const SLIDES = [
  "images/slider/lia.jpg",
  "images/slider/carer.jpg",
  "images/slider/blog.jpg",
  "images/slider/jobsboard.jpg",
  "images/slider/dash.jpg",
  "images/slider/form.jpg",
  "images/slider/indexcarer.jpg",
];

const Lia = () => {
  const [actualSlide, setActualSlide] = useState(0);

  const updateSlide = ({ currentSlide }) => {
    setActualSlide(currentSlide);
  };

  return (
    <>
      {actualSlide === 0 ? (
        <h5 className={styles.title}>Live in Carers</h5>
      ) : null}
      {actualSlide === 1 ? (
        <h5 className={styles.title}>Employer/Client Profiles</h5>
      ) : null}
      {actualSlide === 2 ? (
        <h5 className={styles.title}>Tag Searchable Blogs</h5>
      ) : null}
      {actualSlide === 3 ? <h5 className={styles.title}>Jobsboard</h5> : null}
      {actualSlide === 4 ? (
        <h5 className={styles.title}>Admin Dashboard</h5>
      ) : null}
      {actualSlide === 5 ? (
        <h5 className={styles.title}>Json Web-Token Forms</h5>
      ) : null}
      {actualSlide === 6 ? (
        <h5 className={styles.title}>Employer/Client Directory</h5>
      ) : null}

      <ReactSlidy infiniteLoop doAfterSlide={updateSlide} slide={actualSlide}>
        {SLIDES.map((src) => (
          <img
            className={styles.siteImage}
            width="100%"
            height="316px"
            alt="Job Site"
            key={src}
            src={src}
          />
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
      <hr className={styles.hr}/>
      {actualSlide === 0 ? (
        <p className={styles.text}>
          A employment/resource website equipped with a admin panel, built in
          roster creation/mailer, employer/client directory & employer portal.
        </p>
      ) : null}
      {actualSlide === 1 ? (
        <p className={styles.text}>
          A secure way to store employer/client credentials and documentation. A
          Built in notes widget with notifications to help keep organised and a
          roster system to create, save and email out weekly rosters.
        </p>
      ) : null}
      {actualSlide === 2 ? (
        <p className={styles.text}>
          A blogs directory with regex querying of blog tags, all images are
          stored in Amazons S3 Bucket.
        </p>
      ) : null}
      {actualSlide === 3 ? (
        <p className={styles.text}>
          A jobs-board directory for potential employees to apply, a secure sign
          up form will then be emailed to the recipient automatically.
        </p>
      ) : null}
      {actualSlide === 4 ? (
        <p className={styles.text}>
          A fully featured admin panel, from here the owner can draft blog posts
          and job-posts, look up clients and employees in a beautiful directory,
          view and update individual profiles.
        </p>
      ) : null}
      {actualSlide === 5 ? (
        <p className={styles.text}>
          A secure json-web token interactive sign up form for clients and
          employees.
        </p>
      ) : null}
      {actualSlide === 6 ? (
        <p className={styles.text}>
          A beautiful directory for looking up clients and employees with
          uncompleted notes notifications.
        </p>
      ) : null}
      
     
    </>
  );
};

export default Lia;
