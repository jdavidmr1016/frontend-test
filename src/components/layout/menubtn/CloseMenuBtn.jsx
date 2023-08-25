import { useDispatch } from "react-redux";
import { AiOutlineClose } from "react-icons/ai";
import { sidebarClose } from "../../../slices/uiSlice";

export const CloseMenuBtn = () => {
  const dispatch = useDispatch();
  /* handles menu triguered */
  const handleMenuAction = () => {
    dispatch(sidebarClose());
  };
  return (
    <button
      className="md:hidden text-3xl w-full font-black text-fuchsia-100 hover:text-yellow-300"
      onClick={handleMenuAction}
    >
      <AiOutlineClose />
    </button>
  );
};
