import { Draft } from "../draft/Editor";
import { useParams } from "react-router-dom";
import { MessajeList } from "../message/MessajeList";
import fakeData from "../../assets/data/minsample.json";

export const MessagePage = () => {
  const { msgId } = useParams();
  const user = fakeData[msgId];

  return (
    <div className="flex flex-col w-full h-full justify-between items-center transition-all ease-in-out delay-150">
      {/* Top section with info about the current chat (Channel-Direct MSg) */}
      <section className="flex flex-col justify-center items-start shadow-sm shadow-[#514d51] w-full h-16 pl-4">
        <div className="flex flex-row items-center gap-2">
          <div className="flex flex-col items-center justify-start">
            <img
              src={user.picture.thumbnail}
              alt="user"
              className="rounded-full"
              width="32px"
              height="32px"
            />
          </div>
          <div className="flex flex-col">
            <h3 className="text-[#531554] font-bold">
              {user.name.first} {user.name.last}
            </h3>
            <small>Online</small>
          </div>
        </div>
      </section>
      {/* Body of the conversation where you can see the mesages */}
      <section className="flex flex-col justify-center items-center flex-1 shadow-sm w-full shadow-[#514d51]   overflow-y-auto  bg-slate-200">
        <MessajeList data={user} />
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
