import { BrowserRouter } from "react-router-dom";
import { GuestRouter } from "./routers/guest";
import { Notification } from "./components/Notification";
import { Layout } from "./components/Layout";
import { useSelector } from "react-redux";
function App() {
  const auth = useSelector((state) => state.auth.user);

  return (
    <BrowserRouter>
      <div className="h-screen w-screen">
        {auth === null ? <GuestRouter /> : <Layout />}
        <Notification />
      </div>
    </BrowserRouter>
  );
}

export default App;
