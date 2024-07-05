import styles from "./Header.module.css";
import {
  FaChevronDown,
  FaSearch,
  FaShoppingCart,
  FaBars,
} from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { IoMdAdd } from "react-icons/io";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  const handleShowSidebar = () => {
    setShowSidebar(true);
  };
  const handleHideSidebar = () => {
    setShowSidebar(false);
  };

  const [showCourses, setShowCourses] = useState(false);
  const [idName, setIdName] = useState("");

  const handleShowCourses = (e) => {
    e.preventDefault();
    setIdName((prev) => (prev != e.target.id ? e.target.id : ""));

    if (!showCourses) {
      setShowCourses(true);
    } else {
      setShowCourses(false);
    }
  };

  const [searchCourses, setSearchCourses] = useState([]);
  const [allApiData, setAllApiData] = useState([]);
  const [filterData, setFilterData] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/Courses`)
      .then((resp) => resp.json())
      .then((AllData) => {
        setAllApiData(AllData);
        setFilterData(AllData);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleInput = (value) => {
    if (value == "") {
      setSearchCourses([]);
      return;
    }
    const respData = filterData.filter((course) => {
      return course.Desc && course.Desc.toLowerCase().includes(value);
    });
    setSearchCourses(respData);
    console.log(respData);
  };

  const [sticky, setSticky] = useState(false);
  useEffect(() => {
    const handleNav = () => {
      if (window.scrollY > 100) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };
    window.addEventListener("scroll", handleNav);
  }, []);
  return (
    <header className={`${sticky ? `${styles["MainHeader"]}` : ""}`}>
      <div className={`${styles["header"]} container-fluid d-flex `}>
        <div className={`${styles["header_left"]} d-flex`}>
          <div className={styles.logo}>
            <img src="../Images/Kodu.png" alt="" height="35px" width="105px" />
          </div>
          <span className={styles.line}></span>
          <div className={`${styles["category"]} d-flex align-items-center`}>
            <li>Category</li>
          </div>
        </div>

        <div className={styles.header_right}>
          <ul className={styles.nav}>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/Courses">
                Courses <FaChevronDown className={styles.Down} />
              </NavLink>
              <ul className={styles.dropdown}>
                {allApiData.map((descData) => (
                  <li key={descData._id} className="list-group-item">
                    <NavLink
                      to={
                        "/Courses/AboutCourses?img=" +
                        descData.img +
                        "&Desc=" +
                        descData.Desc +
                        "&Price=" +
                        descData.Price
                      }
                    >
                      {descData.Desc}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </li>

            <li>
              <NavLink>
                Centers <FaChevronDown className={styles.Down} />
              </NavLink>
              <ul className={styles.dropdown}>
                <li className="list-group-item">
                  <NavLink
                    to={"/Center?City=" + "Hisar" + "&State=" + "Haryana"}
                  >
                    Hisar
                  </NavLink>
                </li>
                <li className="list-group-item">
                  <NavLink
                    to={"/Center?City=" + "Sirsa" + "&State=" + "Haryana"}
                  >
                    Sirsa
                  </NavLink>
                </li>
                <li className="list-group-item">
                  <NavLink
                    to={"/Center?City=" + "Rohtak" + "&State=" + "Haryana"}
                  >
                    Rohtak
                  </NavLink>
                </li>
                <li className="list-group-item">
                  <NavLink
                    to={"/Center?City=" + "Sikar" + "&State=" + "Rajasthan"}
                  >
                    Sikar
                  </NavLink>
                </li>
                <li className="list-group-item">
                  <NavLink
                    to={"/Center?City=" + "Jaipur" + "&State=" + "Rajasthan"}
                  >
                    Jaipur
                  </NavLink>
                </li>
              </ul>
            </li>

            <li>
              <NavLink>Scholarship</NavLink>
            </li>

            <li>
              <NavLink>
                Quiz <FaChevronDown className={styles.Down} />
              </NavLink>
              <ul className={styles.dropdown}>
                <li className="list-group-item">
                  <a href="">HTML</a>
                </li>
                <li className="list-group-item">
                  <a href="">CSS</a>
                </li>
                <li className="list-group-item">
                  <a href="">JS</a>
                </li>
              </ul>
            </li>
          </ul>

          <div>
            <div className={styles.header_input}>
              <FaSearch />
              <input
                type="text"
                onChange={(e) => {
                  handleInput(e.target.value);
                }}
              />
              <span className={styles.line2}></span>
              <FaShoppingCart />
            </div>
            {searchCourses.length > 0 ? (
              <ul className={styles.input_dropdown}>
                {searchCourses.map((course, i) => (
                  <li key={i} className="list-group-item">
                    <NavLink
                      to={
                        "/Courses/AboutCourses?img=" +
                        course.img +
                        "&Desc=" +
                        course.Desc +
                        "&Price=" +
                        course.Price
                      }
                    >
                      {course.Desc}
                    </NavLink>
                  </li>
                ))}
              </ul>
            ) : (
              <></>
            )}
          </div>

          <div className={styles.header_button}>
            <NavLink to="/Courses">
              <button className="btn btn-primary">Enroll now</button>
            </NavLink>
          </div>
          <div className={styles.bars} onClick={handleShowSidebar}>
            <FaBars style={{ fontSize: "30px" }} />
          </div>
        </div>
        <div
          className={styles.sidebar}
          style={showSidebar ? { display: "block" } : { display: "none" }}
        >
          <div
            className={`${styles["sidebar-upper"]} d-flex justify-content-between align-items-center`}
          >
            <div className={styles.sidebar_kodulogo}>
              <img
                src="../Images/Kodu.png"
                alt=""
                height="35px"
                width="100px"
              />
            </div>
            <div className={styles.sidebar_close_button}>
              <RxCross2
                style={{ fontSize: "25px" }}
                onClick={handleHideSidebar}
              />
            </div>
          </div>
          <div className={styles.sidebar_menu}>
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <a
                  href=""
                  className="d-flex justify-content-between"
                  onClick={handleShowCourses}
                >
                  Courses
                  <IoMdAdd id="i1" className={styles.IoMdAdd} />
                </a>
                <ul
                  className={styles.sidebar_courses_dropdown}
                  style={
                    idName == "i1" ? { display: "block" } : { display: "none" }
                  }
                >
                  {allApiData.map((descData) => (
                    <li key={descData._id} className="list-group-item">
                      <NavLink
                        to={
                          "/Courses/AboutCourses?img=" +
                          descData.img +
                          "&Desc=" +
                          descData.Desc +
                          "&Price=" +
                          descData.Price
                        }
                      >
                        {descData.Desc}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </li>
              <li>
                <a href="" className="d-flex justify-content-between">
                  Centers
                  <IoMdAdd
                    className={styles.IoMdAdd}
                    onClick={handleShowCourses}
                    id="i2"
                  />
                </a>
                <ul
                  className={styles.sidebar_centers_dropdown}
                  style={
                    idName == "i2" ? { display: "block" } : { display: "none" }
                  }
                >
                  <li className="list-group-item">
                    <NavLink
                      to={"/Center?City=" + "Hisar" + "&State=" + "Haryana"}
                    >
                      Hisar
                    </NavLink>
                  </li>
                  <li className="list-group-item">
                    <NavLink
                      to={"/Center?City=" + "Sirsa" + "&State=" + "Haryana"}
                    >
                      Sirsa
                    </NavLink>
                  </li>
                  <li className="list-group-item">
                    <NavLink
                      to={"/Center?City=" + "Rohtak" + "&State=" + "Haryana"}
                    >
                      Rohtak
                    </NavLink>
                  </li>
                  <li className="list-group-item">
                    <NavLink
                      to={"/Center?City=" + "Sikar" + "&State=" + "Rajasthan"}
                    >
                      Sikar
                    </NavLink>
                  </li>
                  <li className="list-group-item">
                    <NavLink
                      to={"/Center?City=" + "Jaipur" + "&State=" + "Rajasthan"}
                    >
                      Jaipur
                    </NavLink>
                  </li>
                </ul>
              </li>
              <li>
                <a href="">Scholarship</a>
              </li>
              <li>
                <a href="" className="d-flex justify-content-between">
                  Quiz{" "}
                  <IoMdAdd
                    id="i3"
                    className={styles.IoMdAdd}
                    onClick={handleShowCourses}
                  />
                </a>
                <ul
                  className={styles.sidebar_quiz_dropdown}
                  style={
                    idName == "i3" ? { display: "block" } : { display: "none" }
                  }
                >
                  <li className="list-group-item">
                    <a href="">HTML</a>
                  </li>
                  <li className="list-group-item">
                    <a href="">CSS</a>
                  </li>
                  <li className="list-group-item">
                    <a href="">JS</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div className={styles.sidebar_input}>
            <input type="text" placeholder="search..." />
            <FaSearch />
          </div>
          <div className={styles.sidebar_cart}>
            <button
              type="button"
              className={`${styles["btnColor"]} btn btn-primary position-relative`}
            >
              <FaShoppingCart />
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                0<span className="visually-hidden">unread messages</span>
              </span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
