import { BrowserRouter } from "react-router-dom";
import { GuestRouter } from "./routers/guest";

import { Notification } from "./components/Notification";
import { useSelector } from "react-redux";
import { Layout } from "./components/Layout";

function App() {
  const auth = useSelector((state) => state.auth);

  return (
    <BrowserRouter>
      <div className="h-screen w-screen">
        {auth.user === null ? <GuestRouter /> : <Layout />}
        <Notification />
      </div>
    </BrowserRouter>
  );
}

export default App;
