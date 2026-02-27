import React, { useEffect, useState } from "react";

const css = `
  @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,wght@0,400;0,700;0,900;1,400&family=DM+Sans:wght@300;400;500&display=swap');

  .news-page {
    min-height: 100vh;
    background: #f8f4ef;
    font-family: 'DM Sans', sans-serif;
  }

  .news-header {
    background: #1c1410;
    padding: 40px 40px 36px;
    position: relative;
    overflow: hidden;
  }

  .news-header::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(90deg, #e8472a, #f5a623, #e8472a);
    background-size: 200% 100%;
    animation: slideGrad 3s linear infinite;
  }

  @keyframes slideGrad {
    0% { background-position: 0% 0; }
    100% { background-position: 200% 0; }
  }

  .news-header-inner {
    max-width: 1100px;
    margin: 0 auto;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 20px;
  }

  .news-page h2 {
    font-family: 'Fraunces', serif !important;
    font-size: clamp(42px, 7vw, 76px) !important;
    font-weight: 900 !important;
    color: #fff !important;
    margin: 0 !important;
    line-height: 1 !important;
    letter-spacing: -0.01em !important;
  }

  .news-tag {
    font-size: 10px;
    font-weight: 500;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: #e8472a;
    margin-bottom: 10px;
  }

  .news-page select {
    font-family: 'DM Sans', sans-serif !important;
    padding: 10px 36px 10px 16px !important;
    font-size: 13px !important;
    font-weight: 500 !important;
    background: rgba(255,255,255,0.08) !important;
    color: #fff !important;
    border: 1px solid rgba(255,255,255,0.2) !important;
    border-radius: 8px !important;
    outline: none !important;
    cursor: pointer !important;
    margin-bottom: 0 !important;
    appearance: none !important;
    -webkit-appearance: none !important;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath fill='%23ffffff' d='M6 8L0 0h12z'/%3E%3C/svg%3E") !important;
    background-repeat: no-repeat !important;
    background-position: right 12px center !important;
    transition: border-color 0.2s ease !important;
  }

  .news-page select:focus {
    border-color: #e8472a !important;
  }

  .news-page select option {
    background: #1c1410;
    color: #fff;
  }

  .news-body {
    max-width: 1100px;
    margin: 0 auto;
    padding: 40px 40px 60px;
  }

  .news-error {
    color: #e8472a !important;
    font-size: 14px;
    background: rgba(232,71,42,0.08);
    border: 1px solid rgba(232,71,42,0.2);
    border-radius: 8px;
    padding: 12px 18px;
    margin-bottom: 24px;
  }

  /* Featured first article */
  .news-card:first-child {
    grid-column: 1 / -1 !important;
    display: grid !important;
    grid-template-columns: 1fr 1fr !important;
    gap: 0 !important;
    border-radius: 16px !important;
    overflow: hidden !important;
    background: #fff !important;
    box-shadow: 0 4px 24px rgba(0,0,0,0.08) !important;
    margin-bottom: 0 !important;
    padding: 0 !important;
  }

  .news-card:first-child .news-card-img {
    border-radius: 0 !important;
    height: 100% !important;
    max-height: none !important;
    min-height: 280px;
  }

  .news-card:first-child .news-card-body {
    padding: 32px !important;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .news-card:first-child h4 {
    font-size: 24px !important;
  }

  .news-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 20px;
  }

  .news-card {
    background: #fff !important;
    border-radius: 12px !important;
    padding: 0 !important;
    box-shadow: 0 2px 12px rgba(0,0,0,0.06) !important;
    overflow: hidden !important;
    margin-bottom: 0 !important;
    transition: transform 0.25s ease, box-shadow 0.25s ease !important;
    animation: cardSlide 0.4s ease both;
  }

  @keyframes cardSlide {
    from { opacity: 0; transform: translateY(14px); }
    to { opacity: 1; transform: translateY(0); }
  }

  .news-card:hover {
    transform: translateY(-3px) !important;
    box-shadow: 0 8px 32px rgba(0,0,0,0.12) !important;
  }

  .news-card-img-wrap {
    overflow: hidden;
  }

  .news-card-img {
    width: 100% !important;
    max-height: 180px !important;
    object-fit: cover !important;
    border-radius: 0 !important;
    margin-bottom: 0 !important;
    display: block;
    transition: transform 0.4s ease !important;
  }

  .news-card:hover .news-card-img {
    transform: scale(1.04) !important;
  }

  .news-card-body {
    padding: 18px 20px 20px !important;
  }

  .news-card h4 {
    font-family: 'Fraunces', serif !important;
    font-size: 17px !important;
    font-weight: 700 !important;
    color: #1c1410 !important;
    margin: 0 0 10px !important;
    line-height: 1.35 !important;
  }

  .news-card p {
    font-size: 13px !important;
    color: #666 !important;
    line-height: 1.65 !important;
    margin: 0 0 14px !important;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  .news-card a {
    display: inline-flex;
    align-items: center;
    gap: 5px;
    font-size: 12px !important;
    font-weight: 500 !important;
    color: #e8472a !important;
    text-decoration: none !important;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    border-bottom: 1px solid rgba(232,71,42,0.3);
    padding-bottom: 2px;
    transition: border-color 0.2s ease, gap 0.2s ease !important;
  }

  .news-card a:hover {
    border-color: #e8472a;
    gap: 8px;
  }

  @media (max-width: 640px) {
    .news-card:first-child {
      grid-template-columns: 1fr !important;
    }
    .news-header { padding: 28px 20px 24px; }
    .news-body { padding: 24px 20px 40px; }
  }
`;

function News() {
  const [country, setCountry] = useState("in");
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState("");

  const containerStyle = { padding: "20px" };
  const dropdownStyle = { padding: "10px", fontSize: "16px", marginBottom: "20px" };
  const cardStyle = {
    background: "white",
    padding: "15px",
    borderRadius: "8px",
    boxShadow: "0 0 10px rgba(0,0,0,0.1)",
    marginBottom: "15px",
  };

  const countries = [
    { code: "in", name: "India" },
    { code: "us", name: "USA" },
    { code: "gb", name: "UK" },
    { code: "au", name: "Australia" },
    { code: "ca", name: "Canada" },
    { code: "fr", name: "France" },
    { code: "de", name: "Germany" },
    { code: "jp", name: "Japan" },
    { code: "cn", name: "China" },
    { code: "ru", name: "Russia" },
  ];

  const fetchNews = (countryCode) => {
    fetch(
      `https://newsapi.org/v2/top-headlines?country=${countryCode}&category=general&q=news&apiKey=${import.meta.env.VITE_NEWS_KEY}`
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "ok" && data.articles.length > 0) {
          setArticles(data.articles);
          setError("");
        } else {
          setError("No news found for this country right now.");
          setArticles([]);
        }
      })
      .catch((err) => {
        console.error(err);
        setError("Failed to fetch news");
        setArticles([]);
      });
  };

  useEffect(() => {
    fetchNews(country);
  }, [country]);

  return (
    <>
      <style>{css}</style>
      <div className="news-page">
        <div className="news-header">
          <div className="news-header-inner">
            <div>
              <div className="news-tag">📰 Top Headlines</div>
              <h2>News Page</h2>
            </div>
            <select
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              style={dropdownStyle}
            >
              {countries.map((c) => (
                <option key={c.code} value={c.code}>{c.name}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="news-body">
          {error && <p className="news-error" style={{ color: "red" }}>{error}</p>}

          <div className="news-grid">
            {articles.map((news, index) => (
              <div key={index} className="news-card" style={cardStyle}>
                {news.urlToImage && (
                  <div className="news-card-img-wrap">
                    <img
                      src={news.urlToImage}
                      alt={news.title}
                      className="news-card-img"
                      style={{ width: "100%", maxHeight: "200px", objectFit: "cover", borderRadius: "5px", marginBottom: "10px" }}
                    />
                  </div>
                )}
                <div className="news-card-body">
                  <h4>{news.title}</h4>
                  <p>{news.description}</p>
                  {news.url && (
                    <a href={news.url} target="_blank" rel="noopener noreferrer">
                      Read more →
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default News;