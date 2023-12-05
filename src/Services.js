import React from "react";
import fileFormat from "./images/fileformat.png";
import resume from "./images/resume.png";
import summary from "./images/summary.png";
import ranking from "./images/ranking.png";

const Services = () => {
  return (
    <>
      <div className="services">
        <div className="services_container">
          <div className="services_container_des">
            <img src={fileFormat} />
            <p>ACCEPTS MUTIPLE FILE FORMATES</p>
          </div>
          <div className="services_container_des">
            <img src={resume} />
            <p>EXTRACTS RESUME DATA</p>
          </div>
          <div className="services_container_des">
            <img src={summary} />
            <p>PROVIDE BRIEF SUMMARY OF RESUME</p>
          </div>
          <div className="services_container_des">
            <img src={ranking} />
            <p>RANKS RESUME BASED ON MATCHING</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
