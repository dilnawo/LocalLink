
const categories = [
  {
    icon: '🏠',
    title: 'Home Services',
    description: 'Repairs and maintenance',
  },
  {
    icon: '🧹',
    title: 'Cleaning',
    description: 'Keep your space spotless',
  },
  {
    icon: '💻',
    title: 'Technology',
    description: 'Tech support and repairs',
  },
  {
    icon: '💇',
    title: 'Beauty & Wellness',
    description: 'Personal care services',
  },
  {
    icon: '📚',
    title: 'Education',
    description: 'Tutoring and learning',
  },
  {
    icon: '🎉',
    title: 'Event Services',
    description: 'Make events memorable',
  },
]

function ServiceCategories() {
  return (
    <section className="categories-section" id="categories">
      <div className="categories-heading">
        <span>EXPLORE OUR SERVICES</span>
        <h2>Popular Service Categories</h2>
        <p>
          Discover the right professionals for all your
          everyday needs.
        </p>
      </div>

      <div className="categories-grid">
        {categories.map((category) => (
          <div className="category-card" key={category.title}>
            <div className="category-icon">{category.icon}</div>
            <h3>{category.title}</h3>
            <p>{category.description}</p>
            <span className="category-arrow">↗</span>
          </div>
        ))}
      </div>
    </section>
  )
}

export default ServiceCategories
