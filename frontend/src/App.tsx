
import './App.css'

function App() {
  return (
    <div className="app">
      <nav className="navbar">

        <a href="#" className="brand">
          <span className="brand-icon">L</span>
          Local<span>Link</span>
        </a>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#categories">Categories</a>
          <a href="#providers">Find Providers</a>
          <a href="#about">About Us</a>
        </div>

        <div className="nav-actions">
          <button className="login-btn">Log In</button>
          <button className="signup-btn">Get Started ↗</button>
        </div>

      </nav>
    </div>
  )
}

export default App
