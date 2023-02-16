import React from "react";
import BestEquepment from "../Components/BestEquepment";
import FeatureArea from "../Components/FeatureArea";
import Team from "../Components/Team";
import Testmonial from "../Components/Testmonial";
import Footer from "../Components/Footer";
import ScrollUpButton from "react-scroll-to-top";

function AboutUs() {
  return (
    <div>
      <div>
        <section
          className="page-title-area bg-dark"
          data-bg-img="assets/img/photos/bg-page2.jpg"
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="page-title-content content-style2">
                  <h2 className="title">
                    <span>ABOUT</span> US
                  </h2>
                  <div className="desc">
                    <p className="ml-0">
                      Gym is very important to maintain our health luptas sit
                      fugit, <br />
                      sed quia cuuntur magni dolores eos qui rat ione volupta
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <BestEquepment />
      <FeatureArea />
      <Team />
      <Testmonial />
      <Footer />
      <ScrollUpButton />
    </div>
  );
}

export default AboutUs;
