import React from "react";

function BestEquepment() {
  return (
    <div>
      <section className="about-area about-default-area position-relative">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 col-xl-7 order-1 order-lg-0">
              <div
                className="thumb"
                data-aos="fade-left"
                data-aos-duration={1000}
              >
                <img src="assets/img/about/1.png" alt="Image" />
              </div>
            </div>
            <div className="col-lg-5 col-xl-5 order-0 order-lg-1">
              <div className="about-content">
                <div className="section-title stitle-style2">
                  <div className="subtitle">SCIENCE 2005</div>
                  <h2 className="title">
                    BEST{" "}
                    <span>
                      EQUIPMENTS <br />
                      &amp; FITNESS{" "}
                    </span>
                    TRAINERS
                  </h2>
                  <div className="desc">
                    <p>
                      Gym is very important to maintain our health luptas sit
                      fugit, sed quia cuuntur magni dolores eos qui rat ione
                      volupta pleasure rationally encounter consequences that
                      are extremely
                    </p>
                  </div>
                </div>
                <div className="inner-content">
                  <div className="about-list">
                    <ul>
                      <li>Builds Aerobic Power</li>
                      <li>Strong body Structure</li>
                      <li>Boots your Memory</li>
                      <li>Brng about resultful Sleep</li>
                    </ul>
                  </div>
                  <div className="inline-style">
                    <a className="btn btn-theme" href="#">
                      LET’S START
                    </a>
                    <div className="btn-play-box">
                      <a className="btn-play play-video-popup" href="#">
                        <img src="assets/img/icons/play-btn1.png" alt="Image" />
                        INTRO VIDEO
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="shape-group">
          <div className="shape-img1">
            <img src="assets/img/photos/shape1.png" alt="Image" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default BestEquepment;
