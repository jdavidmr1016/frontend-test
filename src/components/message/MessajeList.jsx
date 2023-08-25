import { IMsj } from "./messages/IMsj";
import { UserMsj } from "./messages/OtherMsj";

export const MessajeList = ({ data }) => {
  return (
    <div className="flex flex-col h-full w-full">
      <UserMsj data={data} />
      <IMsj />
      <UserMsj data={data} />
      <UserMsj data={data} />
      <UserMsj data={data} />
      <IMsj />
      <IMsj />
      <UserMsj data={data} />
      <UserMsj data={data} />
      <IMsj />
      <UserMsj data={data} />
      <UserMsj data={data} />
      <UserMsj data={data} />
      <IMsj />
      <IMsj />
    </div>
  );
};
