import "./App.css";
import Detail from "./components/Detail";
import Login from "./components/Login";
import getSubdomain from "./helpers/hostname";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  let hostName = getSubdomain();
  return (
    <div className="bg-[#181f2f] w-full h-screen">
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<Login />} />
          <Route path={"/details"} element={<Detail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
