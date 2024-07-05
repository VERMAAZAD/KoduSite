import React from "react";
import styles from "./AboutCourse.module.css";
import { useLocation } from "react-router-dom";
import { FaRupeeSign } from "react-icons/fa";

const AboutCourse = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  return (
    <div>
      <div className={styles.topImage}>
        <img
          src="../Images/topPictureFriends.png"
          alt=""
          style={{ width: "100%", height: "100%" }}
        />
      </div>
      <div className="container">
        <h1>Course Details</h1>
        <div
          className={`${styles["CourseSection"]} row d-flex justify-content-between`}
        >
          <div className="col-lg-8">
            <h1>{query.get("Desc")}</h1>
            <img src={query.get("img")} alt="" width="100%" />
          </div>
          <div className="col-1"></div>
          <div className={`${styles["cardSection"]} container col-lg-3`}>
            <div className={`${styles["card"]} card `}>
              <img src={query.get("img")} className="card-img-top" alt="..." />
              <div className="card-body">
                <p className="card-text">
                  <FaRupeeSign />
                  {query.get("Price")}
                </p>
                <hr />
                <button className={`${styles["addCart"]} btn btn-primary`}>
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutCourse;
