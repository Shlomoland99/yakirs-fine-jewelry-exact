export default function Home() {
  return (
    <>
      <div className="video-container">
        <video autoPlay loop muted={false} playsInline controls>
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="fallback">
        <div>
          <h1>YAKIR'S FINE JEWELRY</h1>
          <p>Frost Yourself &middot; Timeless Radiance</p>
        </div>
      </div>
      <nav className="nav-overlay">
        <div className="logo">
          YAKIR'S
          <span>FINE JEWELRY</span>
        </div>
        <div>
          <a href="/rings" target="_blank" rel="noopener noreferrer">Rings</a>
          <a href="/earrings" target="_blank" rel="noopener noreferrer">Earrings</a>
          <a href="/necklaces" target="_blank" rel="noopener noreferrer">Necklaces</a>
          <a href="/bracelets" target="_blank" rel="noopener noreferrer">Bracelets</a>
        </div>
      </nav>
    </>
  )
}
