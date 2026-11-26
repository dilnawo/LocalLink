
const features = [
  {
    icon: '🛡️',
    title: 'Verified Professionals',
    description:
      'Find trusted service providers with verified profiles and reliable service history.',
  },
  {
    icon: '📅',
    title: 'Easy Booking',
    description:
      'Book the services you need with a simple and convenient booking process.',
  },
  {
    icon: '⭐',
    title: 'Trusted Reviews',
    description:
      'Explore genuine customer feedback and ratings before choosing a provider.',
  },
  {
    icon: '📍',
    title: 'Local Service Support',
    description:
      'Discover skilled professionals who are available in your local area.',
  },
]

function WhyChooseUs() {
  return (
    <section className="why-section" id="about">
      <div className="why-header">
        <span className="section-tag">WHY CHOOSE LOCALLINK?</span>
        <h2>Making Local Services Simple & Trusted</h2>
        <p>
          We make it easier to find reliable professionals and get
          everyday services with confidence.
        </p>
      </div>

      <div className="features-grid">
        {features.map((feature) => (
          <div className="feature-card" key={feature.title}>
            <div className="feature-icon">{feature.icon}</div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default WhyChooseUs
