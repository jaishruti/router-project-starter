import React from "react";
import { useState } from "react";
import { FaRegEyeSlash } from "react-icons/fa6";
import { FaRegEye } from "react-icons/fa6";

const LoginForm = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [showPass, setShowPass] = useState(false);
  const handler = (event) => {
    setFormData((prevData) => ({
      ...prevData,
      [event.target.name]: [event.target.value],
    }));
  };
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col text-slate-500">
        <label htmlFor="email">
          Email Address<sup>*</sup>
        </label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handler}
          className="p-2 border border-slate-400 rounded-md"
          required
        />
        </div>
      
      <div className="flex flex-col text-slate-500">
        <label htmlFor="password">
          Password<sup className="ml-1 text-red-700">*</sup>
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

        <button className=" bg-yellow-400 text-black p-2 rounded-md text-center hover:font-semibold">
          Sign In
        </button>
      
    </div>
  );
};
export default LoginForm;
