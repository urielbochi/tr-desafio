import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Main from "./components/main/main";
import NavBar from "./components/Navbar/Navbar";
import SideBar from "./components/Sidebar/Sidebar";
import ContextProvider from "./context/context";
import MainRoutes from "./routes/routes";

function App() {
  const [sideBar, setSideBar] = useState(false);
  const openSideBar = () => {
    setSideBar(true);
  };

  const closeSideBar = () => {
    setSideBar(false);
  };

  return (
    <div className="container">
      <NavBar sideBarOpen={sideBar} openSideBar={openSideBar} />
      <SideBar sideBarOpen={sideBar} closeSideBar={closeSideBar} />
      <div>
        <ContextProvider>
          <MainRoutes />
        </ContextProvider>
      </div>
    </div>
  );
}

export default App;
