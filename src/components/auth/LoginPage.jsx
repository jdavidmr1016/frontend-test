import React from "react";
import Logo from "../../assets/Logo.png";

export const LoginPage = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="bg-[#531554] flex items-center justify-center h-screen w-screen">
      <div className="h-3/4 w-2/3 md:w-1/3 md:h-2/3 bg-slate-100 flex flex-col items-center rounded-sm">
        <div className="mt-6 flex items-center justify-center">
          <img src={Logo} alt="Logo" width="150px" height="150px" />
        </div>
        <div className="py-8 w-3/4  flex flex-col items-center gap-4 flex-1">
          <h3 className=" text-lg items-center font-bold text-[#531554] ">
            Please Log in to continue
          </h3>
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              required
              placeholder="Username"
              name="usermail"
              className="px-2 w-full h-12 bg-slate-100 outline-none border-b-2 border-[#531554] focus:border-b-4  transition-all ease-in-out delay-150 "
            />

            <input
              type="password"
              required
              placeholder="Password"
              name="password"
              className="px-2 w-full h-12 bg-slate-100 outline-none border-b-2 border-[#531554] focus:border-b-4 transition-all ease-in-out delay-150"
            />
            <button
              type="submit"
              className="bg-[#682a69] hover:bg-[#531554] w-full text-white text-lg py-2 mt-12 shadow-lg shadow-[#531554] hover:shadow-xl hover:shadow-[#531554]  transition-all ease-in-out delay-150"
            >
              Log In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
