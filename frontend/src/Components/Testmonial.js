import React from "react";
function Testmonial() {
  return (
    <div>
      <section className="testimonial-area testimonial-default-area position-relative">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="section-title stitle-style2">
                <div className="subtitle">TESTIMONIALS</div>
                <h2 className="title">
                  THAT’S{" "}
                  <span>
                    WHAT OUR
                    <br />
                    CLIENT{" "}
                  </span>
                  SAYS
                </h2>
              </div>
              <div
                className="testimonial-content"
                data-aos="fade-up"
                data-aos-duration={1000}
              >
                <div className="testimonial-slider-content">
                  <div className="swiper-container testimonial-slider-container">
                    <div className="swiper-wrapper testimonial-slider">
                      <div className="swiper-slide testimonial-single">
                        <div className="client-content">
                          <p>
                            “Getshape is very smart and technical sound gym,
                            which maintain professional trainer as well as
                            modern equipments. to maintain our health luptas sit
                            fugit, sed quia cuuntur mag dolores eos qui rat ione
                            volupta pleasure rationally”
                          </p>
                          <img
                            className="quote-icon"
                            src="assets/img/icons/quote-icon.jpg"
                            alt="Icon"
                          />
                        </div>
                        <div className="client-info">
                          <h4 className="name">Stephen Fleming</h4>
                          <h6 className="designation">Mariland, USA</h6>
                        </div>
                      </div>
                      <div className="swiper-slide testimonial-single">
                        <div className="client-content">
                          <p>
                            “Getshape is very smart and technical sound gym,
                            which maintain professional trainer as well as
                            modern equipments. to maintain our health luptas sit
                            fugit, sed quia cuuntur mag dolores eos qui rat ione
                            volupta pleasure rationally”
                          </p>
                          <img
                            className="quote-icon"
                            src="assets/img/icons/quote-icon.jpg"
                            alt="Icon"
                          />
                        </div>
                        <div className="client-info">
                          <h4 className="name">Stephen Fleming</h4>
                          <h6 className="designation">Mariland, USA</h6>
                        </div>
                      </div>
                      <div className="swiper-slide testimonial-single">
                        <div className="client-content">
                          <p>
                            “Getshape is very smart and technical sound gym,
                            which maintain professional trainer as well as
                            modern equipments. to maintain our health luptas sit
                            fugit, sed quia cuuntur mag dolores eos qui rat ione
                            volupta pleasure rationally”
                          </p>
                          <img
                            className="quote-icon"
                            src="assets/img/icons/"
                            alt="Icon"
                          />
                        </div>
                        <div className="client-info">
                          <h4 className="name">Stephen Fleming</h4>
                          <h6 className="designation">Mariland, USA</h6>
                        </div>
                      </div>
                    </div>
                    {/* Add Arrows */}
                    <div className="swiper-btn-wrap">
                      <div className="swiper-btn-prev">
                        <i className="fa fa-angle-left" />
                      </div>
                      <div className="swiper-btn-next">
                        <i className="fa fa-angle-right" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 mb-5">
              <div
                className="bmi-calc-form bg-img"
                data-bg-img="assets/img/testimonial/1.jpg"
              >
                <div className="section-title text-center mt-0">
                  <h2 className="title">
                    BMI <span>CALCULATOR</span>
                  </h2>
                  <div className="desc">
                    <p>
                      BMI is a reliable guide to estimate the healthy weight
                      range based on height, wight and age
                    </p>
                  </div>
                </div>
                <form action="#/">
                  <div className="row">
                    <div className="col-md-4">
                      <div className="form-group">
                        <input
                          className="form-control"
                          type="text"
                          placeholder="Height / cm"
                        />
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="form-group">
                        <input
                          className="form-control"
                          type="text"
                          placeholder="Weight / kg"
                        />
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="form-group">
                        <input
                          className="form-control"
                          type="text"
                          placeholder="Age"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <select
                          className="form-control form-select"
                          aria-label="gender select example"
                        >
                          <option selected>Gender</option>
                          <option value={1}>Female</option>
                          <option value={2}>Male</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <select
                          className="form-control form-select"
                          aria-label="activity select example"
                        >
                          <option selected>Select an activity factor</option>
                          <option value={1}>One</option>
                          <option value={2}>Two</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="bmi-calc-form-footer">
                        <div className="form-group mb-0">
                          <button className="btn btn-theme" type="button">
                            CALCULATE
                          </button>
                        </div>
                        <div className="bmi-calc-result">
                          <input
                            className="form-control"
                            type="text"
                            placeholder={0.0}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="shape-group">
          <div className="shape-img2">
            <img src="assets/img/photos/shape1.png" alt="Image" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Testmonial;
