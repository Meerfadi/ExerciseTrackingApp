import React from "react";
import Hero from "../Components/Hero";
import BestEquepment from "../Components/BestEquepment";
import FeatureArea from "../Components/FeatureArea";
import ServiceArea from "../Components/ServiceArea";
import Gallary from "../Components/Gallary";
import Team from "../Components/Team";
import Testmonial from "../Components/Testmonial";
import BlogPost from "../Components/BlogPost";
import Footer from "../Components/Footer";
import ScrollUpButton from "react-scroll-to-top";

function Home() {
  return (
    <div>
      <Hero />
      <BestEquepment />
      <FeatureArea />
      <ServiceArea />
      <Gallary />
      <Team />
      <Testmonial />
      <BlogPost />
      <Footer />
      <ScrollUpButton />
    </div>
  );
}

export default Home;
