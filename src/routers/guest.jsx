import { Routes, Route } from "react-router-dom";
import { LoginPage } from "../components/auth/loginPage";

/*
 * Will send the user to the login page if the
 * auth object is empty
 */

export const GuestRouter = () => {
  return (
    <Routes>
      <Route path="/auth/login" element={<LoginPage />} />
      <Route path="/*" element={<LoginPage />} />
    </Routes>
  );
};
