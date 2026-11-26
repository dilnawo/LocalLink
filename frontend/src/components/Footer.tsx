
function Footer() {
  return (
    <footer className="footer" id="about">
      <div className="footer-container">

        <div className="footer-brand">
          <a href="#" className="brand">
            <span className="brand-icon">L</span>
            Local<span>Link</span>
          </a>

          <p>
            Connecting you with trusted local professionals.
            Find the right service, at the right time.
          </p>
        </div>

        <div className="footer-column">
          <h3>Quick Links</h3>
          <a href="#home">Home</a>
          <a href="#categories">Categories</a>
          <a href="#providers">Find Providers</a>
          <a href="#about">About Us</a>
        </div>

        <div className="footer-column">
          <h3>Our Services</h3>
          <a href="#categories">Home Services</a>
          <a href="#categories">Cleaning</a>
          <a href="#categories">Technology</a>
          <a href="#categories">Beauty & Wellness</a>
        </div>

        <div className="footer-column">
          <h3>Contact Us</h3>
          <p>Colombo, Sri Lanka</p>
          <p>hello@locallink.lk</p>
          <p>+94 77 123 4567</p>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2026 LocalLink. All rights reserved.</p>
        <p>Made with care in Sri Lanka 🇱🇰</p>
      </div>
    </footer>
  )
}

export default Footer
