import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MentorshipSessionService from "../../../services/MentorshipSessionService";

export default function ManageMentorshipSession() {
  let [loading, setLoading] = useState(false);

  const [mentorshipSession, setMentorshipSession] = useState([]);
  useEffect(() => {
    getAllMentorshipSession();
  }, []);

  async function getAllMentorshipSession() {
    try {
      setLoading(true);
      let res = await MentorshipSessionService.all();
      console.log(res);
      setMentorshipSession(res);
      setLoading(false);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  async function deleteMentorshipSession(id) {
    try {
      setLoading(true);
      let res = await MentorshipSessionService.delete(id);
      getAllMentorshipSession();
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
                <h1>Manage Mentorship Session</h1>
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
          <Link to="/admin/mentorshipSession/add">
            <button type="button" className="btn btn-warning text-light">
              {" "}
              + Session{" "}
            </button>
          </Link>
        </div>
        <br />
        <table className="table table table-hover">
          <thead>
            <tr className="table">
              <th scope="col">#</th>
              <th scope="col">Title</th>
              <th scope="col">Description</th>
              <th scope="col">Mentor</th>
              <th scope="col">Date</th>
              <th scope="col">Time</th>
              <th scope="col">Duration</th>
              <th scope="col">MeetingLink</th>
              <th scope="col">Status</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {mentorshipSession.map((mentorshipSession, index) => (
              <tr>
                <td scope="row">{index + 1}</td>
                <td scope="row">{mentorshipSession.title}</td>
                <td scope="row">{mentorshipSession.description} </td>
                <td scope="row">{mentorshipSession.mentorName} </td>
                <td scope="row">{mentorshipSession.date}</td>
                <td scope="row">{mentorshipSession.time}</td>
                <td scope="row">{mentorshipSession.duration}</td>
                <td scope="row"><a href="">{mentorshipSession.meetingLink}</a></td>
                <td scope="row">{mentorshipSession.status}Available</td>
              
                <td scope="row">
                  <Link to={`/admin/mentorshipSession/edit/${mentorshipSession.id}`}>
                    <button type="button" className="btn btn-sm btn-info">
                      Update
                    </button>
                  </Link>
                  
                  <button
                    type="button"
                    className="btn btn-sm btn-danger "
                    onClick={() => {
                      deleteMentorshipSession(mentorshipSession.id);
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
