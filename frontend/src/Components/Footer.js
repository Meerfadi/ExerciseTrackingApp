import React from "react";

function Footer() {
  return (
    <div>
      <footer
        className="footer-area default-style bg-dark"
        data-bg-img="assets/img/photos/bg-f1.png"
      >
        <div className="footer-main">
          <div className="container">
            <div className="row">
              <div className="col-sm-6 col-md-4 col-lg-3">
                <div className="widget-item mb-sm-30">
                  <div className="about-widget">
                    <a className="footer-logo" href="#">
                      <img src="assets/img/logo-light.png" alt="Logo" />
                    </a>
                    <p>
                      Zymzoo winner dolor sit consectetur adipiscing elit, sed
                      do eiusmod tempor incididunt ut labore et dolore magna
                    </p>
                    <div className="opening-time">
                      <h4 className="title">Opening time</h4>
                      <ul>
                        <li>Monday - Friday: 7 am to 10 pm</li>
                        <li>Saturday - Sunday: 9 am to 10 pm</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-3">
                <div className="widget-item pl-20 pl-sm-0 mb-sm-30 mb-xs-40">
                  <h4>USEFULL LINK</h4>
                  <nav className="widget-menu-wrap">
                    <ul className="nav-menu nav">
                      <li>
                        <a href="#">About us</a>
                      </li>
                      <li>
                        <a href="#">Membership</a>
                      </li>
                      <li>
                        <a href="#">Our Classes</a>
                      </li>
                      <li>
                        <a href="#">Instructors</a>
                      </li>
                      <li>
                        <a href="#">Shop</a>
                      </li>
                      <li>
                        <a href="#">Blog post</a>
                      </li>
                    </ul>
                    <ul className="nav-menu nav">
                      <li>
                        <a href="#/">Schedules</a>
                      </li>
                      <li>
                        <a href="#/">Payment</a>
                      </li>
                      <li>
                        <a href="#/">Faqs</a>
                      </li>
                      <li>
                        <a href="#">Contact</a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-3">
                <div className="widget-item mb-xs-50">
                  <h4>CONTACT INFO</h4>
                  <div className="widget-contact-info">
                    <div className="contact-info-item">
                      <div className="icon-box">
                        <img src="assets/img/icons/1.png" alt="Logo" />
                      </div>
                      <div className="content">
                        <h4 className="title">Address</h4>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          libero
                        </p>
                      </div>
                    </div>
                    <div className="contact-info-item">
                      <div className="icon-box">
                        <img src="assets/img/icons/2.png" alt="Logo" />
                      </div>
                      <div className="content">
                        <h4 className="title">Phone</h4>
                        <ul>
                          <li>
                            <a href="#">+92 (301) 859 1990</a>
                          </li>
                          <li>
                            <a href="#">+92 (301) 859 1990</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="contact-info-item">
                      <div className="icon-box">
                        <img src="assets/img/icons/3.png" alt="Logo" />
                      </div>
                      <div className="content">
                        <h4 className="title">Web</h4>
                        <ul>
                          <li>
                            <a href="#">info@example.com</a>
                          </li>
                          <li>
                            <a href="#">www.example.com</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-6 col-lg-3">
                <div className="widget-item">
                  <h4>NEWSLETTER</h4>
                  <div className="widget-newsletter">
                    <p>
                      Subscribe our Newsletter and gates latest updates of
                      offers, productsa and promotions from every week we
                      provide
                    </p>
                    <form className="newsletter-form input-btn-group">
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Email here"
                      />
                      <button className="btn btn-theme" type="button">
                        <i className="fa fa-paper-plane-o" />
                      </button>
                    </form>
                  </div>
                  <div className="widget-social-icons">
                    <a
                      target="_blank"
                      href="https://www.facebook.com/profile.php?id=100006909043591"
                    >
                      <i className="fa fa-facebook" />
                    </a>
                    <a
                      target="_blank"
                      href="https://www.instagram.com/meer._.fadii_/"
                    >
                      <i className="fa fa-instagram" />
                    </a>
                    <a target="_blank" href="https://twitter.com/MeerFadi2">
                      <i className="fa fa-twitter" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <div className="footer-bottom-content">
              <div className="row align-items-center">
                <div className="col-12">
                  <div className="widget-copyright text-center">
                    <p>
                      <i className="fa fa-copyright" /> 2023 FRAG GAMES PROJECT
                      <i className="fa fa-heart" /> BY &nbsp;
                      <a
                        target="_blank"
                        href="https://www.linkedin.com/in/fahad-ahmad590/"
                      >
                        FAHAD AHMAD
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
