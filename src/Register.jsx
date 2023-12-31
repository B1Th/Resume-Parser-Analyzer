import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <>
      <div className="register">
        <form>
          <div class="register_form">
            <h1>Register</h1>
            <h4>Please fill in this form to create an account.</h4>
            <hr />
            <input
              type="email"
              placeholder="Enter Email"
              name="email"
              id="email"
              autoComplete="off"
              required
            />

            <input
              type="password"
              placeholder="Enter Password"
              name="psw"
              id="psw"
              autoComplete="off"
              required
            />
            <input
              type="password"
              placeholder="Repeat Password"
              name="psw-repeat"
              id="psw-repeat"
              autoComplete="off"
              required
            />
            <p>
              By creating an account you agree to our
              <a href="#">Terms & Privacy</a>
            </p>
            <button type="submit" class="registerbtn">
              Register
            </button>
            <p>
              Already have an account? <Link to="/login">Sign in</Link>
            </p>
          </div>
        </form>
      </div>
    </>
  );
};

export default Register;
