import React from "react";
import { MenuBtn } from "../layout/menubtn/MenuBtn";
export const HomePage = () => {
  return (
    <div className="flex  justify-center items-center w-full h-full ">
      <div className="visible flex self-start items-center justify-center mt-5 ml-2 h-10 w-10 border-[#531554] md:hidden border-2 rounded-md">
        <MenuBtn />
      </div>
      <div className="flex justify-center items-center">
        <h3 className="text-[#531554] text-2xl font-bold md:pl-4">
          <span className="font-black ">Welcome!!</span> Please select a channel
          or direct message a user to start if you are using the mobile version
          use the menu button to expand the sidebar menu.
        </h3>
      </div>
    </div>
  );
};
