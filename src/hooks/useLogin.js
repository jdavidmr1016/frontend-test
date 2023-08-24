import { useDispatch } from "react-redux";
import { useCallback } from "react";
import { login } from "../slices/authSlice";
import { useNotify as notify } from "./useNotify";

const data = {
  email: "test@dev.io",
  password: "T3ste@ble",
  token:
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c",
};
/* TO DO
 * Hook to handle the fake login with Timeout
 * and check formdata with hardcoded credentials
 * return a notification and dispach the AuthSlice
 *
 */
export const useLogin = (usermail, password) => {
  /* initialize vars and dispatch hook */
  const dispatch = useDispatch;
  let msg = "";
  let type = "error";

  /* Check data */
  if (!usermail || !password) {
    msg = "Please send credentials";
    return notify({ msg, type });
  }
  /* Set timeout */
  setTimeout(() => {
    /* Check data aginst fake if right dispatch Auth if not dispatch notify  */
    if (data.email === usermail && data.password === password) {
      msg =
        "Well done auth credentials match we are redirecting you to the Homepage";
      type = "success";
      notify({ msg, type });
      () => {
        dispatch(login());
      };
    } else {
      msg = "Please check your credentials";
      notify({ msg, type });
    }
  }, 500);
};
