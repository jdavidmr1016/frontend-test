import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { logout } from "../../slices/authSlice";

export const Sidebar = () => {
  const channels = useSelector((state) => state.channels);
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <>
      {/* Start Sidebar */}
      <aside className="hidden w-full md:visible md:w-3/12 bg-[#531554] md:flex flex-col border-collapse text-white">
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
            Logout
          </button>
        </div>
        <div className="flex flex-col items-start justify-center pl-8 pt-4 w-full gap-1">
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "bg-blue-600 transition-all ease-in-out delay-150 w-full"
                : "hover:bg-slate-500 transition-all ease-in-out delay-150 w-full"
            }
            to="/"
          >
            Home
          </NavLink>
          <h4 className=" w-full "> Channels</h4>
          <hr className="bg-gray-200 w-full h-0" />
          <div className="flex flex-col gap-1 w-full">
            {channels.map((chnl, id) => (
              <NavLink
                key={id}
                className={({ isActive }) =>
                  isActive
                    ? "bg-blue-600 transition-all ease-in-out delay-150"
                    : "hover:bg-slate-500 transition-all ease-in-out delay-150"
                }
                to={`/chl/${chnl.toLowerCase()}`}
              >
                #{chnl}
              </NavLink>
            ))}
          </div>
        </div>
        <div className="flex items-center justify-start pl-8 pt-4">
          <h4> Users</h4>
          {/* <hr className="bg-gray-200 w-full h-0" /> */}
          <div className="flex flex-col"></div>
        </div>
        <div className="flex items-center justify-start pl-8 pt-4">
          <h4> Direct Messages</h4>

          <div className="flex flex-col"></div>
        </div>
      </aside>
      {/* End Sidebar */}
    </>
  );
};
