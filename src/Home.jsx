import React from "react";
import landing from "./images/landing.png";

const Home = () => {
  return (
    <>
      <div className="landing">
        <div className="landing_des">
          <div className="landing_des_content">
            <h1>
              Resume parsing <br />
              <span className="gradient-text">simplified </span>using{" "}
              <span className="gradient-text">AI</span>
            </h1>
            <p>
              See how well your resume is read by Application Tracking Systems{" "}
              <br /> (ATS) when applying to jobs.
            </p>
            <div className="btn">
              <a href="#gotoparser">Get Started</a>
            </div>
          </div>
        </div>
        <div className="landing_des">
          <div className="landing_img">
            <img src={landing} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
