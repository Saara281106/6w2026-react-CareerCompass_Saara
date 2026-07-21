import { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import MentorshipSessionService from "../../../services/MentorshipSessionService";

export default function AddMentorshipSession() {
  let [loading, setLoading] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [mentorName, setMentorName] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [duration, setDuration] = useState("");
  const [meetingLink, setMeetingLink] = useState("");
  const [Status, setStatus] = useState("Available");


  const nav = useNavigate();

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

      await MentorshipSessionService.add(payload);

      setLoading(false);
      toast.success("Mentorship Session Added Successfully");
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
                <h1>Add Mentorship Session</h1>
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
                        required="required"
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
                        required="required"
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
                        required="required"
                        value={description}
                        onChange={(e) => {
                          setDescription(e.target.value);
                        }}
                      />
                    </div>

                    <div className="form-group col-md-4">
                        <input
                          type="date"
                          name="date"
                          className="form-control"
                          placeholder="Date for session"
                          required="required"
                          value={date}
                          onChange={(e) => {
                            setDate(e.target.value);
                          }}
                        />
                      </div>

                      <div className="form-group col-md-4">
                        <input
                          type="time"
                          name="time"
                          className="form-control"
                          placeholder="Time for session"
                          required="required"
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
                          placeholder="Duration (in min)"
                          required="required"
                          value={duration}
                          onChange={(e) => {
                            setDuration(e.target.value);
                          }}
                        />
                      </div>

                      <div className="form-group col-md-12">
                        <input
                          type="text"
                          name="link"
                          className="form-control"
                          placeholder="Meeting Link"
                          required="required"
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
                        {loading ? "Adding Session..." : "Submit"}
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
