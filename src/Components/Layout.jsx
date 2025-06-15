import React from "react";
import Navbar from "../pages/homePage/Navbar";
import { Outlet } from "react-router";
import Footer from "../pages/homePage/Footer";
import Banner from "../pages/homePage/Banner";

export default function Layout() {
  return (
    <>
      <Navbar />
      <div className="container mx-auto ">
        <Outlet />
      </div>
      <div className="w-full"><Footer /></div>
    </>
  );
}
