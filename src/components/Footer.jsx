export default function Footer() {
  return (
    <footer className="bg-dark text-light pt-5 pb-3 mt-5 w-100">
      <div className="container">
        <div className="row gy-4">
          {/* Logo & Intro */}
          <div className="col-md-4">
            <h3 className="fw-bold text-primary">
              My<span className="text-warning">Admin</span>
            </h3>
            <p className="text-secondary">
              Giải pháp quản trị và blog hiện đại. Chúng tôi mang lại công cụ dễ dùng và hiệu quả.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-md-2">
            <h5 className="fw-semibold mb-3">Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="/" className="footer-link">Home</a></li>
              <li><a href="/about" className="footer-link">About</a></li>
              <li><a href="/services" className="footer-link">Services</a></li>
              <li><a href="/contact" className="footer-link">Contact</a></li>
            </ul>
          </div>

          {/* Support */}
          <div className="col-md-2">
            <h5 className="fw-semibold mb-3">Support</h5>
            <ul className="list-unstyled">
              <li><a href="/faq" className="footer-link">FAQ</a></li>
              <li><a href="/privacy" className="footer-link">Privacy Policy</a></li>
              <li><a href="/terms" className="footer-link">Terms & Conditions</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-md-4">
            <h5 className="fw-semibold mb-3">Contact</h5>
            <p className="mb-1"><i className="bi bi-geo-alt-fill me-2"></i>123 Main Street, Ha Noi</p>
            <p className="mb-1"><i className="bi bi-telephone-fill me-2"></i>+84 123 456 789</p>
            <p><i className="bi bi-envelope-fill me-2"></i>support@myadmin.com</p>

            <div className="d-flex gap-3 mt-3">
              <a href="#" className="social-icon"><i className="bi bi-facebook"></i></a>
              <a href="#" className="social-icon"><i className="bi bi-twitter"></i></a>
              <a href="#" className="social-icon"><i className="bi bi-instagram"></i></a>
              <a href="#" className="social-icon"><i className="bi bi-github"></i></a>
            </div>
          </div>
        </div>

        <hr className="border-secondary my-4" />

        <div className="text-center text-secondary">
          © {new Date().getFullYear()} MyAdmin. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
