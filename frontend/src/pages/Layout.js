import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";
const Layout = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleNavbar = () => {
    setIsCollapsed(!isCollapsed);
  };
  const logout = () => {
    window.localStorage.clear();
    window.location.href = "/";
  };
  const isLoggedIn = window.localStorage.getItem("loggedIn");

  return (
    <div>
      <header className="header-area header-default header-transparent header-style sticky-header">
        <div className="container">
          <div className="row row-gutter-0 align-items-center">
            <div className="col-4 col-xs-3 col-sm-3 col-md-3 col-xl-3">
              <div className="header-logo-area">
                <img
                  className="logo-main"
                  src="assets/img/logo-light.png"
                  alt="Logo"
                />
                <img
                  className="logo-light"
                  src="assets/img/logo-light.png"
                  alt="Logo"
                />
              </div>
            </div>
            <div className="col-8 col-sm-9 col-xl-9">
              <div className="header-align">
                <div className="header-navigation-area d-none d-xl-block">
                  <ul className="main-menu nav position-relative">
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li>
                      <Link to="/AboutUs">About Us</Link>
                    </li>
                    <li>
                      <Link to="/trainers">Trainers</Link>
                    </li>
                    <li>
                      <Link to="/classes">Classes</Link>
                    </li>
                    <li>
                      <Link to="/blog">Blog</Link>
                    </li>

                    {isLoggedIn === "true" ? (
                      <>
                        <li>
                          <Link to="/userdetail">Today Exercise</Link>
                        </li>
                        <li>
                          <button className="btn btn-danger" onClick={logout}>
                            LogOut
                          </button>
                        </li>
                      </>
                    ) : (
                      <li>
                        <Link to="/login">Login</Link>
                      </li>
                    )}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <Outlet />
    </div>
  );
};

export default Layout;
