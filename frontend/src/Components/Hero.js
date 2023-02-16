import React from "react";
import { Link } from "react-router-dom";
import hero_bg from "../App.css";
function Hero() {
  return (
    <div>
      <section className="home-slider-area slider-default">
        <div className="home-slider-content">
          <div className="swiper-container home-slider-container">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                {/* Start Slide Item */}
                <div className="home-slider-item">
                  <div
                    className="bg-thumb bg-img hero_bg"
                    data-bg-img="assets/img/slider/1.jpg"
                  />
                  <div className="slider-content-area">
                    <div className="container">
                      <div className="row align-items-center">
                        <div className="col-sm-8 offset-sm-2 col-lg-5 offset-lg-0">
                          <div className="content">
                            <div className="inner-content">
                              <div className="icon">
                                <img
                                  src="assets/img/icons/g1.png"
                                  alt="Image"
                                />
                              </div>
                              <h2>
                                Time <span>To</span> <span>Get</span> Fit
                              </h2>
                              <p>
                                Gym is very important to maintain our health
                                luptas sit fugit, sed quia cuuntur magni dolores
                                eos qui rat ione volupta
                              </p>

                              <a className="btn-theme" href="#">
                                Contact Us
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-7 col-lg-7">
                          <div className="slider-thumb ">
                            <img src="assets/img/slider/h-1.png" alt="Image" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* End Slide Item */}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*== End Hero Area Wrapper ==*/}
      {/*== Start Features Area Wrapper ==*/}
      <section className="features-area features-default-area">
        <div className="container-fluid p-0">
          <div className="row row-gutter-0">
            <div className="col-sm-6 col-lg-3">
              {/* Start Featured Item */}
              <div className="featured-item">
                <div className="featured-thumb">
                  <img src="assets/img/class/f1.jpg" alt="Image" />
                </div>
                <div className="featured-info">
                  <h4>Dumble back lift</h4>
                  <h5>
                    3 SETS, <span>5 MINUTES</span>
                  </h5>
                </div>
              </div>
              {/* End Featured Item */}
            </div>
            <div className="col-sm-6 col-lg-3">
              {/* Start Featured Item */}
              <div className="featured-item">
                <div className="featured-thumb">
                  <img src="assets/img/class/f2.jpg" alt="Image" />
                </div>
                <div className="featured-info">
                  <h4>Weight lifting</h4>
                  <h5>
                    4 SETS, <span>3 MINUTES</span>
                  </h5>
                </div>
              </div>
              {/* End Featured Item */}
            </div>
            <div className="col-sm-6 col-lg-3">
              {/* Start Featured Item */}
              <div className="featured-item">
                <div className="featured-thumb">
                  <img src="assets/img/class/f3.jpg" alt="Image" />
                </div>
                <div className="featured-info">
                  <h4>
                    Abs
                    <br />
                    fitness
                  </h4>
                  <h5>
                    2 SETS, <span>3 MINUTES</span>
                  </h5>
                </div>
              </div>
              {/* End Featured Item */}
            </div>
            <div className="col-sm-6 col-lg-3">
              {/* Start Featured Item */}
              <div className="featured-item">
                <div className="featured-thumb">
                  <img src="assets/img/class/f4.jpg" alt="Image" />
                </div>
                <div className="featured-info">
                  <h4>Ropes lifting</h4>
                  <h5>
                    5 SETS, <span>3 MINUTES</span>
                  </h5>
                </div>
              </div>
              {/* End Featured Item */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero;
