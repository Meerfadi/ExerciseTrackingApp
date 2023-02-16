import { useState, useEffect } from "react";

const UserData = () => {
  const [formData, setFormData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      // Make a request to the server to retrieve form data for the current user
      const response = await fetch("http://localhost:2000/userData");
      const data = await response.json();
      setFormData(data);
    }

    fetchData();
  }, []);
  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:2000/${id}`, {
        method: "DELETE",
      });
      if (response.ok) {
        setFormData((prevState) =>
          prevState.filter((formData) => formData._id !== id)
        );
      } else {
        throw new Error("Failed to delete exercise");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <section className="features-area features-default-area">
        <div className="container ">
          <div className="row row-gutter-0">
            {formData.map((exercise) => (
              <div className="col-sm-8 col-lg-5 m-5">
                {/* Start Featured Item */}

                <div className=" featured-item">
                  <div className="featured-thumb p-0 m- 0">
                    <img src="assets/img/class/f1.jpg" alt="Image" />
                  </div>

                  <div className="mb-0 featured-info ">
                    <h4 className="mt-4 mb-0 text-uppercase">
                      Exercise Schedule
                    </h4>

                    <div key={exercise._id}>
                      <h6 className="text-white">
                        Name: <span>{exercise.name}</span>
                      </h6>
                      <h6 className="text-white">
                        Discription: <span>{exercise.description}</span>
                      </h6>
                      <h6 className="text-white">
                        Activity Type: <span>{exercise.activity}</span>
                      </h6>
                      <h6 className="text-white">
                        Duration: <span>{exercise.duration} MINUTES</span>
                      </h6>
                      <h6 className="text-white">
                        Date: <span>{exercise.date}</span>
                      </h6>
                      <div className="row d-flex col-8">
                        <button
                          className="btn btn-danger "
                          onClick={() => handleDelete(exercise._id)}
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* End Featured Item */}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default UserData;
