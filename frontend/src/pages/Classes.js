import React from "react";
import ServiceArea from "../Components/ServiceArea";
import Testmonial from "../Components/Testmonial";
import Footer from "../Components/Footer";
import ScrollUpButton from "react-scroll-to-top";
function Classes() {
  return (
    <div>
      <main className="main-content">
        {/*== Start Page Title Area ==*/}
        <section
          className="page-title-area bg-dark"
          data-bg-img="assets/img/photos/bg-page2.jpg"
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="page-title-content content-style2">
                  <h2 className="title">
                    <span>OUR </span>CLASSES
                  </h2>
                  <div className="desc">
                    <p className="ml-0">
                      We provide special classes very important to maintain our
                      health luptas sit fugit, <br />
                      for your fitness sed quia cuuntur magni dolores eos qui
                      rat ione volupta
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*== End Page Title Area ==*/}
        {/*== Start Slasses Area ==*/}
        <section className="divider-area classes-divider-area">
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-xl-5">
                <div className="divider-content">
                  <div className="subtitle">OUR CLASSES</div>
                  <h2 className="title">
                    SPECIFIC{" "}
                    <span>
                      CLASSES <br />
                      WHAT{" "}
                    </span>
                    YOU NEEDS
                  </h2>
                  <p>
                    Gym is very important to maintain our health luptas sit
                    fugit, sed quia cuuntur magni dolores eos qui rat ione
                    volupta pleasure rationally encounter consequences that are
                    extremely
                  </p>
                  <p>
                    Gym is very important to maintain our health luptas sit
                    fugit, sed quia cuuntur magni dolores eos qui rat ione
                    volupta
                  </p>
                  <div className="btn-play-box">
                    <a className="btn-play play-video-popup" href="#">
                      <img src="assets/img/icons/play-btn1.png" alt="Image" />
                      VIDEO CLASS
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-6 offset-lg-0 col-xl-6 offset-xl-1">
                <div className="thumb">
                  <span className="shape-border" />
                  <img src="assets/img/photos/d1.png" alt="Image" />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*== End Slasses Area ==*/}
        {/*== Start Service Area ==*/}
      </main>
      <ServiceArea />

      <Testmonial />
      <Footer />
      <ScrollUpButton />
    </div>
  );
}

export default Classes;
