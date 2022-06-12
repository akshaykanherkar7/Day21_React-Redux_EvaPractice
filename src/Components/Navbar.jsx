import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../store/Auth/auth.action";

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isAuth } = useSelector((state) => state.auth);

  const authHandler = () => {
    if (isAuth) {
      dispatch(logout());
    } else {
      navigate("/login");
    }
  };

  return (
    <div>
      <button onClick={authHandler}>{isAuth ? "Logout" : "Login"}</button>
    </div>
  );
};

export default Navbar;
