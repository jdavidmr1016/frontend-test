import { IMsj } from "../message/messages/IMsj";
import { UserMsj } from "../message/messages/OtherMsj";
import fakeData from "../../assets/data/users.json";
export const MessajeList = () => {
  return (
    <div className="flex flex-col h-full w-full">
      <UserMsj data={fakeData[9]} />
      <IMsj />
      <UserMsj data={fakeData[3]} />
      <UserMsj data={fakeData[5]} />
      <UserMsj data={fakeData[6]} />
      <IMsj />
      <IMsj />
      <UserMsj data={fakeData[3]} />
      <UserMsj data={fakeData[8]} />
      <IMsj />
      <UserMsj data={fakeData[4]} />
      <UserMsj data={fakeData[2]} />
      <UserMsj data={fakeData[1]} />
      <IMsj />
      <IMsj />
    </div>
  );
};
