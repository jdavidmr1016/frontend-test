import { useNotify as notify } from "./useNotify";
import { useFetch } from "./useFetch";
/* Fake data implementation */
const data = {
  email: "test@dev.io",
  password: "T3ste@ble",
  token:
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c",
};

/*
 * Hook to handle the fake login with Timeout
 * and check formdata with hardcoded credentials
 * return a notification and dispach the AuthSlice
 *
 */
export const useLogin = (usermail, password) => {
  /* initialize vars */
  let msg = "";
  let type = "error";

  /* Check data */
  if (!usermail || !password) {
    msg = "Please send credentials";
    return notify({ msg, type });
  }
  /* const data = useFetch(method:"POST", "/api/auth", {usermail, password}) */

  /* Check data aginst fake if right dispatch Auth if not dispatch notify  */
  if (data.email === usermail && data.password === password) {
    msg =
      "Well done auth credentials match we are redirecting you to the Homepage";
    type = "success";
  } else {
    msg = "Please check your credentials";
    notify({ msg, type });
  }
  return [type, data.token];
};
