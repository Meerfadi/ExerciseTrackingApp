import React from "react";
import BlogPosts from "../Components/BlogPosts";
import Footer from "../Components/Footer";
import ScrollUpButton from "react-scroll-to-top";

function Blog() {
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
                    <span>BLOG</span> POST
                  </h2>
                  <div className="desc">
                    <p className="ml-0">
                      We have very professional and exprt Instructor and they
                      can very important <br />
                      to maintain our health luptas sit fugit, sed quia cuuntur
                      magni dolores
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <BlogPosts />
      <Footer />
      <ScrollUpButton />
    </div>
  );
}

export default Blog;
