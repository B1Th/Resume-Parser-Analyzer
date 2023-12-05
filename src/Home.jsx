// import React, { useEffect } from "react";

// const Home = () => {
//   return (
//     <>
//       <div className="landing">
//         <div className="landing_des">
//           <div className="landing_des_content">
//             <h1>
//               Resume parsing <br /> simplified using AI
//             </h1>
//             <p>
//               See how well your resume is read by Application Tracking Systems
//               <br /> (ATS) when applying to jobs.
//             </p>
//             <div className="btn">
//               <a href="#gotoparse">Get Started</a>
//             </div>
//           </div>
//         </div>
//         <div className="landing_des">
//           <div className="ball">
//             <h1>Image</h1>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Home;

import React from "react";

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
          <div className="ball">
            <h1>Content</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
