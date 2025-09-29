import { Link } from "react-router-dom"


const Header = () => (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm w-100">
      <div className="container">
        {/* Logo */}
        <a className="navbar-brand fw-bold fs-3 text-primary" href="/">
          My<span className="text-warning">Admin</span>
        </a>

        {/* Toggle button (mobile) */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menu links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <a className="nav-link active" href="/">Home</a>
            </li>
          </ul>

          {/* Auth buttons */}
          <div className="d-flex">
            <a className="btn btn-outline-light me-2" href="/login">
              Login
            </a>
            <a className="btn btn-primary" href="/register">
              Register
            </a>
          </div>
        </div>
      </div>
    </nav>
);

export default Header;