// import Template from "../components/Auth/Template";
// import signupImg from "../assets/signup.png";

import Template from "../components/Template";
import signup from "../assets/signup.png";
function Signup({ setIsLoggedIn }) {
  return (
    <Template
      title="Join Us"
      desc1="Unfold the world of technology"
      desc2="With an essence of spiritual touch"
      image={signup}
      formType="signup"
      setIsLogin={setIsLoggedIn}
    />
  );
}

export default Signup;
