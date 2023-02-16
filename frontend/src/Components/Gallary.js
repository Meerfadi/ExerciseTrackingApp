import React from "react";

function Gallary() {
  return (
    <div>
      <section className="gallery-area gallery-default-area">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-xl-4 pr-0">
              <div
                className="section-title stitle-style2"
                data-aos="fade-up"
                data-aos-duration={1000}
              >
                <div className="subtitle">FITNESS GALLERY</div>
                <h2 className="title">
                  BELIEVE IN{" "}
                  <span>
                    YOURSELF, <br />
                    BE FIT{" "}
                  </span>
                  &amp; HEALTHIER
                </h2>
              </div>
            </div>
            <div className="col-md-6 col-xl-8 d-none d-md-block text-center text-md-end">
              <a href="#" className="btn-theme">
                VIEW ALL
              </a>
            </div>
          </div>
        </div>
        <div className="container-fluid p-0">
          <div className="row">
            <div className="col-md-12">
              <div className="gallery-slider-content">
                <div className="swiper-container gallery-slider-container">
                  <div className="swiper-wrapper gallery-slider">
                    <div className="swiper-slide">
                      <div className="gallery-item">
                        <div className="thumb">
                          <a
                            className="lightbox-image"
                            data-fancybox="gallery"
                            href="assets/img/gallery/g1.png"
                          >
                            <img src="assets/img/gallery/g1.png" alt="Image" />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="gallery-item">
                        <div className="thumb">
                          <a
                            className="lightbox-image"
                            data-fancybox="gallery"
                            href="assets/img/gallery/g2.png"
                          >
                            <img src="assets/img/gallery/g2.png" alt="Image" />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="gallery-item">
                        <div className="thumb">
                          <a
                            className="lightbox-image"
                            data-fancybox="gallery"
                            href="assets/img/gallery/g3.png"
                          >
                            <img src="assets/img/gallery/g3.png" alt="Image" />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="gallery-item">
                        <div className="thumb">
                          <a
                            className="lightbox-image"
                            data-fancybox="gallery"
                            href="assets/img/gallery/g4.png"
                          >
                            <img src="assets/img/gallery/g4.png" alt="Image" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Gallary;
