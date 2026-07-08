export default function AdminDashboard() {
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
                <h1>Dashboard</h1>
              </div>
            </div>
            {/*- END COL */}
          </div>
          {/*- END ROW */}
        </div>
        {/*- END CONTAINER */}
      </section>
      {/* END SECTION TOP */}
      {/* START ADDRESS */}
      <section className="address_area section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-sm-4 col-xs-12 text-center">
              <div className="single_address">
                <h4>New York</h4>
                <p className="mr_20">
                  133rd Ave Jamaica, <br /> New York(NY)
                </p>
                <p>
                  <a href="tel:415 256 365">+415 256 365</a>
                </p>
                <p>
                  <a href="mailto:">admin@monoline.com</a>
                </p>
              </div>
            </div>
            {/*- END COL */}
            <div className="col-lg-4 col-sm-4 col-xs-12 text-center">
              <div className="single_address">
                <h4>Los Angeles</h4>
                <p className="mr_20">
                  E 49th St Los Angeles, <br /> California(CA), 90011
                </p>
                <p>
                  <a href="tel:415 256 365">+415 256 365</a>
                </p>
                <p>
                  <a href="mailto:">support@monoline.com</a>
                </p>
              </div>
            </div>
            {/*- END COL */}
            <div className="col-lg-4 col-sm-4 col-xs-12 text-center">
              <div className="single_address">
                <h4>San Francisco</h4>
                <p className="mr_20">
                  61 Rudden Ave San <br />
                  Francisco, California
                </p>
                <p>
                  <a href="tel:415 256 365">+415 256 365</a>
                </p>
                <p>
                  <a href="mailto:">info@monoline.com</a>
                </p>
              </div>
            </div>
            {/*- END COL */}
          </div>
          {/*- END ROW */}
        </div>
        {/*- END CONTAINER */}
      </section>
      {/* END ADDRESS */}
      {/* START MAP */}
      <div className="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.957183635167!2d-74.00402768559431!3d40.71895904512855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2598a1316e7a7%3A0x47bb20eb6074b3f0!2sNew%20Work%20City%20-%20(CLOSED)!5e0!3m2!1sbn!2sbd!4v1600305497356!5m2!1sbn!2sbd"
          style={{ border: 0 }}
          allowFullScreen=""
          aria-hidden="false"
          tabIndex={0}
        />
      </div>
      {/* START MAP */}
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
            <div
              className="offset-lg-1 col-lg-10 col-sm-12 col-xs-12 text-center wow fadeInUp"
              
            >
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

      <br /><br /><br />
    </>
  );
}
