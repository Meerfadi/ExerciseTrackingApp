import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import UserData from "./UserData";

const UserDetails = () => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:2000/userData", {
      method: "post",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        token: window.localStorage.getItem("token"),
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setUserData(data.data.name);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

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
                                Welcome{" "}
                                <span>
                                  {userData ? ` ${userData}` : "Loading..."}
                                </span>{" "}
                              </h2>
                              <p>
                                Lorem ipsum dolor sit, amet consectetur
                                adipisicing elit. Iste facilis atque molestiae
                                eaque ducimus dolores, tempora, hic quae
                                voluptatibus ipsam quaerat quasi molestias,
                                voluptas suscipit. Sapiente natus amet
                                consequatur magnam.
                              </p>
                              <Link to="/add" className=" btn-theme">
                                Add Exercise Log
                              </Link>
                              <Link to="/" className=" btn-theme ">
                                Back To Home
                              </Link>
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

      <center className="py-5">
        <h2>
          Previous <span> Records: </span>
        </h2>
      </center>

      <UserData />
      {/*== End Hero Area Wrapper ==*/}
      {/*== Start Features Area Wrapper ==*/}
    </div>
  );
};

export default UserDetails;
