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
            <p>Accpets Multiple File Formats</p>
          </div>
          <div className="services_container_des">
            <img src={resume} />
            <p>Extracts Resume Data</p>
          </div>
          <div className="services_container_des">
            <img src={summary} />
            <p>Provide Brief Summary Of Resume</p>
          </div>
          <div className="services_container_des">
            <img src={ranking} />
            <p>Ranks Resumes Based On Matching</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
