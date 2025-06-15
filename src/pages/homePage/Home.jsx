import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router";
import Footer from "./Footer";
import Banner from "./Banner";
import About from "./About";
import HowItWorks from "./HowItWorks";
import CommunitySupport from "./CommunitySupport";

export default function Home() {
  return (
    <div>
      <Banner />
      <About></About>
      <HowItWorks></HowItWorks>
      <CommunitySupport></CommunitySupport>
    </div>
  );
}
