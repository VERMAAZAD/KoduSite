import React from "react";
import styles from "./Footer.module.css";
import { FaArrowRight } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className={`${styles["footerSection"]} container-fluid`}>
      <div className="container ">
        <div className="row">
          <div className={`${styles["footerlogo"]} col-sm`}>
            <img src="../Images/Kodu.png" alt="" />
            <p>
              Journey into the World of Coding: Learn, Innovate, and Create with
              Our Comprehensive Platform
            </p>
          </div>
          <div className="col-sm">
            <li className={styles.footerhead}>Company</li>
            <li>Contact</li>
            <li>Courses</li>
            <li>About</li>
            <li>Privacy policy</li>
            <li>Terms & Condition’s</li>
            <li>Cancellation and Refund Policy</li>
          </div>
          <div className="col-lg">
            <li className={styles.footerhead}>Our Centre</li>
            <li>Hisar</li>
            <li>Sirsa</li>
            <li>Rohtak</li>
            <li>Sikar</li>
            <li>Jaipur</li>
            <li>Full Stack Development Course</li>
          </div>
          <div className="col-xl">
            <li className={styles.footerhead}>Join Kodu</li>
            <div className={styles.footerinput}>
              <input type="text" placeholder="Your email address" />
              <div className={styles.arrowRight}>
              <FaArrowRight className={styles.Rightarrow} />
              </div>
            </div>
            <p>Get the latest news and updates right at your inbox.</p>
          </div>
        </div>
      </div>
      <hr style={{ marginTop: "5%" }} />
      <center className={styles.copyrightfooter}>
        <p>Copyright © Kodu. All Rights Reserved</p>
        <h6>MADE WITH ❤️ IN INDIA</h6>
      </center>
    </footer>
  );
};

export default Footer;
