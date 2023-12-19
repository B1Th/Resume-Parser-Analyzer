import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";

const Login = () => {
  useEffect(() => {
    Aos.init({ duration: 2000, once: true });
  }, []);
  return (
    <>
      <div className="login" data-aos="fade-left">
        <div className="login_container">
          <h1>Login</h1>
          <div className="login_form">
            <div className="login_form_content">
              <input
                type="email"
                name="email"
                placeholder="Email"
                autoComplete="off"
                required
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                autoComplete="off"
                required
              />
              <div className="check">
                <input type="checkbox" name="checkbox" />
                <p>I agree to terms and conditions</p>
              </div>
              <button type="submit">Signin</button>
              <p>
                Don't have an account? <Link to="/register">Register Now</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
