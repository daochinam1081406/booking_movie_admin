import React from "react";
import "./Navbar.scss";
import { useSelector } from "react-redux";

const Navbar = () => {
  const { loginAccount } = useSelector((state) => state.auth);

  return (
    <div className="navbar">
      <div className="wrapper">
        <div></div>
        <div className="items">
          <div className="item">
            <h3 style={{ color: "#2a1868" }}>Hi {loginAccount.hoTen} </h3>
            <img
              src={`https://i.pravatar.cc/150?u=${loginAccount.hoTen}`}
              alt=""
              className="avatar"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
