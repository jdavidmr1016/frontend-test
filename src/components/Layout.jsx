import React from "react";
import { MainRouter } from "../routers/main";
import { Sidebar } from "./layout/Sidebar";

export const Layout = () => {
  return (
    <div className="h-screen w-screen flex transition-all ease-in-out delay-150">
      <Sidebar />
      {/* Start Main */}
      <section className="w-9/12 transition-all ease-in-out delay-150">
        <MainRouter />
      </section>
      {/* End Main */}
    </div>
  );
};
