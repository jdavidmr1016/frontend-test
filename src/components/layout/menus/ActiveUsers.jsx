import fakeData from "../../../assets/data/minsample.json";
import { NavLink } from "react-router-dom";
export const ActiveUsers = () => {
  return (
    <>
      <div className="flex  justify-start  pt-2 w-full">
        <h4> Active Users</h4>
      </div>
      <hr className="bg-gray-200 w-full h-0" />
      <div className="flex flex-col w-full">
        {fakeData.map((user, id) => (
          <span
            key={user.email}
            className="flex items-center justify-start gap-1 py-1"
          >
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "pl-2 border-l-4 border-blue-500 transition-all ease-in-out delay-150 w-full"
                  : "hover:bg-slate-500 transition-all ease-in-out delay-150 w-full"
              }
              to={`/msg/${id}`}
            >
              <div className="flex flex-row items-center justify-start gap-1">
                <div className="w-2 h-2 rounded-full bg-green-500" />
                <h5>
                  {user.name.first} {user.name.last}
                </h5>
              </div>
            </NavLink>
          </span>
        ))}
      </div>
    </>
  );
};
