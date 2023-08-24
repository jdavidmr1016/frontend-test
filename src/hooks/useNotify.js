import { toast } from "react-toastify";

export const useNotify = ({ msg, type }) => {
  if (type === "info") {
    return toast.info(msg);
  } else if (type === "success") {
    return toast.success(msg);
  } else if (type === "warning") {
    return toast.warning(msg);
  } else if (type === "error") {
    return toast.error(msg);
  }
};
