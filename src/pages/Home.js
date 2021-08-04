import React from "react";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Lessons from "../components/Lessons";
import Plugin from "../components/Plugin";

function Home(props) {
  return (
    <div>
      <Banner />
      <Lessons />
      <Plugin />
      <Footer />
    </div>
  );
}

export default Home;
