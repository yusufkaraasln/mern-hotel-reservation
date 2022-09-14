import React from "react";
import Featured from "../../components/featured/Featured";
import FeaturesProps from "../../components/featuresProps/FeaturesProps";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import MailList from "../../components/mailList/MailList";
import Navbar from "../../components/navbar/Navbar";
import PropertyList from "../../components/propertyList/PropertyList";
import "./home.scss";
function Home() {
  return (
    <div>
      <Navbar />
      <Header />
      <div className="homecontainer">
        <Featured />
        <h1 className="hometitle">Tesis tipine göre göz atın</h1>
        <PropertyList/>
        <h1 className="hometitle">Misafirlerin sevdiği evler</h1>
        <FeaturesProps/>
        <MailList/>
        <Footer/>
      </div>
    </div>
  );
}

export default Home;
