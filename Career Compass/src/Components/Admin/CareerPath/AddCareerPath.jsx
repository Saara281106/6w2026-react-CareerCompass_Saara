import { useState } from "react";
import CareerPathService from "../../../services/CareerPathService";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import CloudinaryService from "../../../services/CloudinaryService";

export default function AddCareerPath() {
  let [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [programType, setProgramType] = useState("Free");

  const nav = useNavigate();

  async function submit(e) {
    e.preventDefault();
    try {
      setLoading(true);

      if (image) {
        var imageUrl = await CloudinaryService.upload(image);
      }

      let payload = {
        name: name,
        description: description,
        programType: programType,
        imageUrl: imageUrl,
      };
      if (programType === "Paid") {
        payload.price = price;
      }

      console.log(payload);

      await CareerPathService.add(payload);

      setLoading(false);
      toast.success("Career Path Added");
      nav("/admin/careerpath/manage");
      setName("");
      setDescription("");
      setProgramType("");
      setPrice("");
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
                <h1>Add Career Path</h1>
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
                    <div className="form-group col-md-12">
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        placeholder="Name"
                        required="required"
                        value={name}
                        onChange={(e) => {
                          setName(e.target.value);
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
                      <select
                        name=""
                        id=""
                        value={programType}
                        onChange={(e) => {
                          setProgramType(e.target.value);
                        }}
                        style={{ height: "70px", width: "350px" }}
                      >
                        <option value="Free">Free</option>
                        <option value="Paid">Paid</option>
                      </select>
                    </div>

                    {programType === "Paid" ? (
                      <div className="form-group col-md-4">
                        <input
                          type="number"
                          name="price"
                          className="form-control"
                          placeholder="Price (in ₹)"
                          required="required"
                          value={price}
                          onChange={(e) => {
                            setPrice(e.target.value);
                          }}
                        />
                      </div>
                    ) : null}

                    <div className="form-group col-md-4">
                      <input
                        type="file"
                        onChange={(e) => {
                          setImage(e.target.files[0]);
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
                        {loading ? "Adding Path..." : "Submit"}
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
