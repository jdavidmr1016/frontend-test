import { IMsj } from "./messages/IMsj";
import { UserMsj } from "./messages/OtherMsj";
import moment from "moment";

export const MessajeList = ({ data }) => {
  let time1 = moment().add(-25, "minutes").format("h:mm a");
  let time2 = moment().add(-22, "minutes").format("h:mm a");
  let time3 = moment().add(-15, "minutes").format("h:mm a");
  let time4 = moment().add(-13, "minutes").format("h:mm a");
  let time5 = moment().add(-5, "minutes").format("h:mm a");
  let time6 = moment().format("h:mm a");

  return (
    <div className="flex flex-col h-full w-full">
      <UserMsj data={data} timestamp={time1} />
      <IMsj timestamp={time2} />
      <UserMsj data={data} timestamp={time3} />
      <UserMsj data={data} timestamp={time4} />
      <UserMsj data={data} timestamp={time5} />
      <IMsj timestamp={time6} />
    </div>
  );
};
