import { useState } from "react";
import Registration from "./Registration";

function LoginSignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function submit(e) {
    e.preventDefault();
    console.log(email, password);
    fetch("http://localhost:2000/login", {
      method: "post",
      crossDomian: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userRegister");
        if (data.status === "ok") {
          // alert("login successful");
          window.localStorage.setItem("token", data.data);
          window.localStorage.setItem("loggedIn", true);

          window.location.href = "./userDetails";
        } else {
          alert("Invalid password or email");
        }
      });
  }

  return (
    <div>
      <main className="main-content">
        {/*== Start Page Title Area ==*/}
        <section
          className="page-title-area bg-dark "
          bg-img="assets/img/photos/bg-page2.jpg"
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="page-title-content content-style2">
                  <h2 className="title">
                    <span>MY</span> ACCOUNT
                  </h2>
                  <div className="desc">
                    <p className="ml-0">
                      We have very professional and exprt Instructor and they
                      can very important to maintain <br />
                      our health luptas sit fugit, sed quia cuuntur magni
                      dolores some products
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*== End Page Title Area ==*/}
        {/*== Start Contact Area ==*/}
        <div className="account-login-area">
          <div className="container">
            <div className="row">
              <div className="col-lg-7 m-auto">
                <div className="login-top">
                  <nav className="login-form-nav">
                    <div className="nav nav-tabs" id="nav-tab" role="tablist">
                      <button
                        className="nav-link active"
                        id="nav-home-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#nav-home"
                        type="button"
                        role="tab"
                        aria-controls="nav-home"
                        aria-selected="true"
                      >
                        Login
                      </button>
                      <button
                        className="nav-link nav-register"
                        id="nav-profile-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#nav-profile"
                        type="button"
                        role="tab"
                        aria-controls="nav-profile"
                        aria-selected="false"
                      >
                        Register
                      </button>
                    </div>
                  </nav>
                </div>
                <div className="login-bottom">
                  <div
                    className="login-form-content tab-content"
                    id="nav-tabContent"
                  >
                    <div
                      className="tab-pane fade show active"
                      id="nav-home"
                      role="tabpanel"
                      aria-labelledby="nav-home-tab"
                    >
                      <div className="login-form">
                        <form
                          onSubmit={submit}
                          className="login-form-wrapper"
                          id="login-form"
                        >
                          <div className="row">
                            <div className="col-lg-12">
                              <div className="row">
                                <div className="col-md-12">
                                  <div className="form-group">
                                    <label
                                      htmlFor="inputEmail"
                                      className="form-label"
                                    >
                                      Username or email address *
                                    </label>
                                    <input
                                      type="email"
                                      name="email"
                                      onChange={(e) => {
                                        setEmail(e.target.value);
                                      }}
                                      className="form-control"
                                      id="UserName"
                                      required=""
                                    />
                                  </div>
                                </div>
                                <div className="col-md-12">
                                  <div className="form-group mb-0">
                                    <label
                                      htmlFor="password"
                                      className="form-label mt-15"
                                    >
                                      Password *
                                    </label>
                                    <input
                                      type="password"
                                      name="password"
                                      onChange={(e) => {
                                        setPassword(e.target.value);
                                      }}
                                      className="form-control"
                                      id="password"
                                      required=""
                                    />
                                  </div>
                                </div>
                                <div className="col-md-12">
                                  <div className="form-group mt-15">
                                    <input
                                      type="checkbox"
                                      className="form-check-input"
                                      id="exampleCheck1"
                                    />
                                    <label
                                      className="form-check-label"
                                      htmlFor="exampleCheck1"
                                    >
                                      {" "}
                                      Remember me
                                    </label>
                                  </div>
                                </div>
                                <div className="col-md-12">
                                  <div className="form-group form-group-info">
                                    <button
                                      className="btn btn-theme btn-black"
                                      type="submit"
                                    >
                                      Log in
                                    </button>
                                    <a
                                      className="btn-forgot"
                                      href="shop-account.html"
                                    >
                                      Lost your password?
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </form>
                      </div>
                      {/* Message Notification */}
                      <div className="form-message" />
                    </div>
                    <div
                      className="tab-pane fade"
                      id="nav-profile"
                      role="tabpanel"
                      aria-labelledby="nav-profile-tab"
                    >
                      <Registration />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*== End Contact Area ==*/}
      </main>
    </div>
  );
}

export default LoginSignUp;
