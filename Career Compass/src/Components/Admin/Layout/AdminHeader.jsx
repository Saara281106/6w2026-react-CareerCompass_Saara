import { Link } from "react-router-dom";

export default function AdminHeader() {
  return (
    <>
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
                      <Link to="/" className="nav-link text-light" >
                        Home
                      </Link>

                    </li>
                    <li>
                      <Link className="nav-link text-light" to="/about">
                        Dashoboard
                      </Link>
                    </li>
                    {/* <li className="has-children">
                      <Link to="/services" className="nav-link text-light">
                        Services
                      </Link>
                      <ul className="dropdown">
                        <li>
                          <a href="single_service.html" className="nav-link">
                            Email Marketing
                          </a>
                        </li>
                        <li>
                          <a href="single_service.html" className="nav-link">
                            Offline SEO
                          </a>
                        </li>
                        <li>
                          <a href="single_service.html" className="nav-link">
                            Social media marketing
                          </a>
                        </li>
                        <li>
                          <a href="single_service.html" className="nav-link">
                            Lead Generation
                          </a>
                        </li>
                        <li>
                          <a href="single_service.html" className="nav-link">
                            Web Design
                          </a>
                        </li>
                        <li>
                          <a href="single_service.html" className="nav-link">
                            Search Engine optimization
                          </a>
                        </li>
                      </ul>
                    </li> */}
                    <li>
                      <Link className="nav-link text-light" to="/team">
                        CareerPaths
                      </Link>
                    </li>
                    <li>
                      <Link className="text-light" to="/contact">
                        Resources
                      </Link>
                    </li>
                    <li>
                      <Link className="text-light" to="/contact">
                        Bookings
                      </Link>
                    </li>
                    <li>
                      <Link className="text-light" to="/contact">
                        Profile
                      </Link>
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
    </>
  );
}
