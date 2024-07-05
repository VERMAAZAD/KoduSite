import React from "react";
import styles from "../Home/Home.module.css";
import { FaRupeeSign, FaArrowRight } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const MyCard = ({ data }) => {
  return (
    <div>
      <div
        className={`${styles["card"]} card`}
        style={{ width: "20rem", minHeight: "320px" }}
      >
        <img src={data.img} className="card-img-top" alt="..." />
        <div className="card-body">
          <p className="card-text" style={{ fontWeight: "500" }}>
            {data.Desc}
          </p>
          <hr />
          <div className="card-foot d-flex justify-content-between align-items-center ">
            <p>
              <a
                href="#"
                className={styles.CourseCharge}
                style={{ fontSize: "15px" }}
              >
                <FaRupeeSign style={{ fontSize: "15px", marginTop: "-3px" }} />
                {data.Price}
              </a>
            </p>
            <p onClick={window.scrollTo(0, 0)}>
              <NavLink
                to={
                  "/Courses/AboutCourses?Desc=" +
                  data.Desc +
                  "&img=" +
                  data.img +
                  "&Price=" +
                  data.Price
                }
                className={styles.knowDetails}
              >
                Know Details <FaArrowRight />
              </NavLink>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyCard;
