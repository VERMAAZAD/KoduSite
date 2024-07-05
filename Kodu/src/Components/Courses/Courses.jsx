import { FaSearch } from "react-icons/fa";
import styles from "./Courses.module.css";

import React, { useEffect, useState } from "react";
import MyCard from "./MyCard";

const Courses = () => {
  const [cardData, setCardData] = useState([]);
  const [filterId, setFilterId] = useState("all");
  const handleFilter = (e) => {
    e.preventDefault();
    setFilterId(e.target.id);
  };
  useEffect(() => {
    fetch(`http://localhost:5000/Courses?Category=${filterId}`)
      .then((resp) => {
        return resp.json();
      })
      .then((CatchData) => {
        console.log(CatchData);
        setCardData(CatchData);
      })
      .catch((error) => console.log(error));
  }, [filterId]);

  return (
    <div className={styles.aboutCourses}>
      <div className={styles.topImage}>
        <img
          src="../Images/topPictureFriends.png"
          alt=""
          style={{ width: "100%", height: "100%" }}
        />
      </div>
      <div className="container-fluid">
        <div className={`${styles["section"]} row`}>
          <div className="col-lg-3">
            <div className={styles.sidebar_input}>
              <input type="text" placeholder="search..." />
              <FaSearch />
            </div>
            <div className={styles.sidebar_courses}>
              <h5 style={{ fontWeight: "bolder" }}>Category</h5>
              <li onClick={handleFilter}>
                <input type="checkbox" />
                <a id="AIMachinelearning">AI & Machine learning</a>
              </li>
              <li onClick={handleFilter}>
                <input type="checkbox" />
                <a id="AppDevelopment">App Development</a>
              </li>
              <li onClick={handleFilter}>
                <input type="checkbox" />
                <a id="CyberSecurity">Cyber Security</a>
              </li>
              <li onClick={handleFilter}>
                <input type="checkbox" /> <a id="DataScience">Data Science</a>
              </li>
              <li onClick={handleFilter}>
                <input type="checkbox" />
                <a id="DigitalMarketing">Digital Marketing</a>
              </li>
              <li onClick={handleFilter}>
                <input type="checkbox" />
                <a id="FullStackDevelopment">Full Stack Development</a>
              </li>
              <div>
                <li onClick={handleFilter}>
                  <input type="checkbox" />
                  <a id="GameDevelopment">Game Development</a>
                </li>
              </div>
              <li onClick={handleFilter}>
                <input type="checkbox" />
                <a id="WebDevelopment">Web Development</a>
              </li>
            </div>
          </div>
          <div className="col-9">
            <div className={styles.cardBox}>
              {cardData.map((data) => (
                <MyCard key={data._id} data={data} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
