import React from "react";
import { Draft } from "../draft/Editor";
import { useParams } from "react-router-dom";

export const ChanelPage = () => {
  const { chlId } = useParams();
  const channelId = chlId.toUpperCase();
  const users = Math.floor(Math.random() * (30 - 5) + 5);

  return (
    <div className="flex flex-col w-full h-full justify-between items-center transition-all ease-in-out delay-150">
      {/* Top section with info about the current chat (Channel-Direct MSg) */}
      <section className="flex flex-col justify-center items-start shadow-sm shadow-[#514d51] w-full h-16 pl-4">
        <h3 className="text-[#531554] font-bold">#{channelId}</h3>
        <small>{users} Users</small>
      </section>
      {/* Body of the conversation where you can see the mesages */}
      <section className="flex flex-col justify-center items-center flex-1 shadow-sm w-full shadow-[#514d51] overflow-y-auto ">
        Main
      </section>
      {/* Chat input area with rich text editor */}
      <div className="flex  shadow-sm shadow-[#514d51] w-full h-24">
        <div className="flex-1 relative overflow-y-auto">
          <Draft />
        </div>
      </div>
    </div>
  );
};
