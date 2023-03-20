import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { help, test } from "../api/auth";
import { set_cookie } from "../utilities/getCookie";

function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  function handleChange(e) {
    const { value, name } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  function login() {
    test().then((res) => {
      //   set_cookie("loggedIn", true);
      navigate("/");
    });
  }

  function signup() {
    help().then((res) => {
      navigate("/");
    });
  }

  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className=" flex flex-col space-y-4 border border-solid border-black p-4 rounded w-1/3">
        <label htmlFor="email">Email</label>
        <input
          type="text"
          name="email"
          id="email"
          onChange={handleChange}
          placeholder="enter the email"
          className="border border-solid border-black p-1"
        />
        <label htmlFor="password">Password</label>
        <input
          type="text"
          name="password"
          id="password"
          onChange={handleChange}
          placeholder="enter the password"
          className="border border-solid border-black p-1"
        />
        <button onClick={login} className="bg-blue-400 p-2 rounded">
          Login
        </button>

        <button onClick={signup} className="bg-blue-400 p-2 rounded">
          Sign up
        </button>
      </div>
    </div>
  );
}

export default Login;
