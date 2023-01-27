import React from "react";
import { RxModulzLogo } from "react-icons/rx";
import { SlBasket } from "react-icons/sl";
import { CgProfile } from "react-icons/cg";
import { useDispatch } from "react-redux";
import { profileToggle } from "../redux/actions/app";
import { Link, useNavigate } from "react-router-dom";
const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const toggle = () => {
    navigate("register");
    console.log("clik");
  };

  return (
    <div className="border flex justify-between items-center rounded-lg bg-slate-100 px-3 shadow-sm">
      <div>
        <RxModulzLogo className="cursor-pointer" size={90} color="#355764" />
      </div>
      <div className="flex space-x-4 items-center ">
        <input className="outline-none border rounded-lg p-2 w-5/6" placeholder="Search" />
        <div className="relative">
          <SlBasket className="cursor-pointer" size={35} color="#355764" />
          <span className="absolute -top-2 left-4 bg-red-500 p-1 rounded-full text-xs text-white px-2">2</span>
        </div>
        <CgProfile onClick={toggle} className="cursor-pointer" size={35} color="#355764" />
      </div>
    </div>
  );
};

export default Header;
