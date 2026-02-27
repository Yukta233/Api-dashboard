import React from "react";
import { Link } from "react-router-dom";

const css = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,700&family=Jost:wght@300;400;500;600&display=swap');

  *, *::before, *::after { box-sizing: border-box; }

  body {
    background: #080d1a;
    min-height: 100vh;
    margin: 0;
  }

  /* ── Animated mesh gradient background ── */
  .home-bg {
    position: fixed;
    inset: 0;
    z-index: 0;
    background:
      radial-gradient(ellipse 80% 60% at 10% 10%,  rgba(30, 80, 180, 0.45) 0%, transparent 60%),
      radial-gradient(ellipse 60% 50% at 90% 20%,  rgba(100, 30, 200, 0.35) 0%, transparent 55%),
      radial-gradient(ellipse 70% 60% at 80% 85%,  rgba(20, 160, 140, 0.3)  0%, transparent 60%),
      radial-gradient(ellipse 50% 50% at 20% 80%,  rgba(200, 60, 120, 0.25) 0%, transparent 55%),
      radial-gradient(ellipse 40% 40% at 50% 50%,  rgba(60, 120, 220, 0.15) 0%, transparent 60%);
    background-color: #080d1a;
  }

  /* ── Floating blurred orbs ── */
  .home-orb {
    position: fixed;
    border-radius: 50%;
    filter: blur(72px);
    pointer-events: none;
    z-index: 0;
  }
  .home-orb-1 {
    width: 440px; height: 440px;
    background: radial-gradient(circle, rgba(99,102,241,0.3) 0%, transparent 70%);
    top: -130px; left: -110px;
    animation: orbDrift 10s ease-in-out infinite alternate;
  }
  .home-orb-2 {
    width: 360px; height: 360px;
    background: radial-gradient(circle, rgba(20,184,166,0.24) 0%, transparent 70%);
    bottom: -90px; right: -70px;
    animation: orbDrift 13s ease-in-out infinite alternate-reverse;
  }
  .home-orb-3 {
    width: 280px; height: 280px;
    background: radial-gradient(circle, rgba(236,72,153,0.2) 0%, transparent 70%);
    top: 40%; left: 65%;
    animation: orbDrift 9s ease-in-out infinite alternate;
    animation-delay: -4s;
  }

  @keyframes orbDrift {
    from { transform: translate(0, 0) scale(1); }
    to   { transform: translate(20px, 28px) scale(1.07); }
  }

  /* ── Subtle grid texture ── */
  .home-grid-overlay {
    position: fixed;
    inset: 0;
    z-index: 0;
    background-image:
      linear-gradient(rgba(255,255,255,0.022) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255,255,255,0.022) 1px, transparent 1px);
    background-size: 56px 56px;
    pointer-events: none;
    mask-image: radial-gradient(ellipse 85% 85% at 50% 50%, black 40%, transparent 100%);
  }

  /* ── Colored corner brackets ── */
  .home-corner {
    position: fixed;
    width: 48px; height: 48px;
    pointer-events: none;
    z-index: 2;
  }
  .home-corner-tl { top: 20px; left: 20px;   border-top: 1.5px solid rgba(99,102,241,0.6);  border-left: 1.5px solid rgba(99,102,241,0.6); }
  .home-corner-tr { top: 20px; right: 20px;  border-top: 1.5px solid rgba(20,184,166,0.6);  border-right: 1.5px solid rgba(20,184,166,0.6); }
  .home-corner-bl { bottom: 20px; left: 20px; border-bottom: 1.5px solid rgba(236,72,153,0.6); border-left: 1.5px solid rgba(236,72,153,0.6); }
  .home-corner-br { bottom: 20px; right: 20px; border-bottom: 1.5px solid rgba(245,158,11,0.6); border-right: 1.5px solid rgba(245,158,11,0.6); }

  /* ── Main layout ── */
  .home-root-wrap {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    z-index: 1;
    font-family: 'Jost', sans-serif;
    padding: 48px 24px;
  }

  .home-center {
    text-align: center;
    width: 100%;
    max-width: 680px;
    animation: hFadeUp 0.7s ease both;
  }

  @keyframes hFadeUp {
    from { opacity: 0; transform: translateY(22px); }
    to   { opacity: 1; transform: translateY(0); }
  }

  /* ── Pill badge ── */
  .home-badge {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background: rgba(99,102,241,0.12);
    border: 1px solid rgba(99,102,241,0.3);
    border-radius: 100px;
    padding: 6px 18px;
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: #a5b4fc;
    margin-bottom: 28px;
    animation: hFadeUp 0.5s 0.05s ease both;
  }

  .home-badge-dot {
    width: 6px; height: 6px;
    border-radius: 50%;
    background: #818cf8;
    animation: badgePulse 1.8s ease-in-out infinite;
  }

  @keyframes badgePulse {
    0%, 100% { opacity: 1; box-shadow: 0 0 0 0 rgba(129,140,248,0.6); }
    50%       { opacity: 0.6; box-shadow: 0 0 0 5px rgba(129,140,248,0); }
  }

  /* ── Gradient heading ── */
  .home-title-enhanced {
    font-family: 'Playfair Display', serif !important;
    font-size: clamp(38px, 8vw, 80px) !important;
    font-weight: 900 !important;
    line-height: 1.04 !important;
    margin: 0 !important;
    letter-spacing: -0.01em !important;
    animation: hFadeUp 0.6s 0.15s ease both;
    background: linear-gradient(135deg, #fff 20%, #c7d2fe 55%, #5eead4 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  /* ── Fancy divider ── */
  .home-divider {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    margin: 26px auto 24px;
    animation: hFadeUp 0.5s 0.25s ease both;
  }
  .home-div-line {
    width: 64px; height: 1px;
    background: linear-gradient(90deg, transparent, rgba(165,180,252,0.4));
  }
  .home-div-line.r {
    background: linear-gradient(90deg, rgba(165,180,252,0.4), transparent);
  }
  .home-div-dot {
    width: 5px; height: 5px;
    border-radius: 50%;
    background: rgba(165,180,252,0.5);
  }
  .home-div-dot.lg {
    width: 7px; height: 7px;
    background: rgba(165,180,252,0.7);
  }

  /* ── Description ── */
  .home-desc-enhanced {
    font-family: 'Jost', sans-serif !important;
    font-size: 15.5px !important;
    font-weight: 300 !important;
    color: rgba(255,255,255,0.45) !important;
    line-height: 1.85 !important;
    letter-spacing: 0.01em !important;
    max-width: 460px !important;
    margin: 0 auto 48px !important;
    animation: hFadeUp 0.6s 0.3s ease both;
  }

  /* ── Nav grid ── */
  .home-nav-enhanced {
    display: grid !important;
    grid-template-columns: 1fr 1fr !important;
    gap: 12px !important;
    max-width: 520px !important;
    margin: 0 auto !important;
    flex-wrap: unset !important;
    margin-bottom: 0 !important;
  }

  .home-nav-enhanced a {
    font-family: 'Jost', sans-serif !important;
    text-decoration: none !important;
    color: #fff !important;
    background: rgba(255,255,255,0.04) !important;
    border: 1px solid rgba(255,255,255,0.1) !important;
    padding: 20px 16px !important;
    border-radius: 16px !important;
    font-size: 12px !important;
    font-weight: 500 !important;
    letter-spacing: 0.12em !important;
    text-transform: uppercase !important;
    position: relative !important;
    overflow: hidden !important;
    transition: transform 0.22s ease, border-color 0.22s ease, background 0.22s ease, box-shadow 0.22s ease !important;
    display: flex !important;
    flex-direction: column !important;
    align-items: center !important;
    justify-content: center !important;
    gap: 10px !important;
    backdrop-filter: blur(10px) !important;
  }

  /* Card emoji icons via data attrs — injected via CSS content on ::before */
  .home-nav-enhanced a:nth-child(1) { animation: hFadeUp 0.5s 0.38s ease both; --ac: rgba(96,165,250,0.25); --bc: rgba(96,165,250,0.5); }
  .home-nav-enhanced a:nth-child(2) { animation: hFadeUp 0.5s 0.45s ease both; --ac: rgba(251,191,36,0.2);  --bc: rgba(251,191,36,0.5); }
  .home-nav-enhanced a:nth-child(3) { animation: hFadeUp 0.5s 0.52s ease both; --ac: rgba(52,211,153,0.2);  --bc: rgba(52,211,153,0.5); }
  .home-nav-enhanced a:nth-child(4) { animation: hFadeUp 0.5s 0.59s ease both; --ac: rgba(236,72,153,0.2);  --bc: rgba(236,72,153,0.5); }

  .home-nav-enhanced a:nth-child(1) .nav-icon::before { content: '🌤'; }
  .home-nav-enhanced a:nth-child(2) .nav-icon::before { content: '📰'; }
  .home-nav-enhanced a:nth-child(3) .nav-icon::before { content: '🛍'; }
  .home-nav-enhanced a:nth-child(4) .nav-icon::before { content: '🍹'; }

  .nav-icon {
    font-size: 26px;
    line-height: 1;
    position: relative;
    z-index: 1;
  }

  .home-nav-enhanced a::before {
    content: '';
    position: absolute;
    inset: 0;
    background: var(--ac, rgba(255,255,255,0.06));
    opacity: 0;
    transition: opacity 0.22s ease;
    border-radius: inherit;
    z-index: 0;
  }

  .home-nav-enhanced a:hover {
    transform: translateY(-4px) scale(1.01) !important;
    border-color: var(--bc, rgba(255,255,255,0.25)) !important;
    box-shadow: 0 12px 36px rgba(0,0,0,0.35) !important;
  }

  .home-nav-enhanced a:hover::before { opacity: 1; }

  .home-nav-enhanced a span {
    position: relative !important;
    z-index: 1 !important;
  }

  /* ── Footer tagline ── */
  .home-tagline {
    margin-top: 44px;
    font-size: 10px;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: rgba(255,255,255,0.18);
    animation: hFadeUp 0.5s 0.7s ease both;
  }

  @media (max-width: 480px) {
    .home-nav-enhanced { grid-template-columns: 1fr 1fr !important; gap: 10px !important; }
  }
`;

function Home() {
  const containerStyle = { padding: "40px", textAlign: "center" };
  const navStyle = { display: "flex", justifyContent: "center", gap: "20px", marginBottom: "50px" };
  const linkStyle = { textDecoration: "none", color: "white", background: "#4CAF50", padding: "10px 20px", borderRadius: "5px" };
  const titleStyle = { fontSize: "32px", marginBottom: "20px" };
  const descStyle = { fontSize: "18px", color: "#555", maxWidth: "600px", margin: "0 auto" };

  return (
    <>
      <style>{css}</style>

      {/* Background layers */}
      <div className="home-bg" />
      <div className="home-grid-overlay" />
      <div className="home-orb home-orb-1" />
      <div className="home-orb home-orb-2" />
      <div className="home-orb home-orb-3" />

      {/* Colored corner brackets */}
      <div className="home-corner home-corner-tl" />
      <div className="home-corner home-corner-tr" />
      <div className="home-corner home-corner-bl" />
      <div className="home-corner home-corner-br" />

      <div className="home-root-wrap">
        <div className="home-center" style={containerStyle}>

          {/* Animated pill badge */}
          <div className="home-badge">
            <span className="home-badge-dot" />
            API Dashboard · Live Data
          </div>

          {/* Homepage Content */}
          <h1 className="home-title-enhanced" style={titleStyle}>
            Welcome to My API Dashboard
          </h1>

          {/* Decorative divider */}
          <div className="home-divider">
            <div className="home-div-line" />
            <div className="home-div-dot" />
            <div className="home-div-dot lg" />
            <div className="home-div-dot" />
            <div className="home-div-line r" />
          </div>

          <p className="home-desc-enhanced" style={descStyle}>
            Explore live Weather updates, News headlines, Product listings, and Cocktail recipes. Click on any of the buttons above to visit the respective page.
          </p>

          {/* Navbar on top */}
          <nav className="home-nav-enhanced" style={navStyle}>
            <Link to="/weather" style={linkStyle}>
              <span className="nav-icon" />
              <span>Weather</span>
            </Link>
            <Link to="/news" style={linkStyle}>
              <span className="nav-icon" />
              <span>News</span>
            </Link>
            <Link to="/products" style={linkStyle}>
              <span className="nav-icon" />
              <span>Products</span>
            </Link>
            <Link to="/cocktail" style={linkStyle}>
              <span className="nav-icon" />
              <span>Cocktails</span>
            </Link>
          </nav>

          <div className="home-tagline">Powered by open APIs · Built with React</div>

        </div>
      </div>
    </>
  );
}

export default Home;