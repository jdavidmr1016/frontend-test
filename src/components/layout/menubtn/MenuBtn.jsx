import { CiMenuBurger } from "react-icons/ci";
import { useDispatch } from "react-redux";
import { sidebarOpen } from "../../../slices/uiSlice";

export const MenuBtn = () => {
  const dispatch = useDispatch();
  /* handles menu triguered */
  const handleMenuAction = () => {
    dispatch(sidebarOpen());
  };

  return (
    <button
      className="md:hidden text-3xl font-black hover:text-[#531554]"
      onClick={handleMenuAction}
    >
      <CiMenuBurger />
    </button>
  );
};
