import React from "react";
import { Draft } from "../draft/Editor";
import { useParams } from "react-router-dom";
import { MessajeList } from "./ChanlMsg";
import { MenuBtn } from "../layout/menubtn/MenuBtn";

export const ChanelPage = () => {
  const { chlId } = useParams();
  const channelId = chlId.toUpperCase();
  const users = Math.floor(Math.random() * (30 - 5) + 5);

  return (
    <div className="flex flex-col w-full h-full justify-between items-center transition-all ease-in-out delay-150">
      {/* Top section with info about the current chat (Channel-Direct MSg) */}
      <div className="flex justify-between items-center shadow-sm shadow-[#514d51] w-full h-16 px-4">
        <div className="flex flex-col justify-center items-start">
          <h3 className="text-[#531554] font-bold">#{channelId}</h3>
          <small>{users} Users</small>
        </div>
        <MenuBtn />
      </div>
      {/* Body of the conversation where you can see the mesages */}
      <section className="flex flex-col justify-center items-center flex-1 shadow-sm w-full shadow-[#514d51]   overflow-y-auto  bg-slate-200">
        <MessajeList />
      </section>
      {/* Chat input area with rich text editor */}
      <div className="flex  shadow-sm shadow-[#514d51] w-full h-24">
        <div className="flex-1 w-full h-24">
          <span className="bg-[#531554] text-white flex justify-start items-center">
            Message
          </span>
          <Draft />
        </div>
      </div>
    </div>
  );
};
