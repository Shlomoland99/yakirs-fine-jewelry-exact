export default function Rings() {
  return (
    <>
      <div className="video-container">
        <video autoPlay loop muted playsInline>
          <source src="/videos/rings.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="fallback">
        <div>
          <h1>RINGS</h1>
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
          <a href="/earrings" target="_blank" rel="noopener noreferrer">Earrings</a>
          <a href="/necklaces" target="_blank" rel="noopener noreferrer">Necklaces</a>
          <a href="/bracelets" target="_blank" rel="noopener noreferrer">Bracelets</a>
        </div>
      </nav>
    </>
  )
}
