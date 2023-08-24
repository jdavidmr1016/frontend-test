import React from "react";
import NotFound from "../assets/img/undraw_not_found.svg";
export const ErrorPage = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full h-full">
      <img src={NotFound} alt="Not Found" />
      <h3 className="text-[#531554] text-2xl font-bold ">
        <span className="font-black ">Error 404</span> The page that you are
        looking for isn't available
      </h3>
    </div>
  );
};
