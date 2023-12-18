import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const ResumeForm = () => {
  useEffect(() => {
    Aos.init({ duration: 2000, once: true });
  }, []);
  return (
    <div className="parsing_container" id="gotoparser">
      <div className="parsing_container_content" data-aos="fade-up">
        <h1>Resume Parser</h1>
        <form>
          <label>Upload Resume:</label>
          <input type="file" id="resume" accept=".pdf,.doc,.docx" />
          <button type="submit">Parse Resume</button>
        </form>
      </div>
    </div>
  );
};

export default ResumeForm;
