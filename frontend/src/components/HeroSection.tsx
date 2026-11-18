
function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <span className="hero-tag">
          ✨ Your Local Service Marketplace
        </span>

        <h1>
          Find Trusted Local Services
          <span> Near You</span>
        </h1>

        <p>
          Connect with skilled and trusted service providers
          in your area. Find the right help for your everyday needs.
        </p>

        <div className="hero-search">
          <input
            type="text"
            placeholder="What service are you looking for?"
          />

          <input
            type="text"
            placeholder="Enter your location"
          />

          <button type="button">
            Search Services →
          </button>
        </div>

        <div className="hero-note">
          ✓ Trusted local providers
          <span>✓ Easy booking</span>
          <span>✓ Quality services</span>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
