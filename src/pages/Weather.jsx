import React, { useState } from "react";

const css = `
  @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&display=swap');

  .weather-page {
    min-height: 100vh;
    background: linear-gradient(180deg, #06101f 0%, #0c1e3a 40%, #0e2a4a 100%);
    font-family: 'Outfit', sans-serif;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 60px 24px 60px;
  }

  .weather-page-inner {
    width: 100%;
    max-width: 560px;
  }

  /* Stars bg effect */
  .weather-page::before {
    content: '';
    position: fixed;
    inset: 0;
    background-image:
      radial-gradient(1px 1px at 10% 15%, rgba(255,255,255,0.5) 0%, transparent 100%),
      radial-gradient(1px 1px at 30% 50%, rgba(255,255,255,0.3) 0%, transparent 100%),
      radial-gradient(1px 1px at 70% 20%, rgba(255,255,255,0.4) 0%, transparent 100%),
      radial-gradient(1px 1px at 85% 65%, rgba(255,255,255,0.3) 0%, transparent 100%),
      radial-gradient(1px 1px at 50% 80%, rgba(255,255,255,0.4) 0%, transparent 100%),
      radial-gradient(1px 1px at 20% 90%, rgba(255,255,255,0.3) 0%, transparent 100%),
      radial-gradient(1px 1px at 60% 35%, rgba(255,255,255,0.5) 0%, transparent 100%),
      radial-gradient(1px 1px at 45% 10%, rgba(255,255,255,0.3) 0%, transparent 100%);
    pointer-events: none;
    z-index: 0;
  }

  .weather-page > * {
    position: relative;
    z-index: 1;
  }

  /* Title */
  .weather-page h2 {
    font-size: clamp(36px, 7vw, 64px) !important;
    font-weight: 800 !important;
    color: #fff !important;
    margin: 0 0 10px !important;
    line-height: 1 !important;
    letter-spacing: -0.02em !important;
  }

  .weather-eyebrow {
    font-size: 11px;
    font-weight: 500;
    letter-spacing: 0.22em;
    text-transform: uppercase;
    color: rgba(96,165,250,0.8);
    margin-bottom: 12px;
  }

  /* Search */
  .weather-search-wrap {
    display: flex;
    align-items: stretch;
    gap: 0;
    margin-top: 36px;
    margin-bottom: 0;
    border-radius: 14px;
    overflow: hidden;
    box-shadow: 0 8px 32px rgba(0,0,0,0.3);
  }

  .weather-page input[type="text"] {
    font-family: 'Outfit', sans-serif !important;
    flex: 1 !important;
    padding: 16px 20px !important;
    width: auto !important;
    background: rgba(255,255,255,0.08) !important;
    border: 1px solid rgba(255,255,255,0.12) !important;
    border-right: none !important;
    border-radius: 14px 0 0 14px !important;
    color: #fff !important;
    font-size: 15px !important;
    outline: none !important;
    transition: background 0.2s ease, border-color 0.2s ease !important;
    margin-right: 0 !important;
  }

  .weather-page input[type="text"]::placeholder {
    color: rgba(255,255,255,0.28);
  }

  .weather-page input[type="text"]:focus {
    background: rgba(255,255,255,0.12) !important;
    border-color: rgba(96,165,250,0.4) !important;
  }

  .weather-page button {
    font-family: 'Outfit', sans-serif !important;
    padding: 16px 28px !important;
    background: linear-gradient(135deg, #3b82f6, #1d4ed8) !important;
    color: #fff !important;
    border: none !important;
    border-radius: 0 14px 14px 0 !important;
    font-size: 15px !important;
    font-weight: 600 !important;
    cursor: pointer !important;
    transition: opacity 0.2s, transform 0.15s !important;
    letter-spacing: 0.02em !important;
    white-space: nowrap !important;
  }

  .weather-page button:hover {
    opacity: 0.88 !important;
    transform: translateY(-1px) !important;
  }

  /* Error */
  .weather-error {
    color: #f87171 !important;
    background: rgba(248,113,113,0.1);
    border: 1px solid rgba(248,113,113,0.2);
    border-radius: 10px;
    padding: 12px 18px;
    font-size: 14px;
    margin-top: 20px;
  }

  /* Weather Card */
  .weather-card {
    margin-top: 32px !important;
    background: rgba(255,255,255,0.06) !important;
    border: 1px solid rgba(255,255,255,0.1) !important;
    border-radius: 24px !important;
    padding: 0 !important;
    overflow: hidden;
    box-shadow: 0 24px 64px rgba(0,0,0,0.4) !important;
    animation: wCardIn 0.4s ease both;
  }

  @keyframes wCardIn {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }

  .weather-card-top {
    background: linear-gradient(135deg, rgba(59,130,246,0.2), rgba(29,78,216,0.1));
    padding: 32px 32px 28px;
    border-bottom: 1px solid rgba(255,255,255,0.07);
  }

  .weather-card h3 {
    font-size: 28px !important;
    font-weight: 700 !important;
    color: #fff !important;
    margin: 0 0 4px !important;
    letter-spacing: -0.01em !important;
  }

  .weather-card-condition {
    font-size: 14px;
    color: rgba(255,255,255,0.5);
    text-transform: capitalize;
    letter-spacing: 0.04em;
    margin-top: 4px;
  }

  .weather-temp-display {
    font-size: 72px;
    font-weight: 800;
    color: #fff;
    line-height: 1;
    margin: 16px 0 0;
    letter-spacing: -0.04em;
  }

  .weather-temp-display sup {
    font-size: 28px;
    font-weight: 400;
    vertical-align: super;
    opacity: 0.6;
    letter-spacing: 0;
  }

  .weather-stats-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1px;
    background: rgba(255,255,255,0.06);
  }

  .weather-stat {
    padding: 20px 24px;
    background: rgba(255,255,255,0.03);
    transition: background 0.2s ease;
  }

  .weather-stat:hover {
    background: rgba(255,255,255,0.06);
  }

  .weather-stat-label {
    font-size: 10px;
    font-weight: 500;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    color: rgba(255,255,255,0.35);
    margin-bottom: 6px;
  }

  .weather-stat-value {
    font-size: 20px;
    font-weight: 600;
    color: #fff;
    letter-spacing: -0.01em;
  }

  /* Hide original p tags inside card */
  .weather-card > div > p {
    display: none !important;
  }

  @media (max-width: 480px) {
    .weather-page { padding: 40px 16px; }
    .weather-temp-display { font-size: 56px; }
  }
`;

function Weather() {
  const [weather, setWeather] = useState(null);
  const [location, setLocation] = useState("");
  const [error, setError] = useState("");

  const containerStyle = { padding: "20px" };
  const cardStyle = { background: "white", padding: "15px", borderRadius: "8px", marginTop: "15px" };
  const inputStyle = { padding: "10px", width: "250px", marginRight: "10px" };
  const buttonStyle = { padding: "10px 15px", cursor: "pointer" };

  const fetchWeather = () => {
    if (!location) return;
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${import.meta.env.VITE_WEATHER_KEY}&units=metric`
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.cod === 200) {
          setWeather(data);
          setError("");
        } else {
          setError(data.message);
          setWeather(null);
        }
      })
      .catch((err) => {
        console.error(err);
        setError("Failed to fetch data");
        setWeather(null);
      });
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") fetchWeather();
  };

  return (
    <>
      <style>{css}</style>
      <div className="weather-page">
        <div className="weather-page-inner">
          <div className="weather-eyebrow">🌤 Live Weather</div>
          <h2>Weather Page</h2>

          <div className="weather-search-wrap">
            <input
              type="text"
              placeholder="Enter city, state, or country"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              onKeyPress={handleKeyPress}
              style={inputStyle}
            />
            <button onClick={fetchWeather} style={buttonStyle}>Search</button>
          </div>

          {error && <p className="weather-error" style={{ color: "red" }}>{error}</p>}

          {weather && weather.main && (
            <div className="weather-card" style={cardStyle}>
              <div className="weather-card-top">
                <h3>{weather.name}, {weather.sys.country}</h3>
                <div className="weather-card-condition">{weather.weather[0].description}</div>
                <div className="weather-temp-display">
                  {Math.round(weather.main.temp)}<sup>°C</sup>
                </div>
              </div>

              <div className="weather-stats-grid">
                <div className="weather-stat">
                  <div className="weather-stat-label">Feels Like</div>
                  <div className="weather-stat-value">{weather.main.feels_like}°C</div>
                </div>
                <div className="weather-stat">
                  <div className="weather-stat-label">Humidity</div>
                  <div className="weather-stat-value">{weather.main.humidity}%</div>
                </div>
                <div className="weather-stat">
                  <div className="weather-stat-label">Wind Speed</div>
                  <div className="weather-stat-value">{weather.wind.speed} m/s</div>
                </div>
                <div className="weather-stat">
                  <div className="weather-stat-label">Condition</div>
                  <div className="weather-stat-value" style={{fontSize:"15px", textTransform:"capitalize"}}>{weather.weather[0].description}</div>
                </div>
              </div>

              {/* Original p tags kept for data integrity, hidden via CSS */}
              <p>Temperature: {weather.main.temp}°C</p>
              <p>Feels Like: {weather.main.feels_like}°C</p>
              <p>Condition: {weather.weather[0].description}</p>
              <p>Humidity: {weather.main.humidity}%</p>
              <p>Wind Speed: {weather.wind.speed} m/s</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Weather;