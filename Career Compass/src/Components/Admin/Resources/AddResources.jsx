export default function AddResources() {
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
                <h1>Add Resource</h1>
              </div>
            </div>
            {/*- END COL */}
          </div>
          {/*- END ROW */}
        </div>
        {/*- END CONTAINER */}
      </section>
      {/* END SECTION TOP */}

      <br /><br /><br />

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
                >
                  <div className="row">
                    <div className="form-group col-md-12">
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        placeholder="Name"
                        required="required"
                      />
                    </div>
                    {/* <div className="form-group col-md-12">
                      <input
                        type="number"
                        name="programType"
                        className="form-control"
                        placeholder="Price"
                        required="required"
                      />
                    </div> */}

                    <div className="form-group col-md-12">
                      <textarea
                        rows={6}
                        name="message"
                        className="form-control"
                        placeholder="Description"
                        required="required"
                        defaultValue={""}
                      />
                    </div>
                    <div className="form-group col-md-6">
                      <input
                        type="text"
                        name="price"
                        className="form-control"
                        placeholder="Price"
                        required="required"
                      />
                    </div>
                    <div className="form-group col-md-6">
                      <select
                        name=""
                        id=""
                        style={{ height: "70px", width: "500px" }}
                      >
                        <option value="" disabled select>
                          Type
                        </option>
                        <option value="">Paid</option>
                        <option value="">Free</option>
                      </select>
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

      <br />
      <br />
      <br />
    </>
  );
}
