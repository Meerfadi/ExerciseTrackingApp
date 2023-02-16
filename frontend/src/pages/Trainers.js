import React from "react";
import Team from "../Components/Team";
import Testmonial from "../Components/Testmonial";
import Footer from "../Components/Footer";
import ScrollUpButton from "react-scroll-to-top";
function Trainers() {
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
                    <span>OUR </span>
                    <h2 className="title">INSTRUCTORS</h2>
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Team />
      <Testmonial />

      <Footer />
      <ScrollUpButton />
    </div>
  );
}

export default Trainers;
