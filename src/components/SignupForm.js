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
    <div>
      <div>
        <button>Student</button>
        <button>Instructor</button>
      </div>
      <form>
        <div>
          <label htmlFor="first-name">First name</label>
          <input
            type="text"
            name="firstName"
            onChange={handler}
            placeholder="Enter first name"
          />
        </div>
        <div>
          <label htmlFor="last-name">First name</label>
          <input
            type="text"
            name="lastName"
            onChange={handler}
            placeholder="Enter last name"
          />
        </div>
        <div>
          <label htmlFor="email">
            Email Address<sup>*</sup>
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handler}
            required
          />
        </div>
        <div>
          <label htmlFor="password">
            Create Password<sup>*</sup>
          </label>
          <input
            type={showPass ? "text" : "password"}
            name="password"
            value={formData.password}
            onChange={handler}
            required
          />
          <span onClick={() => setShowPass((prev) => !prev)}>
            {showPass ? <FaRegEyeSlash /> : <FaRegEye />}
          </span>
        </div>
        <div>
          <label htmlFor="password">
            Confirm Password<sup>*</sup>
          </label>
          <input
            type={showPass ? "text" : "password"}
            name="password"
            value={formData.password}
            onChange={handler}
            required
          />
          <span onClick={() => setShowPass((prev) => !prev)}>
            {showPass ? <FaRegEyeSlash /> : <FaRegEye />}
          </span>
        </div>
        <button>Create Account</button>
      </form>
    </div>
  );
};
export default SignupForm;
