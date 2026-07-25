import { useState } from "react";
import {  Link, useNavigate } from "react-router-dom";
import UserService from "../services/UserService";
import { toast } from "react-toastify";

export default function Login() {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  let [loading, setLoading] = useState(false)
  const nav = useNavigate();

  async function submit(e){
    try{
      e.preventDefault()
      setLoading(true);
      let payload = {
        email: email,
        password: password
      }
      let res = await UserService.login(payload)
      toast.success("Login Succesfull");
      setLoading(false);

      if(res.userType == "admin"){
        nav("/admin");
      }
      else{
        nav("/");
      }
    }
    catch{
      setLoading(false);
      console.log(error);
      toast.error(error.code);
    }
    finally{
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
                <h1>Login</h1>
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
      <div id="contact" className="contact_area section-padding">
        <div className="container">
          
          <div className="row">
            <div
              className="offset-lg-1 col-lg-10 col-sm-12 col-xs-12 text-center wow fadeInUp"
              
            >
              <div className="contact">
                <form
                  id="contact-form"
                  method="post"
                  encType="multipart/form-data"
                  onSubmit={submit}
                >
                  <div className="row">
                    
                    <div className="form-group col-md">
                      <input
                        type="email"
                        name="email"
                        className="form-control"
                        placeholder="Enter Your Email"
                        required="required"
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value);
                        }}
                      />
                    </div>
                    <div className="form-group col-md-12">
                      <input
                        type="password"
                        name="password"
                        className="form-control"
                        placeholder="Enter Your Password"
                        required="required"
                        value={password}
                        onChange={(e) => {
                          setPassword(e.target.value);
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
                        {
                          loading ? "signing in..." : "Sign In"
                      }
                      </button>

<br /><br /><br />
                      <div className="col col-md-12 text-light"> <Link to="/register"> <em className="text-light"> Don't have an account? Register</em></Link> </div>
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
