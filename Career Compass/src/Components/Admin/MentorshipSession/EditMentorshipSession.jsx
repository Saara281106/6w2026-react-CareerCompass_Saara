import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";
import MentorshipSessionService from "../../../services/MentorshipSessionService";

export default function EditMentorshipSession() {
  let [loading, setLoading] = useState(false);

  const params = useParams();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [mentorName, setMentorName] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [duration, setDuration] = useState("");
  const [meetingLink, setMeetingLink] = useState("");
  const [Status, setStatus] = useState("Available");
  const nav = useNavigate();

  useEffect(() => {
    getMentorshipSessionDetails();
  }, []);

  async function getMentorshipSessionDetails() {
    try {
      setLoading(true);
      let res = await MentorshipSessionService.single(params.id);
      setTitle(res.title);
      setDescription(res.description);
      setMentorName(res.mentorName);
      setDate(res.date);
      setTime(res.time);
      setDuration(res.duration);
      setMeetingLink(res.meetingLink);
      setStatus(res.status);

    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  async function submit(e) {
    e.preventDefault();
    try {
      setLoading(true);

      let payload = {
        title: title,
        description: description,
        mentorName: mentorName,
        date: date,
        time: time,
        duration: duration,
        meetingLink: meetingLink,
        status: status
      };

      console.log(payload);

      await MentorshipSessionService.update(params.id, payload);

      setLoading(false);
      toast.success("Mentorship Session Updated Successfully");
      nav("/admin/mentorshipSession/manage");
      setTitle("");
      setDescription("");
      setMentorName("");
      setDate("");
      setTime("");
      setDuration("");
      setMeetingLink("");
      setStatus("");
    } catch (error) {
      setLoading(false);
      console.log(error);
      toast.error(error.code);
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
                <h1>Edit Mentorship Session</h1>
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
      {/* CONTACT */}
      <div id="contact" className="contact_area section-padding container">
        <div className="container">
          <div className="row">
            <div className="offset-lg-1 col-lg-10 col-sm-12 col-xs-12 text-center wow fadeInUp">
              <div className="contact">
                <form
                  id="contact-form"
                  method="post"
                  encType="multipart/form-data"
                  onSubmit={submit}
                >
                  <div className="row">
                    <div className="form-group col-md-6">
                      <input
                        type="text"
                        name="title"
                        className="form-control"
                        placeholder="Title"
                        value={title}
                        onChange={(e) => {
                          setTitle(e.target.value);
                        }}
                      />
                    </div>

                    <div className="form-group col-md-6">
                      <input
                        type="text"
                        name="mentor"
                        className="form-control"
                        placeholder="Mentor"
                        value={mentorName}
                        onChange={(e) => {
                          setMentorName(e.target.value);
                        }}
                      />
                    </div>

                    <div className="form-group col-md-12">
                      <textarea
                        rows={6}
                        name="message"
                        className="form-control"
                        placeholder="Description"
                        value={description}
                        onChange={(e) => {
                          setDescription(e.target.value);
                        }}
                      />
                    </div>

                    <div className="form-group col-md-4">
                        <input
                          type="number"
                          name="date"
                          className="form-control"
                          placeholder="Date for session"
                          value={date}
                          onChange={(e) => {
                            setDate(e.target.value);
                          }}
                        />
                      </div>

                      <div className="form-group col-md-4">
                        <input
                          type="number"
                          name="time"
                          className="form-control"
                          placeholder="Time for session"
                          value={time}
                          onChange={(e) => {
                            setTime(e.target.value);
                          }}
                        />
                      </div>

                      <div className="form-group col-md-4">
                        <input
                          type="number"
                          name="duration"
                          className="form-control"
                          placeholder="Duration for session"
                          value={duration}
                          onChange={(e) => {
                            setDuration(e.target.value);
                          }}
                        />
                      </div>

                      <div className="form-group col-md-12">
                        <input
                          type="number"
                          name="link"
                          className="form-control"
                          placeholder="Meeting Link"
                          value={meetingLink}
                          onChange={(e) => {
                            setMeetingLink(e.target.value);
                          }}
                        />
                      </div>

                    <div className="col-md-12 text-center">
                      <button
                        type="submit"
                        value="Send message"
                        name="submit"
                        id="submitButton"
                        className="contact_btn"
                        title="Submit Your Message!"
                      >
                        {loading ? "Updating Session..." : "Submit"}
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            {/* END COL  */}
          </div>
          {/* END ROW */}
        </div>
        {/*- END CONTAINER */}
      </div>
      {/* END CONTACT */}
      <br />
      <br />
      <br />
    </>
  );
}
