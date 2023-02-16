import React, { useState } from "react";
import { Link } from "react-router-dom";

const AddEcercise = () => {
  const [name, setName] = useState("");
  const [description, setDiscription] = useState("");
  const [activity, setActivity] = useState("");
  const [duration, setDuration] = useState("");
  const [date, setDate] = useState("");

  async function submit(e) {
    e.preventDefault();
    console.log(name, description, activity, duration, date);
    fetch("http://localhost:2000/form", {
      method: "post",
      crossDomian: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        name,
        description,
        activity,
        duration,
        date,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userRegister");
        if (data.status === "ok") {
          alert("Exercise Added Sucessfully");
        } else {
          alert("Invalid Inputs");
        }
      });
  }
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
                    <span>Add</span> EXERCISES
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="container col-md-6 my-5">
        <h1 className="text-center">Exercise Form</h1>
        <form onSubmit={submit}>
          <div className="form-group">
            <label htmlFor="name">
              <h4>Name</h4>
            </label>
            <input
              type="text"
              className="form-control"
              name="name"
              onChange={(e) => {
                setName(e.target.value);
              }}
              placeholder="Name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">
              <h4>Description</h4>
            </label>
            <textarea
              className="form-control"
              name="description"
              onChange={(e) => {
                setDiscription(e.target.value);
              }}
              rows={3}
              placeholder="Discription"
              defaultValue={""}
            />
          </div>
          <div className="form-group">
            <label htmlFor="activity">
              <h4>Activity Type</h4>
            </label>
            <select
              className="form-control"
              onChange={(e) => {
                setActivity(e.target.value);
              }}
              name="activity"
            >
              <option>Run</option>
              <option>Bicycle Ride</option>
              <option>Swim</option>
              <option>Walk</option>
              <option>Hike</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="duration">
              <h4>Duration</h4>
            </label>
            <input
              type="text"
              className="form-control"
              name="duration"
              onChange={(e) => {
                setDuration(e.target.value);
              }}
              placeholder="Duration (Min)"
            />
          </div>
          <div className="form-group">
            <label htmlFor="date">
              <h4>Date</h4>
            </label>
            <input
              type="date"
              className="form-control"
              onChange={(e) => {
                setDate(e.target.value);
              }}
              name="date"
            />
          </div>
          <div className="row">
            <button type="submit" className="btn btn-outline-warning">
              Add Exercise
            </button>
            <Link
              to="/userDetails"
              type="submit"
              className="btn btn-outline-dark mt-2"
            >
              Back
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddEcercise;
