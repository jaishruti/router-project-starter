import React from "react";
import Signup from "../pages/Signup";
import Login from "../pages/Login";
import frame from "../assets/frame.png";
import SignupForm from "./SignupForm";
import LoginForm from "./LoginForm";
const Template = ({ title, desc1, desc2, image, formType, setIsLogin }) => {
  //title-descript-buttons
  return (
    <div>
      <div>
        <div>
          <h1>{title}</h1>
          <p>
            <span>{desc1}</span>
            <span>{desc2}</span>
          </p>
          {formType === "signup" ? <SignupForm /> : <LoginForm />}
        </div>
        <div>
          <div></div>
          <p>OR</p>
          <div></div>
        </div>
        <button>
          <p>Sign Up with Google</p>
        </button>
      </div>
      <div>
        <img
          src={frame}
          alt="pattern-frame"
          width={558}
          height={504}
          loading="lazy"
        />
        <img
          src={image}
          alt="pattern-frame"
          width={558}
          height={480}
          loading="lazy"
        />
      </div>
    </div>
  );
};
export default Template;
