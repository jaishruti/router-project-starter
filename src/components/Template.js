import React from "react";
import Signup from "../pages/Signup";
import Login from "../pages/Login";
import frame from "../assets/frame.png";
import SignupForm from "./SignupForm";
import LoginForm from "./LoginForm";
const Template = ({ title, desc1, desc2, image, formType, setIsLogin }) => {
  //title-descript-buttons
  return (
    <div className="flex justify-center items-start gap-20 mt-5 p-5">
      <div className="flex flex-col gap-2">
        <div>
          <h1 className="text-2xl">{title}</h1>
          <p className="flex flex-col text-slate-500 text-md">
            <span>{desc1}</span>
            <span>{desc2}</span>
          </p>
          {formType === "signup" ? <SignupForm /> : <LoginForm />}
        </div>
        <div className="flex justify-center items-center gap-3">
          <div className="h-[1px] w-[8rem] bg-slate-500"></div>
          <p className="text-slate-500">OR</p>
          <div className="h-[1px] w-[8rem] bg-slate-500"></div>
        </div>
        <button className=" bg-yellow-400 p-2 rounded-md text-center hover:font-semibold">
          <p>Sign Up with Google</p>
        </button>
      </div>
      <div className="flex">
        <img
          className="relative"
          src={frame}
          alt="pattern-frame"
          width={490}
          height={460}
          loading="lazy"
        />
        <img
          className="absolute translate-x-3 translate-y-3 z-10"
          src={image}
          alt="pattern-frame"
          width={488}
          height={490}
          loading="lazy"
        />
      </div>
    </div>
  );
};
export default Template;
