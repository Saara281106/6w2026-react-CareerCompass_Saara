import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CareerPathService from "../../../services/CareerPathService";

export default function ManageCareerPath() {
  let [loading, setLoading] = useState(false);

  const [careerPath, setCareerPath] = useState([]);
  useEffect(() => {
    getAllCareerPath();
  }, []);

  async function getAllCareerPath() {
    try {
      setLoading(true);
      let res = await CareerPathService.all();
      console.log(res);
      setCareerPath(res);
      setLoading(false);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  async function deleteCareerPath(id) {
    try {
      setLoading(true);
      let res = await CareerPathService.delete(id);
      getAllCareerPath();
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      {/* START SECTION TOP */}
      <section
        className="section-top"
        style={{
          backgroundImage: "url(/img/bg/section-top.png)",
          backgroundSize: "cover",
          backgroundPosition: "center center",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-sm-12 col-xs-12 text-center">
              <div className="section-top-title">
                <h1>Manage Career Paths</h1>
              </div>
            </div>
            {/*- END COL */}
          </div>
          {/*- END ROW */}
        </div>
        {/*- END CONTAINER */}
      </section>
      {/* END SECTION TOP */}

      <br />
      <br />
      <br />
      <div className="container">
        <div className="text-end">
          <Link to="/admin/careerpath/add">
            <button type="button" className="btn btn-warning text-light">
              {" "}
              + Career Path{" "}
            </button>
          </Link>
        </div>
        <br />
        <table className="table table table-hover table-bordered">
          <thead>
            <tr className="table">
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Description</th>
              <th scope="col">Image</th>
              <th scope="col">Type</th>
              <th scope="col">Price</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {careerPath.map((careerPath, index) => (
              <tr>
                <td scope="row">{index + 1}</td>
                <td scope="row">{careerPath.name}</td>
                <td scope="row">{careerPath.description} </td>
                <td scope="row">
                  <img
                    src={careerPath.imageUrl}
                    style={{
                      height: "100px",
                      width: "100px",
                      // borderRadius: "50%",
                    }}
                    alt=""
                  />
                </td>
                <td scope="row">{careerPath.programType}</td>
                <td scope="row">
                  {careerPath.programType === "Paid" ? (
                    <>₹{careerPath.price}</>
                  ) : (
                    "₹0"
                  )}
                </td>
                <td scope="row">
                  <Link to={`/admin/careerpath/edit/${careerPath.id}`}>
                    <button type="button" className="btn btn-sm btn-info">
                      Edit
                    </button>
                  </Link>

                  <button
                    type="button"
                    className="btn btn-sm btn-danger ms-2"
                    onClick={() => {
                      deleteCareerPath(careerPath.id);
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <br />
      <br />
      <br />
    </>
  );
}
