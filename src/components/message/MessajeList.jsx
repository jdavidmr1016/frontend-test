import { IMsj } from "./messages/IMsj";
import { UserMsj } from "./messages/OtherMsj";

export const MessajeList = () => {
  return (
    <div className="flex flex-col h-full w-full">
      <UserMsj />
      <IMsj />
      <UserMsj />
      <UserMsj />
      <UserMsj />
      <IMsj />
      <IMsj />
    </div>
  );
};
