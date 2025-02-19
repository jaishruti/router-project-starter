import React from "react";
import { useState } from "react";
import { FaRegEyeSlash } from "react-icons/fa6";
import { FaRegEye } from "react-icons/fa6";

const SignupForm = () => {
  const [formData, setFormData] = useState({ firstName: "", lastName: "" });
  const [showPass, setShowPass] = useState(false);
  const handler = (event) => {
    setFormData((prevData) => ({
      ...prevData,
      [event.target.name]: [event.target.value],
    }));
  };
  return (
    <div className="flex flex-col gap-4">
      <div className="gap-1 flex justify-between bg-slate-700 text-white p-2 rounded-xl items-center">
        <div className="bg-slate-500 w-[9.5rem] p-2 rounded-lg text-center">
          <button>Student</button>
        </div>
        <div className=" w-[9.5rem] p-2 rounded-lg text-center">
          <button>Instructor</button>
        </div>
      </div>
      <form className="flex flex-col gap-2">
        <div className="flex gap-3">
          <div className="flex flex-col text-slate-500">
            <label htmlFor="first-name ">First name</label>
            <input
              type="text"
              name="firstName"
              onChange={handler}
              placeholder="Enter first name"
              className="p-2 border border-slate-400 rounded-md w-[10rem]"
            />
          </div>
          <div className="flex flex-col text-slate-500">
            <label htmlFor="last-name ">Last name</label>
            <input
              type="text"
              name="lastName"
              onChange={handler}
              placeholder="Enter last name"
              className="p-2 border border-slate-400 rounded-md w-[10rem]"
            />
          </div>
        </div>
        <div className="flex flex-col text-slate-500">
          <label htmlFor="email">
            Email Address<sup>*</sup>
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handler}
            required
            className="p-2 border border-slate-400 rounded-md"
          />
        </div>
        <div className="flex flex-col text-slate-500">
          <label htmlFor="password" className="">
            Create Password<sup className="ml-1 text-red-700">*</sup>
          </label>
          <div className="flex gap-2 items-center ">
            <input
              type={showPass ? "text" : "password"}
              name="password"
              value={formData.password}
              onChange={handler}
              className="p-2 border border-slate-400 rounded-md w-[300px]"
              required
            />
            <span
              className="text-lg "
              onClick={() => setShowPass((prev) => !prev)}
            >
              {showPass ? <FaRegEyeSlash /> : <FaRegEye />}
            </span>
          </div>
        </div>
        <div className="flex flex-col text-slate-500">
          <label htmlFor="password">
            Confirm Password<sup>*</sup>
          </label>
          <div className="flex gap-2 items-center ">
            <input
              type={showPass ? "text" : "password"}
              name="password"
              value={formData.password}
              onChange={handler}
              className="p-2 border border-slate-400 rounded-md w-[300px]"
              required
            />
            <span
              className="text-lg "
              onClick={() => setShowPass((prev) => !prev)}
            >
              {showPass ? <FaRegEyeSlash /> : <FaRegEye />}
            </span>
          </div>
        </div>
        <button className=" bg-yellow-400 p-2 rounded-md text-center hover:font-semibold">
          Create Account
        </button>
      </form>
    </div>
  );
};
export default SignupForm;
