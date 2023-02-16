import { useState } from "react";
import { Link } from "react-router-dom";

function Registration() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function submit(e) {
    e.preventDefault();
    console.log(name, email, password);
    fetch("http://localhost:2000/register", {
      method: "post",
      crossDomian: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userRegister");
        if (data.status === "ok") {
          alert("User Registered");
        } else if (data.error === "User Already Exists") {
          alert("User Already Exists");
        } else {
          alert("Invalid Inputs");
        }
      });
  }

  return (
    <div>
      <div className="login-form">
        <form
          className="login-form-wrapper"
          id="register-form"
          onSubmit={submit}
        >
          <div className="row">
            <div className="col-lg-12">
              <div className="row">
                <div className="col-md-12">
                  <div className="form-group">
                    <label htmlFor="RegUserName" className="form-label">
                      Username *
                    </label>
                    <input
                      name="name"
                      onChange={(e) => {
                        setName(e.target.value);
                      }}
                      type="text"
                      className="form-control"
                      id="RegUserName"
                    />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-group">
                    <label htmlFor="regemail" className="form-label mt-15">
                      Email address *
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="regemail"
                      name="email"
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                    />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-group mb-0">
                    <label htmlFor="regpassword" className="form-label mt-15">
                      Password *
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="regpassword"
                      name="password"
                      onChange={(e) => {
                        setPassword(e.target.value);
                      }}
                    />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-group mb-0">
                    <p>
                      Your personal data will be used to support your experience
                      throughout this website, to manage access to your account,
                      and for other purposes described in our privacy policy.
                    </p>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group mb-0 form-group-info">
                      <button className="btn btn-theme btn-black" type="submit">
                        Register
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Registration;
