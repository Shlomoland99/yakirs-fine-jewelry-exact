export default function Bracelets() {
  return (
    <>
      <div className="video-container">
        <video autoPlay loop muted playsInline>
          <source src="/videos/bracelets.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="fallback">
        <div>
          <h1>BRACELETS</h1>
          <p>Timeless Radiance &middot; Frost Yourself</p>
        </div>
      </div>
      <nav className="nav-overlay">
        <div className="logo">
          YAKIR'S
          <span>FINE JEWELRY</span>
        </div>
        <div>
          <a href="/" target="_blank" rel="noopener noreferrer">Home</a>
          <a href="/rings" target="_blank" rel="noopener noreferrer">Rings</a>
          <a href="/earrings" target="_blank" rel="noopener noreferrer">Earrings</a>
          <a href="/necklaces" target="_blank" rel="noopener noreferrer">Necklaces</a>
        </div>
      </nav>
    </>
  )
}
