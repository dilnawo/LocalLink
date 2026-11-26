
const providers = [
  {
    name: 'Nimal Silva',
    business: 'Nimal Home Solutions',
    category: 'Home Services',
    location: 'Dehiwala, Colombo',
    rating: '4.9',
    reviews: 128,
    initials: 'NS',
  },
  {
    name: 'Kasun Perera',
    business: 'TechCare Solutions',
    category: 'Technology',
    location: 'Nugegoda, Colombo',
    rating: '4.8',
    reviews: 96,
    initials: 'KP',
  },
  {
    name: 'Amali Fernando',
    business: 'Amali Beauty Studio',
    category: 'Beauty & Wellness',
    location: 'Colombo 05',
    rating: '4.9',
    reviews: 84,
    initials: 'AF',
  },
]

function FeaturedProviders() {
  return (
    <section className="featured-section" id="providers">
      <div className="featured-header">
        <div>
          <span className="section-tag">MEET OUR PROFESSIONALS</span>
          <h2>Featured Service Providers</h2>
          <p>Connect with trusted professionals in your area.</p>
        </div>

        <a href="#providers" className="view-all">
          View All Providers →
        </a>
      </div>

      <div className="providers-grid">
        {providers.map((provider) => (
          <div className="provider-card" key={provider.name}>
            <div className="provider-top">
              <div className="provider-avatar">{provider.initials}</div>
              <span className="verified-badge">✓ Verified</span>
            </div>

            <h3>{provider.name}</h3>
            <p className="provider-business">{provider.business}</p>

            <div className="provider-details">
              <span>{provider.category}</span>
              <span>📍 {provider.location}</span>
            </div>

            <div className="provider-rating">
              <span>⭐ {provider.rating}</span>
              <span>({provider.reviews} reviews)</span>
            </div>

            <button className="profile-btn">View Profile →</button>
          </div>
        ))}
      </div>
    </section>
  )
}

export default FeaturedProviders
