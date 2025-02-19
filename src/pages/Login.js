import Template from "../components/Template";
import loginImg from "../assets/login.png";

function Login({ setIsLoggedIn }) {
  return (
    <Template
      title="Welcome Back"
      desc1="Kickstart your learning journey"
      desc2="With an essence of innovative touch"
      image={loginImg}
      formType="login"
      setIsLogin={setIsLoggedIn}
    />
  );
}

export default Login;
