import React from "react";
import { Link } from "react-router-dom";

const css = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,700&family=Jost:wght@300;400;500&display=swap');

  *, *::before, *::after { box-sizing: border-box; }

  body {
    background: linear-gradient(135deg, #0f2027 0%, #203a43 50%, #2c5364 100%);
    min-height: 100vh;
    margin: 0;
  }

  /* Background decorative rings */
  .home-bg-ring-1 {
    position: fixed;
    width: 720px;
    height: 720px;
    border-radius: 50%;
    border: 1px solid rgba(255,255,255,0.06);
    top: -300px;
    right: -200px;
    pointer-events: none;
    z-index: 0;
  }

  .home-bg-ring-2 {
    position: fixed;
    width: 480px;
    height: 480px;
    border-radius: 50%;
    border: 1px solid rgba(255,255,255,0.04);
    bottom: -180px;
    left: -140px;
    pointer-events: none;
    z-index: 0;
  }

  /* Corner frame accents */
  .home-corner {
    position: fixed;
    width: 56px;
    height: 56px;
    pointer-events: none;
    opacity: 0.15;
    z-index: 1;
  }
  .home-corner-tl { top: 22px; left: 22px; border-top: 1.5px solid rgba(255,255,255,0.3); border-left: 1.5px solid rgba(255,255,255,0.3); }
  .home-corner-tr { top: 22px; right: 22px; border-top: 1.5px solid rgba(255,255,255,0.3); border-right: 1.5px solid rgba(255,255,255,0.3); }
  .home-corner-bl { bottom: 22px; left: 22px; border-bottom: 1.5px solid rgba(255,255,255,0.3); border-left: 1.5px solid rgba(255,255,255,0.3); }
  .home-corner-br { bottom: 22px; right: 22px; border-bottom: 1.5px solid rgba(255,255,255,0.3); border-right: 1.5px solid rgba(255,255,255,0.3); }

  /* Outer wrapper */
  .home-root-wrap {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    z-index: 1;
    font-family: 'Jost', sans-serif;
    animation: hFadeUp 0.7s ease both;
  }

  @keyframes hFadeUp {
    from { opacity: 0; transform: translateY(20px); }
    to   { opacity: 1; transform: translateY(0); }
  }

  /* Nav overrides */
  .home-nav-enhanced {
    display: flex !important;
    justify-content: center !important;
    gap: 12px !important;
    margin-bottom: 64px !important;
    flex-wrap: wrap;
  }

  .home-nav-enhanced a {
    font-family: 'Jost', sans-serif !important;
    text-decoration: none !important;
    color: #fff !important;
    background: transparent !important;
    border: 1.5px solid rgba(255,255,255,0.4) !important;
    padding: 10px 26px !important;
    border-radius: 0 !important;
    font-size: 11px !important;
    font-weight: 500 !important;
    letter-spacing: 0.18em !important;
    text-transform: uppercase !important;
    position: relative !important;
    overflow: hidden !important;
    transition: color 0.28s ease, border-color 0.28s ease !important;
    display: inline-block !important;
  }

  .home-nav-enhanced a::before {
    content: '';
    position: absolute;
    inset: 0;
    background: rgba(255,255,255,0.15);
    transform: translateY(101%);
    transition: transform 0.28s cubic-bezier(0.4, 0, 0.2, 1);
    z-index: 0;
  }

  .home-nav-enhanced a:hover {
    color: #fff !important;
    border-color: rgba(255,255,255,0.7) !important;
  }

  .home-nav-enhanced a:hover::before {
    transform: translateY(0);
  }

  .home-nav-enhanced a span {
    position: relative;
    z-index: 1;
  }

  /* Stagger nav items */
  .home-nav-enhanced a:nth-child(1) { animation: hFadeUp 0.5s 0.1s ease both; }
  .home-nav-enhanced a:nth-child(2) { animation: hFadeUp 0.5s 0.17s ease both; }
  .home-nav-enhanced a:nth-child(3) { animation: hFadeUp 0.5s 0.24s ease both; }
  .home-nav-enhanced a:nth-child(4) { animation: hFadeUp 0.5s 0.31s ease both; }

  .home-title-enhanced {
    font-family: 'Playfair Display', serif !important;
    font-size: clamp(34px, 7vw, 70px) !important;
    font-weight: 900 !important;
    color: #ffffff !important;
    line-height: 1.06 !important;
    margin-bottom: 24px !important;
    animation: hFadeUp 0.6s 0.3s ease both;
  }

  /* Thin rule divider inserted via pseudo */
  .home-title-enhanced::after {
    content: '';
    display: block;
    width: 44px;
    height: 2px;
    background: rgba(255,255,255,0.4);
    margin: 24px auto 0;
    animation: hExpandW 0.5s 0.5s ease both;
  }

  @keyframes hExpandW {
    from { width: 0; opacity: 0; }
    to   { width: 44px; opacity: 1; }
  }

  /* Description overrides */
  .home-desc-enhanced {
    font-family: 'Jost', sans-serif !important;
    font-size: 16px !important;
    font-weight: 300 !important;
    color: rgba(255,255,255,0.55) !important;
    line-height: 1.85 !important;
    letter-spacing: 0.01em !important;
    max-width: 520px !important;
    margin: 28px auto 0 !important;
    animation: hFadeUp 0.6s 0.5s ease both;
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

      {/* Decorative background rings */}
      <div className="home-bg-ring-1" />
      <div className="home-bg-ring-2" />

      {/* Corner frame accents */}
      <div className="home-corner home-corner-tl" />
      <div className="home-corner home-corner-tr" />
      <div className="home-corner home-corner-bl" />
      <div className="home-corner home-corner-br" />

      <div className="home-root-wrap">
        <div style={containerStyle}>

          {/* Navbar on top */}
          <nav className="home-nav-enhanced" style={navStyle}>
            <Link to="/weather" style={linkStyle}><span>Weather</span></Link>
            <Link to="/news"    style={linkStyle}><span>News</span></Link>
            <Link to="/products" style={linkStyle}><span>Products</span></Link>
            <Link to="/cocktail" style={linkStyle}><span>Cocktails</span></Link>
          </nav>

          {/* Homepage Content */}
          <h1 className="home-title-enhanced" style={titleStyle}>
            Welcome to My API Dashboard
          </h1>

          <p className="home-desc-enhanced" style={descStyle}>
            Explore live Weather updates, News headlines, Product listings, and Cocktail recipes. Click on any of the buttons above to visit the respective page.
          </p>

        </div>
      </div>
    </>
  );
}

export default Home;