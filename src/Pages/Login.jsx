import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginApi } from "../store/Auth/auth.action";

const Login = () => {
  const [creds, setCreds] = useState({
    email: "eve.holt@reqres.in",
    password: "cityslicka",
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isAuth } = useSelector((state) => state.auth);

  const handleOnchange = (e) => {
    let { name, value } = e.target;

    setCreds({ ...creds, [name]: value });
  };

  if (isAuth) {
    navigate("/");
  }
  //   else {
  //     navigate("/login");
  //   }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginApi(creds));
  };
  return (
    <div>
      Login
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="email"
          name="email"
          onChange={handleOnchange}
        />
        <input
          type="text"
          placeholder="password"
          name="password"
          onChange={handleOnchange}
        />
        <input type="submit" />
      </form>
    </div>
  );
};

export default Login;
