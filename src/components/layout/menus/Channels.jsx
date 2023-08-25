import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { AiOutlinePlus } from "react-icons/ai";
import { BsTrash } from "react-icons/bs";
//import {deleteChanel} from "../../../slices/channelsSlice"
/* import {
  handleAddChanel,
} from "../../../helpers/chanelUtils"; */

export const Channels = () => {
  const channels = useSelector((state) => state.channels);
  const dispatch = useDispatch();

  const handleAdd = () => {
    /*TODO - Feature to implement  Renders a modal with form to add a channel */
  };

  const handleDel = (e) => {
    /* const res = handleAddChanel(e)
    if(res.ok){
     dispatch(deleteChanel())
    } */
  };

  return (
    <>
      <div className="w-full flex flex-row items-center justify-between">
        <h4 className="w-full"> Channels</h4>
        <button className="pr-2 hover:text-yellow-500" onClick={handleAdd}>
          <AiOutlinePlus />
        </button>
      </div>
      <hr className="bg-gray-200 w-full h-0" />
      <div className="flex flex-col gap-1 w-full ">
        {channels.map((chnl, id) => (
          <span key={id} className="flex  justify-between w-full">
            <NavLink
              key={id}
              className={({ isActive }) =>
                isActive
                  ? "pl-2 border-l-4 border-blue-500 transition-all ease-in-out delay-150 w-full"
                  : "hover:bg-slate-500 transition-all ease-in-out delay-150 w-full"
              }
              to={`/chl/${chnl.toLowerCase()}`}
            >
              #{chnl}
            </NavLink>
            <button className="pr-2 hover:text-red-600" onClick={handleDel}>
              <BsTrash />
            </button>
          </span>
        ))}
      </div>
    </>
  );
};
