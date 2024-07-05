import React, { useEffect, useState } from "react";
import styles from "./Home.module.css";
import { FaArrowRight, FaRupeeSign, FaGuitar } from "react-icons/fa";
import { FaPenToSquare } from "react-icons/fa6";
import { SiHomeassistant, SiHomebridge } from "react-icons/si";
import { MdMobileScreenShare, MdOutlineWeb, MdSecurity } from "react-icons/md";
import { TbMessagePause } from "react-icons/tb";
import { GrGamepad } from "react-icons/gr";
import MyCard from "../Courses/MyCard";
import { NavLink } from "react-router-dom";

const Home = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/Courses")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data.length > 0) {
          setData(data.slice(0, Math.min(data.length, 6)));
        }
      });
  }, []);
  return (
    <>
      <div className={`${styles["heroSection1"]} container`}>
        <div className="row">
          <div className={`${styles["stepPara"]} col-md`}>
            <div className={`${styles["circle_rotate"]} mb-4`}>
              <img src="../Images/hero-1-circle.png" alt="" />
            </div>
            <h1>Step into the World of Possibilities</h1>
            <h4>Learn, Code, Create!</h4>
            <NavLink to="/Courses">
              <button className="btn btn-primary px-4 py-3 mt-4">
                View all course
              </button>
            </NavLink>
          </div>
          <div className="col-md">
            <div className={styles.majordiv}>
              <div className={styles.rounded}>
                <img src="../Images/hero-1-circle-4.png" alt="" />
              </div>
              <div className={styles.circle}>
                <img src="../Images/hero-1-circle-3.png" alt="" />
              </div>
              <div className={styles.dot_panel}>
                <img src="../Images/hero-1-dot.png" alt="" />
              </div>
              <div className={styles.img_major1}>
                <img src="../Images/Group-1165039707.png" alt="" />
              </div>
              <div className={styles.img_major2}>
                <img src="../Images/Group-1165039704.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`${styles["heroSection2"]} container-fluid`}>
        <div className="container">
          <div
            className={`${styles["herosection2Base"]} row d-flex justify-content-between align-items-center`}
          >
            <div className={`${styles["Choices"]} col-md-6`}>
              <h1>
                Find The Right <br />
                Career Choice For You
              </h1>
            </div>
            <div className="col-md-4"></div>
            <div className={`${styles["moreCategory"]} col-md-2`}>
              <NavLink
                to="/Courses"
                style={{ textDecoration: "none", color: "black" }}
              >
                <p>
                  View all Category <FaArrowRight />
                </p>
              </NavLink>
            </div>
          </div>
          <div className="row d-flex justify-content-between align-items-center">
            <div className="col-sm">
              <div className={`${styles["allCourses"]} d-flex`}>
                <FaGuitar style={{ color: "#2d08e2", fontSize:"35px" }} />

                <h5>Full Stack Development</h5>
              </div>
              <div className={styles.allCourses}>
                <FaPenToSquare style={{ color: "#2d08e2", fontSize:"35px" }} />

                <h5>Data Science</h5>
              </div>
              <div className={styles.allCourses}>
                <SiHomeassistant style={{ color: "#2d08e2", fontSize:"35px" }} />
                <h5>Digital Marketing</h5>
              </div>
            </div>
            <div className="col-sm">
              <div className={styles.allCourses}>
                <MdOutlineWeb style={{ color: "#2d08e2", fontSize:"35px" }} />

                <h5>Web Development</h5>
              </div>
              <div className={styles.allCourses}>
                <TbMessagePause style={{ color: "#2d08e2", fontSize:"35px" }} />

                <h5>AI and Machine learning</h5>
              </div>
              <div className={styles.allCourses}>
                <SiHomebridge style={{ color: "#2d08e2", fontSize:"35px" }} />

                <h5>UI/UX</h5>
              </div>
            </div>
            <div className="col-sm">
              <div className={styles.allCourses}>
                <MdMobileScreenShare style={{ color: "#2d08e2", fontSize:"35px" }} />

                <h5>App Development</h5>
              </div>
              <div className={styles.allCourses}>
                <MdSecurity style={{ color: "#2d08e2", fontSize:"35px" }} />

                <h5>Cyber Security</h5>
              </div>
              <div className={styles.allCourses}>
                <GrGamepad style={{ color: "#2d08e2", fontSize:"35px" }} />

                <h5>Game Development</h5>
              </div>
            </div>
          </div>

          <div className={styles.heroSection3}>
            <div
              className={`${styles["Frame_Image"]} d-flex justify-content-center align-items-center`}
            >
              <img
                src="../Images/Frame-39-1.png"
                alt="Sorry image not loaded...."
              />
              <div className={styles.aboutFrame}>
                <p>100% Scholarship</p>
                <h1>
                  Unleash The Priceless
                  <br />
                  Power Of Your Potential.
                </h1>
                <button className="btn btn-primary px-4 py-3 bold">
                  Join Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`${styles["heroSection4"]} container`}>
        <div className="row">
          <div className={`${styles["ExploreCourses"]} col-lg-5`}>
            <h1>
              Explore <br />
              Our Popular Courses
            </h1>
          </div>
          <div className={`${styles["courseNav"]} col-lg-7`}>
            <div className="row">
              <div className="col">
                <li>Sell All</li>
              </div>
              <div className="col">
                <li>Web Development</li>
              </div>
              <div className="col">
                <li>App Development</li>
              </div>
              <div className="col">
                <li>Data Science</li>
              </div>
              <div className="col">
                <li>Digital Marketing</li>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={`${styles["cardWrap"]} container`}>
        {data.map((data, index) => (
          <MyCard key={index} data={data} />
        ))}
      </div>
      <div className={`${styles["heroSection5"]} container-fluid`}>
        <div className="container">
          <center>
            <h1>Upcoming Events</h1>
            <p>We found 4 events available for you.</p>
          </center>
          <center>
            <div className={styles.eventSection}>
              <div className={styles.upcoming_event}>
                <div className={styles.event_time}>
                  <p>September 15, 2023</p>
                  <span></span>
                  <p> 10:30 am - 01:00 pm</p>
                  <span></span>
                  <p>Online Webinar</p>
                </div>
                <div
                  className={`${styles["roadmap"]} d-flex justify-content-between`}
                >
                  <h5>Roadmap to become a Full Stack Web Developer</h5>
                  <p>
                    Join Now<i className="fa-solid fa-arrow-right ms-2"></i>
                  </p>
                </div>
              </div>

              <div className={styles.upcoming_event}>
                <div className={`${styles["event_time"]} d-flex`}>
                  <p>September 15, 2023</p>
                  <span></span>
                  <p> 10:30 am - 01:00 pm</p>
                  <span></span>
                  <p>Online Webinar</p>
                </div>
                <div
                  className={`${styles["roadmap"]} d-flex justify-content-between`}
                >
                  <h5>Scholarship Test - KST'23</h5>
                  <p>
                    Join Now<i className="fa-solid fa-arrow-right ms-2"></i>
                  </p>
                </div>
              </div>

              <div className={styles.upcoming_event}>
                <div className="event-time d-flex">
                  <p>September 15, 2023</p>
                  <span></span>
                  <p> 10:30 am - 01:00 pm</p>
                  <span></span>
                  <p>Online Webinar</p>
                </div>
                <div
                  className={`${styles["roadmap"]} d-flex justify-content-between`}
                >
                  <h5>
                    Roadmap to become a Data Scientist & Expertise Machine
                    Learning | Amit Sir
                  </h5>
                  <p>
                    Join Now<i className="fa-solid fa-arrow-right ms-2"></i>
                  </p>
                </div>
              </div>

              <div className={styles.upcoming_event}>
                <div className={`${styles["event_time"]} d-flex`}>
                  <p>September 15, 2023</p>
                  <span></span>
                  <p> 10:30 am - 01:00 pm</p>
                  <span></span>
                  <p>Online Webinar</p>
                </div>
                <div
                  className={`${styles["roadmap"]} d-flex justify-content-between`}
                >
                  <h5>
                    Expert Talk on Cybersecurity & Ethical Hacking | Ranjan Raja
                  </h5>
                  <p>
                    Join Now<i className="fa-solid fa-arrow-right ms-2"></i>
                  </p>
                </div>
              </div>
            </div>
            <div className={styles.partners}>
              <h1>Placement Partners</h1>
              <div className="row d-flex justify-content-between align-items-center ">
                <div className="col-2"></div>

                <div className="col-lg-4">
                  <div className="row">
                    <div className={`${styles["partners_img"]} col-6`}>
                      <img src="../Images/google.png" alt="" />
                    </div>
                    <div className={`${styles["partners_img"]} col-6`}>
                      <img src="../Images/maketrip.png" alt="" />
                    </div>
                  </div>
                </div>

                <div className="col-lg-4">
                  <div className="row">
                    <div className={`${styles["partners_img"]} col-6`}>
                      <img src="../Images/amazon.png" alt="" />
                    </div>
                    <div className={`${styles["partners_img"]} col-6`}>
                      <img src="../Images/infosys.png" alt="" />
                    </div>
                  </div>
                </div>

                <div className="col-2"></div>
              </div>
              <div className="row d-flex justify-content-between align-items-center ">
                <div className="col-2"></div>
                <div className="col-lg-4">
                  <div className="row">
                    <div className={`${styles["partners_img"]} col-6`}>
                      <img src="../Images/SEF.png" alt="" />
                    </div>
                    <div className={`${styles["partners_img"]} col-6`}>
                      <img src="../Images/sony.png" alt="" />
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="row">
                    <div className={`${styles["partners_img"]} col-6`}>
                      <img src="../Images/tcs.png" alt="" />
                    </div>
                    <div className={`${styles["partners_img"]} col-6`}>
                      <img src="../Images/TechMahindra.png" alt="" />
                    </div>
                  </div>
                </div>
                <div className="col-2"></div>
              </div>
              <div className="row d-flex justify-content-between align-items-center ">
                <div className="col-2"></div>

                <div className="col-lg-4  ">
                  <div className="row">
                    <div className={`${styles["partners_img"]} col-6`}>
                      <img src="../Images/flipkart.png" alt="" />
                    </div>
                    <div className={`${styles["partners_img"]} col-6`}>
                      <img src="../Images/adobe.png" alt="" />
                    </div>
                  </div>
                </div>

                <div className="col-lg-4">
                  <div className="row">
                    <div className={`${styles["partners_img"]} col-6`}>
                      <img src="../Images/hcl.png" alt="" />
                    </div>
                    <div className={`${styles["partners_img"]} col-6`}>
                      <img src="../Images/airtel.png" alt="" />
                    </div>
                  </div>
                </div>
                <div className="col-2"></div>
              </div>
            </div>
          </center>

          <div className={styles.box}>
            <h1>
              Join Kodu Excelerate <br /> your Coding Future
            </h1>
            <div className={styles.cta_shape}>
              <img src="../Images/cta-shape.png" alt="" />
            </div>
            <button className="btn">Get Started</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
