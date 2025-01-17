import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { logout } from "../../slices/authSlice";

import { BiExit } from "react-icons/bi";
import { ActiveUsers } from "./menus/ActiveUsers";
import { Channels } from "./menus/Channels";
import { CloseMenuBtn } from "./menubtn/CloseMenuBtn";

export const Sidebar = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.ui.isSidebarOpen);
  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <>
      {/* Start Sidebar */}
      <aside
        className={
          isOpen === false
            ? "absolute md:static hidden w-full h-full md:visible md:w-3/12 bg-[#531554] md:flex flex-col justify-between md:justify-start border-collapse text-white transition-all ease-in-out delay-300"
            : "absolute md:static w-full h-full md:visible md:w-3/12 bg-[#531554] md:flex flex-col justify-between md:justify-start border-collapse text-white transition-all ease-in-out delay-300"
        }
      >
        {/* User Div */}
        <div className="flex justify-between shadow-sm shadow-[#514d51]">
          <div className="flex items-center justify-start h-16 gap-3">
            <img
              src="https://randomuser.me/api/portraits/women/52.jpg"
              alt="User-Logo"
              className="rounded-full"
              width="42px"
              height="36px"
            />
            <div className="flex flex-col">
              <h4> Test User</h4>
              <small>test@dev.io</small>
            </div>
          </div>
          <button
            className="bg-red-700 px-4 shadow-md shadow-[#514d51] hover:shadow-xl hover:bg-red-900 transition-all ease-in-out delay-150"
            onClick={handleLogout}
          >
            <BiExit />
          </button>
        </div>
        {/* end user Div  */}
        {/* Start menu  */}
        <div className="flex flex-col items-start justify-center pl-8 pt-4 w-full gap-1">
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "pl-2 border-l-4 border-blue-500 transition-all ease-in-out delay-150 w-full"
                : "hover:bg-slate-500 transition-all ease-in-out delay-150 w-full"
            }
            to="/"
          >
            Home
          </NavLink>
          {/* Channels */}
          <Channels />
          {/* Users actives */}
          <ActiveUsers />
        </div>
        {/* End menu */}
        <div className=" flex items-center justify-end w-full ">
          <div className="mr-2">
            <CloseMenuBtn />
          </div>
        </div>
      </aside>
      {/* End Sidebar */}
    </>
  );
};
