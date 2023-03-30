import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../../pages/Shared/Footer/Footer";
import Header from "../../pages/Shared/NavBar/Header";

const Main = () => {
  return (
    <div className="min-vh-100 w-100">
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
