import { Link } from "react-router-dom";

export default function About() {
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
                <h1>About us</h1>
              </div>
            </div>
            {/*- END COL */}
          </div>
          {/*- END ROW */}
        </div>
        {/*- END CONTAINER */}
      </section>
      {/* END SECTION TOP */}
      {/* ABOUT PAGE */}
      <section className="about_page_area">
        <div className="container">
          <div className="row text-center">
            <div className="offset-lg-1 col-lg-10 col-sm-12 col-xs-12 wow fadeInUp">
              <div className="single_about_content">
                <h2>
                  Confused About Choosing <br /> the Right Career?
                </h2>
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which don't look
                  even slightly believable. If you are going to use a passage of
                  Lorem Ipsum, you need to be sure there isn't anything
                  embarrassing hidden in the middle of text.
                </p>
              </div>
            </div>
            {/* END COL */}
          </div>
          {/* END ROW */}
        </div>
        {/*- END CONTAINER */}
      </section>
      {/* END ABOUT PAGE */}
      {/* FEATURES */}
      <section className="feature_area">
        <div className="container">
          <div className="row feature_bg">
            
            <div className="col-lg-4 col-sm-6 col-xs-12 no-padding wow fadeInUp">
              <div className="single_feature">
                <Link to="/about">
                  <img src="/img/icon/strategy.png" alt="icon" />
                  <h4>Explore Career Paths</h4>
                  <p className="text-dark">
                    Discover different career options, understand their scope,
                    required skills, and step-by-step learning roadmaps.
                  </p>
                </Link>
              </div>
            </div>
            {/* END COL */}
            <div className="col-lg-4 col-sm-6 col-xs-12 no-padding wow fadeInUp">
              <div className="single_feature">
                <Link to="/about">
                  <img src="/img/icon/web.png" alt="icon" />
                  <h4>Connect with Mentors</h4>
                  <p className="text-dark">
                    Learn from experienced alumni and industry professionals
                    through mentorship sessions and career workshops.
                  </p>
                </Link>
              </div>
            </div>
            {/* END COL */}
            <div className="col-lg-4 col-sm-6 col-xs-12 no-padding wow fadeInUp">
              <div className="single_feature">
                <Link to="/about">
                  <img src="/img/icon/design.png" alt="icon" />
                  <h4>Access Learning Resources</h4>
                  <p className="text-dark">
                    Explore recommended documentation, videos, websites, and
                    career resources to start your learning journey.
                  </p>
                </Link>
              </div>
            </div>
            {/* END COL */}
            {/* <div
              className="col-lg-4 col-sm-6 col-xs-12 no-padding wow fadeInUp"
             
            >
              <div className="single_feature">
                <img src="/img/icon/strategy.png" alt="icon" />
                <h4>Business Strategy</h4>
                <p>
                  Sed do eiusmod tempor incididunt ut labore. Lorem ipsum dolor
                  sit amet, consectetur elit.
                </p>
              </div>
            </div> */}
            {/* END COL */}
            {/* <div
              className="col-lg-4 col-sm-6 col-xs-12 no-padding wow fadeInUp"
             
            >
              <div className="single_feature">
                <img src="/img/icon/design.png" alt="icon" />
                <h4>Web Design</h4>
                <p>
                  Sed do eiusmod tempor incididunt ut labore. Lorem ipsum dolor
                  sit amet, consectetur elit.
                </p>
              </div>
            </div> */}
            {/* END COL */}
            {/* <div
              className="col-lg-4 col-sm-6 col-xs-12 no-padding wow fadeInUp"
              
            >
              <div className="single_feature">
                <img src="/img/icon/photo.png" alt="icon" />
                <h4>Photography</h4>
                <p>
                  Sed do eiusmod tempor incididunt ut labore. Lorem ipsum dolor
                  sit amet, consectetur elit.
                </p>
              </div>
            </div> */}
            {/* END COL */}
          </div>
          {/* END ROW */}
        </div>
        {/*- END CONTAINER */}
      </section>
      {/* END FEATURES */}
      {/* START COUNTER */}
      <section
        data-stellar-background-ratio="0.3"
        className="counter_feature section-padding"
      >
        <div className="container">
          <div className="row text-center">
            <div className="col-lg-3 col-sm-6 col-xs-12 no-padding wow fadeInUp">
              <div className="single-project">
                <img src="/img/icon/counter-1.png" alt="icon" />
                <h2 className="counter-num">32652</h2>
                <h4>Happy Customers</h4>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 col-xs-12 no-padding wow fadeInUp">
              <div className="single-project">
                <img src="/img/icon/counter-2.png" alt="icon" />
                <h2 className="counter-num">21821</h2>
                <h4>Project Done</h4>
              </div>
            </div>
            {/* END COL */}
            <div className="col-lg-3 col-sm-6 col-xs-12 no-padding wow fadeInUp">
              <div className="single-project">
                <img src="/img/icon/counter-3.png" alt="icon" />
                <h2 className="counter-num">5660</h2>
                <h4>In Business</h4>
              </div>
            </div>
            {/* END COL */}
            <div className="col-lg-3 col-sm-6 col-xs-12 no-padding wow fadeInUp">
              <div className="single-project single-project-mrnone">
                <img src="/img/icon/counter-4.png" alt="icon" />
                <h2 className="counter-num">11859</h2>
                <h4>Support Cases</h4>
              </div>
            </div>
            {/* END COL */}
          </div>
          {/*- END ROW */}
          <div className="row text-center">
            <div className="col-lg-8 offset-lg-2 col-sm-12 col-xs-12 wow fadeInUp">
              <div
                className="video_btn"
                style={{
                  backgroundImage: "url(/img/bg/video-bg.jpg)",
                  backgroundSize: "cover",
                  backgroundPosition: "center center",
                }}
              >
                <a
                  className="video-play"
                  href="https://www.youtube.com/watch?v=alswD2tCc_Q"
                >
                  <i className="ti-video-clapper" />
                </a>
              </div>
            </div>
          </div>
          {/*- END ROW */}
        </div>
        {/*- END CONTAINER */}
      </section>
      {/* END COUNTER*/}
      {/* START TEAM MEMBERS */}
      <section id="team" className="team_area section-padding">
        <div className="container">
          <div className="section-title text-center">
            <h2>Brilliant Mentors</h2>
            <p>
              Learn from experienced professionals who are passionate about guiding students, sharing industry knowledge, and helping them build successful careers.
            </p>
          </div>
          <div className="row text-center">
            <div className="col-lg-3 col-sm-6 col-xs-12 wow fadeInUp">
              <div className="our-team">
                <div className="single-team">
                  <img src="/img/team/1.jpg" className="img-fluid" alt="" />
                  <h3>Gary Hunt</h3>
                  <p>Marketer</p>
                </div>
                <ul className="social">
                  <li>
                    <a href="#" className="ti-facebook facebook" />
                  </li>
                  <li>
                    <a href="#" className="ti-twitter twitter" />
                  </li>
                  <li>
                    <a href="#" className="ti-google google" />
                  </li>
                </ul>
              </div>
              {/*- END OUR TEAM */}
            </div>
            {/*- END COL */}
            <div className="col-lg-3 col-sm-6 col-xs-12 wow fadeInUp">
              <div className="our-team">
                <div className="single-team">
                  <img src="/img/team/2.jpg" className="img-fluid" alt="" />
                  <h3>Ayoub Fennouni</h3>
                  <p>Manager</p>
                </div>
                <ul className="social">
                  <li>
                    <a href="#" className="ti-facebook facebook" />
                  </li>
                  <li>
                    <a href="#" className="ti-twitter twitter" />
                  </li>
                  <li>
                    <a href="#" className="ti-google google" />
                  </li>
                </ul>
              </div>
              {/*- END OUR TEAM */}
            </div>
            {/*- END COL */}
            <div className="col-lg-3 col-sm-6 col-xs-12 wow fadeInUp">
              <div className="our-team">
                <div className="single-team">
                  <img src="/img/team/3.jpg" className="img-fluid" alt="" />
                  <h3>Mark Linomit</h3>
                  <p>Python Developer</p>
                </div>
                <ul className="social">
                  <li>
                    <a href="#" className="ti-facebook facebook" />
                  </li>
                  <li>
                    <a href="#" className="ti-twitter twitter" />
                  </li>
                  <li>
                    <a href="#" className="ti-google google" />
                  </li>
                </ul>
              </div>
              {/*- END OUR TEAM */}
            </div>
            {/*- END COL */}
            <div className="col-lg-3 col-sm-6 col-xs-12 wow fadeInUp">
              <div className="our-team">
                <div className="single-team">
                  <img src="/img/team/4.jpg" className="img-fluid" alt="" />
                  <h3>Thompson Luis</h3>
                  <p>Developer</p>
                </div>
                <ul className="social">
                  <li>
                    <a href="#" className="ti-facebook facebook" />
                  </li>
                  <li>
                    <a href="#" className="ti-twitter twitter" />
                  </li>
                  <li>
                    <a href="#" className="ti-google google" />
                  </li>
                </ul>
              </div>
              {/*- END OUR TEAM */}
            </div>
            {/*- END COL */}
          </div>
          {/*- END ROW */}
        </div>
        {/*- END CONTAINER */}
      </section>
      {/* END TEAM MEMBERS */}
      {/* HIRE US */}
      <div className="hire_us_area section-padding">
        <div className="container">
          <div className="row">
            <div className="offset-lg-1 col-lg-10 col-sm-12 col-xs-12 wow fadeInUp">
              <div className="row">
                <div className="col-lg-4 col-sm-6 col-xs-12">
                  <div className="hire_img">
                    <img
                      src="/img/icon/search.png"
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                </div>
                {/* END COL  */}
                <div className="col-lg-8 col-sm-6 col-xs-12">
                  <div className="hire_content">
                    <h2>Want to work with us?</h2>
                    <p>
                      Have questions or interested in mentoring? We'd love to hear from you.
                    </p>
                    <Link className="btn_one" to="/contact">
                      Contact us
                    </Link>
                  </div>
                </div>
                {/* END COL  */}
              </div>
              {/* END ROW */}
            </div>
            {/* END COL  */}
          </div>
          {/* END ROW */}
        </div>
        {/*- END CONTAINER */}
      </div>
      {/* END HIRE US */}
      {/* CONTACT */}
      <div id="contact" className="contact_area section-padding">
        <div className="container">
          <div className="section-title text-center">
            <h2 className="section-title-white">Get in touch.</h2>
            <p className="section-title-white">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </p>
          </div>
          <div className="row">
            <div className="offset-lg-1 col-lg-10 col-sm-12 col-xs-12 text-center wow fadeInUp">
              <div className="contact">
                <form
                  className="form"
                  name="enq"
                  method="post"
                  action="contact.php"
                  onsubmit="return validation();"
                >
                  <div className="row">
                    <div className="form-group col-md-6">
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        placeholder="Name"
                        required="required"
                      />
                    </div>
                    <div className="form-group col-md-6">
                      <input
                        type="email"
                        name="email"
                        className="form-control"
                        placeholder="Email"
                        required="required"
                      />
                    </div>
                    <div className="form-group col-md-12">
                      <input
                        type="text"
                        name="subject"
                        className="form-control"
                        placeholder="Subject"
                        required="required"
                      />
                    </div>
                    <div className="form-group col-md-12">
                      <textarea
                        rows={6}
                        name="message"
                        className="form-control"
                        placeholder="Type your message that on your mind..."
                        required="required"
                        defaultValue={""}
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
                        Send Message
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
      
    </>
  );
}
