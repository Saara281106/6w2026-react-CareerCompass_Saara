import { Link, useNavigate } from "react-router-dom";
import AuthService from "../../../services/AuthService";
import { toast } from "react-toastify";

export default function AdminHeader() {

  const nav = useNavigate()

  function logout(e){
    e.preventDefault()
    AuthService.logout()
    toast.success("Logout Successful");
    nav("/")
  }
  return (
    <>
      {/* START NAVBAR */}
      <div className="site-mobile-menu site-navbar-target">
        <div className="site-mobile-menu-header">
          <div className="site-mobile-menu-close mt-3">
            <span className="icon-close2 js-menu-toggle" />
          </div>
        </div>
        <div className="site-mobile-menu-body" />
      </div>
      <header
        className="site-navbar js-sticky-header site-navbar-target"
        role="banner"
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-6 col-xl-2">
              <h1 className="mb-0 site-logo">
                <a href="index.html">
                  <img src="/img/logo.png" alt="" />
                </a>
              </h1>
            </div>
            <div className="col-12 col-md-10 d-none d-xl-block">
              <nav
                className="site-navigation position-relative text-right"
                role="navigation"
              >
                <ul className="site-menu main-menu js-clone-nav mr-auto d-none d-lg-block ">
                  <li className="">
                    <Link to="/admin" className="nav-link text-light">
                      Dashboard
                    </Link>
                  </li>
                  <li className="has-children">
                    <Link
                      
                      className="nav-link text-light"
                    >
                      Career Path
                    </Link>
                    <ul className="dropdown">
                      <li>
                        <Link to="/admin/careerpath/manage" className="nav-link">
                         Manage Career Paths
                        </Link>
                      </li>
                      <li>
                        <Link to="/admin/careerpath/add" className="nav-link">
                         Add Career Paths
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="has-children">
                    <Link
                      
                      className="nav-link text-light"
                    >
                      Mentorship
                    </Link>
                    <ul className="dropdown">
                      <li>
                        <Link to="/admin/mentorshipSession/manage" className="nav-link">
                         Manage Mentorship Session
                        </Link>
                      </li>
                      <li>
                        <Link to="/admin/MentorshipSession/add" className="nav-link">
                         Add Mentorship Session
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="">
                    <button type="button" class="btn btn-sm btn-warning ms-3">
                      <Link to="/admin" className="nav-link text-light" onClick={logout}>
                        Logout
                      </Link>
                    </button>
                  </li>
                </ul>
              </nav>
            </div>
            <div
              className="col-6 d-inline-block d-xl-none ml-md-0 py-3"
              style={{ position: "relative", top: 3 }}
            >
              <a
                href="#"
                className="site-menu-toggle js-menu-toggle float-right"
              >
                <span className="icon-menu h3" />
              </a>
            </div>
          </div>
        </div>
      </header>
      {/* END NAVBAR*/}
    </>
  );
}
