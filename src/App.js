import "./App.css";
import { Route, Routes } from "react-router-dom";
// import { Navbar } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Navbar from "./components/Navbar";
import { useState } from "react";

function App() {
  const [isLoggedIn, setIslogin] = useState(false);
  return (
    <div>
      <Navbar isLoggedIn={isLoggedIn} setIsLogin={setIslogin} />
      {/* <Signup setIsLoggedIn={setIslogin} /> */}
      <Routes>
        {/* <Route path="/" element={<MainHeader />} */}
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
