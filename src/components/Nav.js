import Image from "next/image";
import logo from "../../public/images/nb-logo.png";

const Nav = () => {
  return (
    <nav
      className="navbar sticky-top navbar-expand-lg bg-body-tertiary"
      data-bs-theme="dark"
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <Image
            src={logo}
            alt="Logo"
            width="60"
            height="45"
            className="d-inline-block align-text-middle"
          />
          PharmaZeal
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNavAltMarkup"
        >
          <div className="navbar-nav">
            <a className="nav-link" href="/login">
              Login
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
