import React from "react";

function BlogPost() {
  return (
    <div>
      <section className="blog-area blog-default-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title text-center">
                <h2 className="title">
                  LATEST <span>BLOG POST</span>
                </h2>
                <div className="desc">
                  <p>
                    Gym classes dolor sit amet, consectetur adipiscing elit, sed
                    do eiod tempor <br />
                    didunt ut labore et dolore m et dolore magna aliqua minim
                    niam
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row" data-aos="fade-up" data-aos-duration={1000}>
            <div className="col-md-6 col-lg-4">
              {/*== Start Blog Post Item ==*/}
              <div className="post-item mb-md-30">
                <div className="thumb">
                  <a href="#">
                    <img src="assets/img/blog/1.jpg" alt="Image" />
                  </a>
                </div>
                <div className="content">
                  <div className="meta">
                    <a className="category" href="#">
                      <i className="fa fa-tags icon" />
                      <span> FITNESS</span>
                    </a>
                    <a className="post-date" href="#">
                      <i className="fa fa-calendar icon" />
                      <span> 05 MAY, 2023</span>
                    </a>
                  </div>
                  <h4 className="title">
                    <a href="#">
                      Perfect workout is the way to shape your body and mind
                    </a>
                  </h4>
                  <p>
                    Gym is very important to maintain our health quia cuuntur
                    magni dolores eos pleasure of mind and make you more
                    healthier
                  </p>
                </div>
              </div>
              {/*== End Blog Post Item ==*/}
            </div>
            <div className="col-md-6 col-lg-4">
              {/*== Start Blog Post Item ==*/}
              <div className="post-item mb-md-30">
                <div className="thumb">
                  <a href="#">
                    <img src="assets/img/blog/2.jpg" alt="Image" />
                  </a>
                </div>
                <div className="content">
                  <div className="meta">
                    <a className="category" href="#">
                      <i className="fa fa-tags icon" />
                      <span> YOGA</span>
                    </a>
                    <a className="post-date" href="#">
                      <i className="fa fa-calendar icon" />
                      <span> 04 MAY, 2023</span>
                    </a>
                  </div>
                  <h4 className="title">
                    <a href="#">
                      Yoga is important for both body and mind refreshment
                    </a>
                  </h4>
                  <p>
                    Gym is very important to maintain our health quia cuuntur
                    magni dolores eos pleasure of mind and make you more
                    healthier
                  </p>
                </div>
              </div>
              {/*== End Blog Post Item ==*/}
            </div>
            <div className="col-md-6 col-lg-4">
              {/*== Start Blog Post Item ==*/}
              <div className="post-item">
                <div className="thumb">
                  <a href="#">
                    <img src="assets/img/blog/3.jpg" alt="Image" />
                  </a>
                </div>
                <div className="content">
                  <div className="meta">
                    <a className="category" href="#">
                      <i className="fa fa-tags icon" />
                      <span> BODYBUILD</span>
                    </a>
                    <a className="post-date" href="#">
                      <i className="fa fa-calendar icon" />
                      <span> 02 MAY, 2023</span>
                    </a>
                  </div>
                  <h4 className="title">
                    <a href="#">
                      Give more time in workout for a great shape that you want
                    </a>
                  </h4>
                  <p>
                    Gym is very important to maintain our health quia cuuntur
                    magni dolores eos pleasure of mind and make you more
                    healthier
                  </p>
                </div>
              </div>
              {/*== End Blog Post Item ==*/}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default BlogPost;
