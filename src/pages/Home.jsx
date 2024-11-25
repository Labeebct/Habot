import React from "react";
import Header from "../components/shared/Header";
import LandingPage from "../components/home/LandingPage";
import ReadyToDive from "../components/home/ReadyToDive";
import VideoSec from "../components/home/VideoSec";
import Suppliers from "../components/home/Suppliers";
import HowItWorks from "../components/home/HowItWorks";
import Footer from "../components/home/Footer";

const Home = () => {
  return (
    <>
      <Header />
      <LandingPage />
      <ReadyToDive />
      <VideoSec />
      <Suppliers />
      <HowItWorks />
      <Footer />
    </>
  );
};

export default Home;
