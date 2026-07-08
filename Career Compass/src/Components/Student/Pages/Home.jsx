import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      {/* START HOME */}
      <section
        id="home"
        className="home_bg"
        style={{
          backgroundImage: "url(/img/bg/home-bg.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center center",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-sm-12 col-xs-12 text-center">
              <div className="hero-text">
                <h2>Your Journey to the Right Career Starts Here</h2>
                <p>
                  Explore career paths, discover industry insights, and learn
                  from experienced mentors.
                </p>
                <Link to="/about">Learn More</Link>
              </div>
            </div>
            {/*- END COL */}
          </div>
          {/*- END ROW */}
        </div>
        {/*- END CONTAINER */}
      </section>
      {/* END  HOME */}
      {/* FEATURES */}
      <section className="feature_area">
        <div className="container">
          <div className="row feature_bg">
            <div className="section-title text-center">
              <h2>What we do</h2>
              <p>
                Career Compass helps students make informed career decisions by
                providing structured career paths, connecting them with
                experienced mentors, and offering valuable resources to guide
                their learning journey.
              </p>
            </div>
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
      <section className="counter_feature section-padding">
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
      {/* START WHY CHOOSE US */}
      <section className="why_choose_area section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-sm-12 col-xs-12 wow fadeInUp">
              <div className="single_why_choose">
                <h2>
                  Guiding You <br /> Towards the <br /> Right Career
                </h2>
                <p>
                  Choosing the right career can be overwhelming. Career Compass
                  bridges the gap between students and experienced mentors by
                  providing career guidance, structured learning roadmaps, and
                  mentorship opportunities to help students make confident
                  career decisions.
                </p>
                <a className="btn_one" href="about.html">
                  Get Started
                </a>
              </div>
            </div>
            {/*- END COL */}
            <div className="col-lg-6 col-sm-12 col-xs-12 wow fadeInUp">
              <div className="single_why_choose_img">
                <img
                  src="/img/home-office.png"
                  className="img-fluid"
                  alt="about-image"
                />
              </div>
            </div>
            {/*- END COL */}
          </div>
          {/*- END ROW */}
        </div>
        {/*- END CONTAINER */}
      </section>
      {/* END WHY CHOOSE US*/}
      {/* START PORTFOLIO */}

      {/* END PORTFOLIO */}
      {/* SKILLS */}
      <section
        className="skills_area section-padding"
        style={{
          backgroundImage: "url(/img/bg/skill-bg.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-sm-8 col-xs-12 wow fadeInUp">
              <div className="skill_bg">
                <div className="skill_content">
                  <h2>Why Choose Career Compass?</h2>
                  <p>
                    We simplify career decision-making by bringing career
                    guidance, expert mentorship, and structured roadmaps
                    together on one platform. Whether you're exploring your
                    first career or planning your next step, we're here to guide
                    you.
                  </p>
                </div>
                <div className="skill_bar">
                  <div className="progress-bar-linear">
                    <p className="progress-bar-text">
                      Career Guidance
                      <span>100%</span>
                    </p>
                    <div className="progress-bar">
                      <span data-percent={85} />
                    </div>
                  </div>
                  <div className="progress-bar-linear">
                    <p className="progress-bar-text">
                      Expert Mentorshipranding
                      <span>95%</span>
                    </p>
                    <div className="progress-bar">
                      <span data-percent={70} />
                    </div>
                  </div>
                  <div className="progress-bar-linear">
                    <p className="progress-bar-text">
                      Learning Resources
                      <span>90%</span>
                    </p>
                    <div className="progress-bar">
                      <span />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* END COL */}
          </div>
          {/* END ROW */}
        </div>
        {/*- END CONTAINER */}
      </section>
      {/* END SKILLS */}
      {/* PROMOTIONAL AREA */}
      <div className="promotional_area section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-sm-12 col-xs-12">
              <div className="promotional_content section-title text-centre">
                <h2>Meet Our Mentors</h2>
                <img
                  src="/img/team-image.jpg"
                  className="img-fluid"
                  alt="team-image"
                />
                <p>
                  Learn from experienced alumni and industry professionals who
                  are passionate about guiding students toward successful
                  careers. Explore their expertise and book mentorship sessions
                  to gain valuable insights.
                </p>
              </div>
            </div>
            {/* END COL */}
          </div>
          {/* END ROW */}
        </div>
        {/*- END CONTAINER */}
      </div>
      {/* END PROMOTIONAL AREA */}
      {/* TESTIMONIALS */}
      <div className="testimonial_area section-padding">
        <div className="container">
          <div className="section-title text-center">
            <h2>Student Success Stories</h2>
            <p>
              Hear from students who found the right career direction through
              Career Compass.
            </p>
          </div>
          <div className="row">
            <div className="col-lg-10 offset-lg-1 col-sm-12 col-xs-12">
              <div className="row">
                <div className="col-lg-6 col-sm-12 col-xs-12 wow fadeInUp">
                  <div className="single_testimonial">
                    <div className="testimonial_img">
                      <img
                        src="/img/testimonial/1.jpg"
                        alt="testimonial-image"
                      />
                    </div>
                    <p>
                      Sed do eiusmod tempor incididunt ut labore. Lorem ipsum
                      dolor sit amet, consectetur adipisicing elit, sed do
                      eiusmod tempor ut labore.
                    </p>
                    <h4>Alex Chohan</h4>
                    <h5>Director, Accurate themes</h5>
                  </div>
                </div>
                {/* END COL  */}
                <div className="col-lg-6 col-sm-12 col-xs-12 wow fadeInUp">
                  <div className="single_testimonial">
                    <div className="testimonial_img">
                      <img
                        src="/img/testimonial/2.jpg"
                        alt="testimonial-image"
                      />
                    </div>
                    <p>
                      Sed do eiusmod tempor incididunt ut labore. Lorem ipsum
                      dolor sit amet, consectetur adipisicing elit, sed do
                      eiusmod tempor ut labore.
                    </p>
                    <h4>Johnson Brown</h4>
                    <h5>Marketing Head, Spyro themes</h5>
                  </div>
                </div>
                {/* END COL  */}
                <div className="col-lg-6 col-sm-12 col-xs-12 wow fadeInUp">
                  <div className="single_testimonial">
                    <div className="testimonial_img">
                      <img
                        src="/img/testimonial/3.jpg"
                        alt="testimonial-image"
                      />
                    </div>
                    <p>
                      Sed do eiusmod tempor incididunt ut labore. Lorem ipsum
                      dolor sit amet, consectetur adipisicing elit, sed do
                      eiusmod tempor ut labore.
                    </p>
                    <h4>Devid Miller</h4>
                    <h5>Founder, theme ocean</h5>
                  </div>
                </div>
                {/* END COL  */}
                <div className="col-lg-6 col-sm-12 col-xs-12 wow fadeInUp">
                  <div className="single_testimonial">
                    <div className="testimonial_img">
                      <img
                        src="/img/testimonial/4.jpg"
                        alt="testimonial-image"
                      />
                    </div>
                    <p>
                      Sed do eiusmod tempor incididunt ut labore. Lorem ipsum
                      dolor sit amet, consectetur adipisicing elit, sed do
                      eiusmod tempor ut labore.
                    </p>
                    <h4>Maya Khan</h4>
                    <h5>Chairman, Web template</h5>
                  </div>
                </div>
                {/* END COL  */}
              </div>
            </div>
          </div>
          {/* END ROW */}
        </div>
        {/*- END CONTAINER */}
      </div>
      {/* END TESTIMONIALS */}
      {/* BLOG */}
      <section className="blog_area section-padding">
        <div className="container">
          <div className="section-title text-center">
            <h2>Trending Career Paths</h2>
            <p>
              Explore some of the most in-demand career paths and discover the skills needed to succeed.
            </p>
          </div>
          <div className="row text-center">
            <div className="col-lg-4 col-sm-4 col-xs-12 wow fadeInUp">
              <div className="home_single_blog">
                <img
                  src="/img/blog/1.jpg"
                  className="img-fluid"
                  alt="blog-image"
                />
                <div className="home_blog_content">
                  <div className="blog_title_info">
                    <h2>
                      <a href="blog_single.html">
                        Data Science
                      </a>
                    </h2>
                    <span>August 31, 2026</span>
                    <span>
                      <a href="blog_single.html">Free Workshop</a>
                    </span>
                  </div>
                  <p>
                    Discover how data-driven careers are shaping modern industries.
                  </p>
                  <a className="home_b_btn" href="blog_single.html">
                    Read More
                  </a>
                </div>
              </div>
            </div>
            {/* END COL */}
            <div className="col-lg-4 col-sm-4 col-xs-12 wow fadeInUp">
              <div className="home_single_blog">
                <img
                  src="/img/blog/2.jpg"
                  className="img-fluid"
                  alt="blog-image"
                />
                <div className="home_blog_content">
                  <div className="blog_title_info">
                    <h2>
                      <a href="blog_single.html">
                        Web Development
                      </a>
                    </h2>
                    <span>Sep 01, 2026</span>
                    <span>
                      <a href="blog_single.html">Meeting</a>
                    </span>
                  </div>
                  <p>
                    Learn about career opportunities, roadmap, and required skills.
                  </p>
                  <a className="home_b_btn" href="blog_single.html">
                    Read More
                  </a>
                </div>
              </div>
            </div>
            {/* END COL */}
            <div className="col-lg-4 col-sm-4 col-xs-12 wow fadeInUp">
              <div className="home_single_blog">
                <img
                  src="/img/blog/3.jpg"
                  className="img-fluid"
                  alt="blog-image"
                />
                <div className="home_blog_content">
                  <div className="blog_title_info">
                    <h2>
                      <a href="blog_single.html">
                        Artificial Intelligence
                      </a>
                    </h2>
                    <span>Sep 02, 2026</span>
                    <span>
                      <a href="blog_single.html">Workshop</a>
                    </span>
                  </div>
                  <p>
                    Explore the future of AI, machine learning, and emerging technologies.
                  </p>
                  <a className="home_b_btn" href="blog_single.html">
                    Read More
                  </a>
                </div>
              </div>
            </div>
            {/* END COL */}
          </div>
          {/* END ROW */}
        </div>
        {/*- END CONTAINER */}
      </section>
      {/* END BLOG */}
      {/* CONTACT */}
      <div id="contact" className="contact_area section-padding">
        <div className="container">
          <div className="section-title text-center">
            <h2 className="section-title-white">
              Say Hello, Let’s Start Something new
            </h2>
            <p className="section-title-white">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </p>
          </div>
          <div className="row">
            <div className="offset-lg-1 col-lg-10 col-sm-12 col-xs-12 text-center wow fadeInUp">
              <div className="contact">
                <form
                  id="contact-form"
                  method="post"
                  encType="multipart/form-data"
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
      {/* START PARTNER LOGO */}
      <div className="partner-logo section-padding">
        <div className="container">
          
          {/*- END ROW */}
        </div>
        {/*- END CONTAINER */}
      </div>
      {/* END PARTNER LOGO */}
    </>
  );
}
