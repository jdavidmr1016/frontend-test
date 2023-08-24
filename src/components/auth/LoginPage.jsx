import React from "react";
import Logo from "../../assets/Logo.png";
import { AuthForm } from "./authForm";
export const LoginPage = () => {
  return (
    <div className="bg-[#531554] flex items-center justify-center h-screen w-screen transition-all ease-in-out delay-150">
      <div className="h-3/4 w-2/3 md:w-1/3 md:h-2/3 bg-slate-100 flex flex-col items-center rounded-sm">
        <div className="mt-6 flex items-center justify-center">
          <img src={Logo} alt="Logo" width="150px" height="150px" />
        </div>
        <div className="py-8 w-3/4  flex flex-col items-center gap-4 flex-1">
          <h3 className=" text-lg items-center font-bold text-[#531554] ">
            Please Log in to continue
          </h3>
          <AuthForm />
        </div>
      </div>
    </div>
  );
};
