import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { GuestRouter } from "./routers/guest";
import { MainRouter } from "./routers/main";

function App() {
  const [auth, setAuth] = useState(undefined);

  return (
    <BrowserRouter>
      <div className="h-screen w-screen">
        {auth === undefined ? <GuestRouter /> : <MainRouter />}
      </div>
    </BrowserRouter>
  );
}

export default App;
