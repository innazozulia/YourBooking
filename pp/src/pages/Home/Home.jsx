import React from "react";
import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import Featured from "../../components/Featured/Featured";
import PropertyList from "../../components/PropertyList/PropertyList";
import FeaturedProperty from "../../components/FeaturedProperty/FeaturedProperty";
import EmailList from "../../components/EmailList/EmailList";
import Footer from "../../components/Footer/Footer";

import "./home.css";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <div className="home-container">
        <Featured />
        <h1 className="home-title">Browse by property type</h1>
        <PropertyList />
        <h1 className="home-title">Homes guests love</h1>
        <FeaturedProperty />
        <EmailList />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
