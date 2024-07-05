import styles from "./Center.module.css";
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { FaPhoneAlt } from "react-icons/fa";
import { MdAttachEmail } from "react-icons/md";

const Center = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  // const [city, setCity] = useState("City");
  console.log();
  if (query.get("City") == "Sirsa") {
    console.log("Happy Sirsa");
  }
  return (
    <div className="">
      <div className={`${styles["section1"]} row container `}>
        <div className="col-lg-2"></div>
        <div className={`${styles["MessagesBox"]} col-lg-4`}>
          <h1>Coding Training Institute In {query.get("City")}</h1>
          <p>
            “Kodu” Is One Of The Leading Educational Institute In{" "}
            {query.get("State")} Offers The Best Full Stack Development Training
            In {query.get("City")}, Providing Students With Comprehensive
            Training In All Aspects Of Web & App Development. Our Curriculum
            Covers Both Front-End And Back-End Technologies, Including HTML,
            CSS, JavaScript, React, Node.Js, Express.Js, And Databases Like
            MongoDB. Students Also Receive Hands-On Experience By Working On
            Real-World Projects, Allowing Them To Apply Their Learning In
            Practical Scenarios.
          </p>
          <button>Call Now</button>
        </div>
        <div className="col-lg-1"> </div>
        <div className={`${styles["imgBox"]} col-lg-5`}>
          <img
            src="https://koduapp.com/wp-content/uploads/2023/08/image-6172-1024x672.png"
            alt=""
          />
        </div>
      </div>
      <div className={`${styles["section2"]} container-fluid`}>
        <div className={`${styles["ContactUs"]} row`}>
          <div className="col">
            <FaPhoneAlt
              style={{
                color: "#002dff",
                fontSize: "40px",
                marginRight: "10px",
              }}
            />
            91382-56355
          </div>
          <div className="col">
            <MdAttachEmail
              style={{
                color: "#002dff",
                fontSize: "40px",
                marginRight: "10px",
              }}
            />
            info@mine.lndo.site
          </div>
        </div>
        <div className={`${styles["MapSection"]} row`}>
          <div className="col-1"></div>
          <div className="col-lg-6">
            {query.get("City") == "Sirsa" ? (
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3471.1615794958984!2d75.0448273737974!3d29.540788442261224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39114dc04c4829dd%3A0xd431ab65479ac7d2!2sKodu%20-%20Best%20Coding%20Classes%20in%20Sirsa%20%7C%20Java%20%7C%20C%26C%2B%2B%20%7C%20Python%20%7C%20Web%20Development%20%7C%20React%20JS%20%7C%20MERN%20Stack%20%7C%20App%20Development!5e0!3m2!1sen!2sin!4v1711124953990!5m2!1sen!2sin"
                width="600"
                height="350"
                style={{ border: "0" }}
                loading="lazy"
              ></iframe>
            ) : query.get("City") == "Hisar" ? (
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3485.06156603083!2d75.71675037377712!3d29.133374461164085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3912338c49db4b83%3A0x4c6897447f433a28!2sKodu%20%3A%20Full%20Stack%20Web%20%26%20Mobile%20App%20Development%20Institute%20In%20Hisar%20(%20Coding%2C%20React%20JS%2C%20Java%2C%20Python%2C%20Node%20JS%2C%20iOS%2C%20Android)!5e0!3m2!1sen!2sin!4v1711124828009!5m2!1sen!2sin"
                width="600"
                height="350"
                style={{ border: "0" }}
                loading="lazy"
              ></iframe>
            ) : query.get("City") == "Jaipur" ? (
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.273545771838!2d75.7631134736694!3d26.863048862226353!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db55647a1c469%3A0x4eb6f24dfee6871d!2sKodu%20(Powered%20By%20Dhurina)%20%3A%20Full%20Stack%20Web%20%26%20Mobile%20App%20Development%20Institute%20In%20Jaipur%20(Coding%2C%20MERN%20Stack%2C%20iOS%2C%20Android)!5e0!3m2!1sen!2sin!4v1711125321272!5m2!1sen!2sin"
                width="600"
                height="350"
                style={{ border: "0" }}
                loading="lazy"
              ></iframe>
            ) : query.get("City") == "Rohtak" ? (
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3493.278799710511!2d76.60344607376513!3d28.890062172342496!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d855bddc63079%3A0x4e178cf287a7baff!2sKodu%3A%20Coding%20Classes%20in%20Rohtak%20(Full%20Stack%20Web%20%26%20Software%20Development%2C%20C%20%26%20C%2B%2B%2C%20Python%2C%20PHP%2C%20JavaScript%2C%20React%20%26%20Node%20JS%20)!5e0!3m2!1sen!2sin!4v1711125509602!5m2!1sen!2sin"
                width="600"
                height="350"
                style={{ border: "0" }}
                loading="lazy"
              ></iframe>
            ) : (
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3534.916625801!2d75.1738646737046!3d27.62709872902955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396cbbdb6afb21fb%3A0x5bcac0429ab0134d!2sKodu!5e0!3m2!1sen!2sin!4v1711125411025!5m2!1sen!2sin"
                width="600"
                height="350"
                style={{ border: "0" }}
                loading="lazy"
              ></iframe>
            )}
          </div>
          <div className="col-lg-4">
            <h4>
              We Have 100% Job Guaranteed For The Students And Get Them A Salary
              Package From ₹2.5 Lakhs To ₹10+ Lakhs.{" "}
            </h4>
            <p>
              Scholarship Options | Fee Installment Facility | 100% Job
              Placement | Interview Preparation
            </p>
            <div className={styles.CourseImg}>
              <img
                src="https://koduapp.com/wp-content/uploads/2023/08/12.png"
                alt=""
              />
              <img
                src="https://koduapp.com/wp-content/uploads/2023/08/11.png"
                alt=""
              />
              <img
                src="https://koduapp.com/wp-content/uploads/2023/08/10.png"
                alt=""
              />
              <img
                src="https://koduapp.com/wp-content/uploads/2023/08/9.png"
                alt=""
              />
              <img
                src="https://koduapp.com/wp-content/uploads/2023/08/14.png"
                alt=""
              />
              <img
                src="https://koduapp.com/wp-content/uploads/2023/08/image-6166.png"
                alt=""
              />
              <img
                src="https://koduapp.com/wp-content/uploads/2023/08/image-6167-1.png"
                alt=""
              />
            </div>
          </div>
          <div className="col-1"></div>
        </div>
      </div>
      <div className="row ">
        <div className="col-lg-1"></div>
        <div className={`${styles["section3"]} container col-lg-10`}>
          <h2>
            Course Detail's Of Best Full Stack Development Training In{" "}
            {query.get("City")},{query.get("State")}
          </h2>
          <iframe
            src="https://www.youtube.com/embed/deS0SDdyZwc"
            title="Benefits of Choosing Coding as a Career | Coding Sikhne ke Fayde | Kodu"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            // allowfullscreen
          ></iframe>
          <p>
            KODU Is A Leading Coding Institute In {query.get("City")},{" "}
            {query.get("State")}. Their Full Stack Development Training Offers A
            Comprehensive Curriculum Covering HTML, CSS, JavaScript, React, And
            Angular. Students Gain Skills In Creating Visually Appealing Web
            Interfaces And Dynamic Applications
          </p>
        </div>
        <div className="col-lg-1"></div>
      </div>
    </div>
  );
};

export default Center;
