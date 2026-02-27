import React, { useState } from "react";

const css = `
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400;1,600&family=DM+Sans:wght@300;400;500&display=swap');

  .cocktail-page {
    min-height: 100vh;
    background: linear-gradient(160deg, #1a0a2e 0%, #2d1054 40%, #1a0a2e 100%);
    font-family: 'DM Sans', sans-serif;
    padding: 0;
  }

  .cocktail-hero {
    text-align: center;
    padding: 64px 24px 48px;
    position: relative;
  }

  .cocktail-hero::before {
    content: '';
    position: absolute;
    width: 500px;
    height: 500px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(180,80,255,0.12) 0%, transparent 70%);
    top: -100px;
    left: 50%;
    transform: translateX(-50%);
    pointer-events: none;
  }

  .cocktail-page h2 {
    font-family: 'Cormorant Garamond', serif !important;
    font-size: clamp(40px, 8vw, 80px) !important;
    font-weight: 700 !important;
    color: #fff !important;
    letter-spacing: 0.02em !important;
    margin: 0 0 8px !important;
    line-height: 1 !important;
  }

  .cocktail-eyebrow {
    font-size: 11px;
    font-weight: 500;
    letter-spacing: 0.22em;
    text-transform: uppercase;
    color: rgba(180,80,255,0.8);
    margin-bottom: 12px;
  }

  .cocktail-search-row {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0;
    max-width: 520px;
    margin: 36px auto 0;
  }

  .cocktail-page input[type="text"] {
    font-family: 'DM Sans', sans-serif !important;
    padding: 14px 20px !important;
    width: 100% !important;
    background: rgba(255,255,255,0.06) !important;
    border: 1px solid rgba(255,255,255,0.15) !important;
    border-right: none !important;
    border-radius: 10px 0 0 10px !important;
    color: #fff !important;
    font-size: 14px !important;
    outline: none !important;
    transition: border-color 0.2s ease, background 0.2s ease !important;
    margin-right: 0 !important;
  }

  .cocktail-page input[type="text"]::placeholder {
    color: rgba(255,255,255,0.3);
  }

  .cocktail-page input[type="text"]:focus {
    background: rgba(255,255,255,0.1) !important;
    border-color: rgba(180,80,255,0.5) !important;
  }

  .cocktail-page button {
    font-family: 'DM Sans', sans-serif !important;
    padding: 14px 28px !important;
    background: linear-gradient(135deg, #9333ea, #6d28d9) !important;
    color: #fff !important;
    border: none !important;
    border-radius: 0 10px 10px 0 !important;
    font-size: 14px !important;
    font-weight: 500 !important;
    letter-spacing: 0.04em !important;
    cursor: pointer !important;
    transition: opacity 0.2s ease, transform 0.15s ease !important;
    white-space: nowrap !important;
  }

  .cocktail-page button:hover {
    opacity: 0.88 !important;
    transform: translateY(-1px) !important;
  }

  .cocktail-page button:active {
    transform: translateY(0) !important;
  }

  .cocktail-error {
    text-align: center;
    color: #f87171 !important;
    font-size: 14px;
    margin-top: 20px;
    padding: 12px 20px;
    background: rgba(248,113,113,0.1);
    border: 1px solid rgba(248,113,113,0.2);
    border-radius: 8px;
    max-width: 520px;
    margin-left: auto;
    margin-right: auto;
  }

  .cocktail-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 24px;
    padding: 40px 32px 60px;
    max-width: 1200px;
    margin: 0 auto;
  }

  .cocktail-card {
    background: rgba(255,255,255,0.05) !important;
    border: 1px solid rgba(255,255,255,0.1) !important;
    border-radius: 16px !important;
    padding: 0 !important;
    box-shadow: 0 8px 32px rgba(0,0,0,0.3) !important;
    overflow: hidden !important;
    margin-bottom: 0 !important;
    transition: transform 0.25s ease, box-shadow 0.25s ease !important;
    animation: cardIn 0.4s ease both;
  }

  @keyframes cardIn {
    from { opacity: 0; transform: translateY(16px); }
    to { opacity: 1; transform: translateY(0); }
  }

  .cocktail-card:hover {
    transform: translateY(-4px) !important;
    box-shadow: 0 16px 48px rgba(0,0,0,0.4) !important;
  }

  .cocktail-card-img-wrap {
    position: relative;
    overflow: hidden;
  }

  .cocktail-card img {
    width: 100% !important;
    max-height: 220px !important;
    object-fit: cover !important;
    border-radius: 0 !important;
    margin-bottom: 0 !important;
    display: block;
    transition: transform 0.4s ease !important;
  }

  .cocktail-card:hover img {
    transform: scale(1.04) !important;
  }

  .cocktail-card-body {
    padding: 20px 22px 24px;
  }

  .cocktail-card h3 {
    font-family: 'Cormorant Garamond', serif !important;
    font-size: 24px !important;
    font-weight: 600 !important;
    color: #fff !important;
    margin: 0 0 12px !important;
    line-height: 1.2 !important;
  }

  .cocktail-card p {
    font-size: 13px !important;
    color: rgba(255,255,255,0.45) !important;
    line-height: 1.7 !important;
    margin: 0 !important;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  .cocktail-divider {
    width: 28px;
    height: 2px;
    background: linear-gradient(90deg, #9333ea, transparent);
    margin-bottom: 12px;
    border-radius: 2px;
  }
`;

function Cocktail() {
  const [search, setSearch] = useState("");
  const [drinks, setDrinks] = useState([]);
  const [error, setError] = useState("");

  const containerStyle = { padding: "20px" };
  const inputStyle = { padding: "10px", width: "250px", marginRight: "10px" };
  const buttonStyle = { padding: "10px 15px", cursor: "pointer" };
  const cardStyle = {
    background: "white",
    padding: "15px",
    borderRadius: "8px",
    boxShadow: "0 0 10px rgba(0,0,0,0.1)",
    marginBottom: "15px",
  };
  const imgStyle = {
    width: "100%",
    maxHeight: "200px",
    objectFit: "cover",
    borderRadius: "5px",
    marginBottom: "10px",
  };

  const fetchCocktail = () => {
    if (!search) return;

    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${search}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.drinks) {
          setDrinks(data.drinks);
          setError("");
        } else {
          setDrinks([]);
          setError("No cocktails found for this name.");
        }
      })
      .catch((err) => {
        console.error(err);
        setError("Failed to fetch cocktails");
        setDrinks([]);
      });
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") fetchCocktail();
  };

  return (
    <>
      <style>{css}</style>
      <div className="cocktail-page">
        <div className="cocktail-hero" style={containerStyle}>
          <div className="cocktail-eyebrow">🍹 Discover &amp; Explore</div>
          <h2>Cocktail Page</h2>

          <div className="cocktail-search-row">
            <input
              type="text"
              placeholder="Enter cocktail name"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyPress={handleKeyPress}
              style={inputStyle}
            />
            <button onClick={fetchCocktail} style={buttonStyle}>
              Search
            </button>
          </div>

          {error && <p className="cocktail-error" style={{ color: "red" }}>{error}</p>}
        </div>

        <div className="cocktail-grid">
          {drinks.map((drink) => (
            <div key={drink.idDrink} className="cocktail-card" style={cardStyle}>
              {drink.strDrinkThumb && (
                <div className="cocktail-card-img-wrap">
                  <img
                    src={drink.strDrinkThumb}
                    alt={drink.strDrink}
                    style={imgStyle}
                  />
                </div>
              )}
              <div className="cocktail-card-body">
                <h3>{drink.strDrink}</h3>
                <div className="cocktail-divider" />
                <p>{drink.strInstructions}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Cocktail;