import { useEffect, useState } from "react";
import UserService from "../../../services/UserService";
import AuthService from "../../../services/AuthService";
import CloudinaryService from "../../../services/CloudinaryService";
import { toast } from "react-toastify";

export default function Profile() {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(false);

  const [modalOpen, setModalOpen] = useState(false);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [image, setImage] = useState("");

  const [saving, setSaving] = useState(false);

  useEffect(() => {
    getProfile();
  }, []);

  async function getProfile() {
    try {
      setLoading(true);

      const id = AuthService.getId();

      const res = await UserService.single(id);

      if (res) {
        setProfile(res);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  function openEditModal() {
    setName(profile.name);
    setPhone(profile.phone);
    setAddress(profile.address);

    setImage("");

    setModalOpen(true);
  }

  async function handleUpdateSubmit(e) {
    e.preventDefault();

    try {
      setSaving(true);

      let imageUrl = profile.profileImage;

      if (image) {
        imageUrl = await CloudinaryService.upload(image);
      }

      const payload = {
        name,
        phone,
        address,
        profileImage: imageUrl,
      };

      const id = AuthService.getId();

      await UserService.update(id, payload);

      toast.success("Profile Updated Successfully!");

      setModalOpen(false);

      getProfile();
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    } finally {
      setSaving(false);
    }
  }

  return (
    <>
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
            <div className="col-lg-12 text-center">
              <div className="section-top-title">
                <h1>My Profile</h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="card shadow border-0 rounded-4">
                <div className="card-body p-5 text-center">
                  {loading ? (
                    <h4>Loading...</h4>
                  ) : (
                    profile && (
                      <>
                        {/* Profile Image */}
                        {profile.profileImage ? (
                          <img
                            src={profile.profileImage}
                            alt="Profile"
                            style={{
                              width: "140px",
                              height: "140px",
                              borderRadius: "50%",
                              objectFit: "cover",
                              border: "5px solid #f5f5f5",
                            }}
                          />
                        ) : (
                          <img
                            src="/img/testimonial/team-1.jpg"
                            alt="Profile"
                            style={{
                              width: "140px",
                              height: "140px",
                              borderRadius: "50%",
                              objectFit: "cover",
                              border: "5px solid #f5f5f5",
                            }}
                          />
                        )}

                        {/* Name */}
                        <h2 className="mt-4">{profile.name}</h2>

                        {/* User Type */}
                        <span className="badge bg-warning text-dark px-3 py-2">
                          {profile.userType}
                        </span>

                        {/* Details */}
                        <div className="mt-5">
                          <div className="row mb-4">
                            <div className="col-md-4">
                              <strong>Email</strong>
                            </div>
                            <div className="col-md-8">{profile.email}</div>
                          </div>

                          <div className="row mb-4">
                            <div className="col-md-4">
                              <strong>Phone</strong>
                            </div>
                            <div className="col-md-8">
                              {profile.phone || "Not Available"}
                            </div>
                          </div>

                          <div className="row mb-4">
                            <div className="col-md-4">
                              <strong>Address</strong>
                            </div>
                            <div className="col-md-8">
                              {profile.address || "Not Available"}
                            </div>
                          </div>
                        </div>

                        {/* Button */}
                        <button
                          className="btn btn-warning mt-4"
                          onClick={openEditModal}
                        >
                          Edit Profile
                        </button>
                      </>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {modalOpen && (
        <div
          className="modal show d-block"
          style={{ background: "rgba(0,0,0,.5)" }}
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content border-0 rounded-4">
              <div className="modal-header">
                <h4>Edit Profile</h4>

                <button
                  className="btn-close"
                  onClick={() => setModalOpen(false)}
                ></button>
              </div>

              <form onSubmit={handleUpdateSubmit}>
                <div className="modal-body">
                  <div className="mb-3">
                    <label>Name</label>

                    <input
                      type="text"
                      className="form-control"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label>Phone</label>

                    <input
                      type="text"
                      className="form-control"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label>Address</label>

                    <textarea
                      rows="3"
                      className="form-control"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label>Profile Image</label>

                    <input
                      type="file"
                      className="form-control"
                      onChange={(e) => setImage(e.target.files[0])}
                    />
                  </div>
                </div>

                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={() => setModalOpen(false)}
                  >
                    Cancel
                  </button>

                  <button
                    type="submit"
                    className="btn btn-warning"
                    disabled={saving}
                  >
                    {saving ? "Saving..." : "Save Changes"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
