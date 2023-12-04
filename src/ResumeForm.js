import React, { useState } from "react";

const ResumeForm = () => {
  const [resumeFile, setResumeFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setResumeFile(file);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Backend API endpoint for resume parsing
    const apiUrl = "BACKEND_API_URL";

    const formData = new FormData();
    formData.append("resume", resumeFile);

    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        const result = await response.json();
        // Process the parsed resume data
        console.log(result);
      } else {
        console.error("Failed to parse resume");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="parsing_container">
      <h1>Resume Parser</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="resume">Upload Resume:</label>
        <input
          type="file"
          id="resume"
          accept=".pdf,.doc,.docx"
          onChange={handleFileChange}
        />
        <button type="submit">Parse Resume</button>
      </form>
    </div>
  );
};

export default ResumeForm;
