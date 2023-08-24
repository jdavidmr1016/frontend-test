import { Routes, Route } from "react-router-dom";
import { HomePage } from "../components/home/HomePage";
import { ChanelPage } from "../components/chanel/ChanelPage";
import { MessagePage } from "../components/message/MessagePage";
import { ErrorPage } from "../components/ErrorPage";
/*
 * Will render al routes for logued Users
 */
export const MainRouter = () => {
  return (
    <Routes>
      <Route exact path="/" element={<HomePage />} />
      <Route exact path="chl/:chlId" element={<ChanelPage />} />
      <Route exact path="msg/:msgId" element={<MessagePage />} />
      <Route path="/*" element={<ErrorPage />} />
    </Routes>
  );
};
