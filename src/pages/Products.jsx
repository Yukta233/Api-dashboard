import React, { useEffect, useState } from "react";

const css = `
  @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:wght@300;400;500&display=swap');

  .products-page {
    min-height: 100vh;
    background: #f0ede8;
    font-family: 'DM Sans', sans-serif;
  }

  .products-header {
    padding: 52px 48px 40px;
    max-width: 1280px;
    margin: 0 auto;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 16px;
    border-bottom: 1px solid rgba(0,0,0,0.08);
  }

  .products-page h2 {
    font-family: 'Syne', sans-serif !important;
    font-size: clamp(38px, 6vw, 72px) !important;
    font-weight: 800 !important;
    color: #0f0f0f !important;
    margin: 0 !important;
    line-height: 1 !important;
    letter-spacing: -0.02em !important;
  }

  .products-subtitle {
    font-size: 13px;
    color: #888;
    letter-spacing: 0.04em;
  }

  .products-body {
    max-width: 1280px;
    margin: 0 auto;
    padding: 40px 48px 60px;
  }

  .products-grid {
    display: grid !important;
    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)) !important;
    gap: 20px !important;
    margin-top: 0 !important;
  }

  .product-card {
    background: #fff !important;
    border-radius: 16px !important;
    padding: 0 !important;
    box-shadow: none !important;
    border: 1px solid rgba(0,0,0,0.07) !important;
    overflow: hidden;
    transition: transform 0.3s ease, box-shadow 0.3s ease !important;
    cursor: pointer;
    animation: pCardIn 0.4s ease both;
    display: flex !important;
    flex-direction: column !important;
  }

  @keyframes pCardIn {
    from { opacity: 0; transform: scale(0.96); }
    to { opacity: 1; transform: scale(1); }
  }

  .product-card:hover {
    transform: translateY(-5px) !important;
    box-shadow: 0 16px 40px rgba(0,0,0,0.1) !important;
  }

  .product-img-wrap {
    background: #f8f7f5;
    padding: 28px;
    display: flex;
    align-items: center;
    justify-content: center;
    aspect-ratio: 1;
    overflow: hidden;
  }

  .product-card img {
    width: auto !important;
    height: 150px !important;
    object-fit: contain !important;
    transition: transform 0.4s ease !important;
  }

  .product-card:hover img {
    transform: scale(1.08) !important;
  }

  .product-card-body {
    padding: 18px 20px 20px;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 10px;
  }

  .product-card h4 {
    font-family: 'Syne', sans-serif !important;
    font-size: 14px !important;
    font-weight: 600 !important;
    color: #0f0f0f !important;
    margin: 0 !important;
    line-height: 1.4 !important;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  .product-card p {
    font-size: 16px !important;
    font-weight: 700 !important;
    font-family: 'Syne', sans-serif !important;
    color: #0f0f0f !important;
    margin: 0 !important;
  }

  .product-card-footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .product-add-btn {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background: #0f0f0f;
    color: #fff;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    line-height: 1;
    cursor: pointer;
    transition: background 0.2s ease, transform 0.15s ease;
    flex-shrink: 0;
  }

  .product-add-btn:hover {
    background: #333;
    transform: scale(1.1);
  }

  @media (max-width: 640px) {
    .products-header { padding: 32px 20px 28px; }
    .products-body { padding: 24px 20px 40px; }
  }
`;

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const containerStyle = { padding: "20px" };
  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
    gap: "20px",
    marginTop: "20px",
  };
  const cardStyle = {
    background: "white",
    padding: "15px",
    borderRadius: "8px",
    boxShadow: "0 0 10px rgba(0,0,0,0.1)",
  };
  const imgStyle = { width: "100%", height: "150px", objectFit: "contain" };

  return (
    <>
      <style>{css}</style>
      <div className="products-page">
        <div className="products-header" style={containerStyle}>
          <h2>Products Page</h2>
          <div className="products-subtitle">{products.length} items available</div>
        </div>

        <div className="products-body">
          <div className="products-grid" style={gridStyle}>
            {products.map((item) => (
              <div key={item.id} className="product-card" style={cardStyle}>
                <div className="product-img-wrap">
                  <img src={item.image} alt={item.title} style={imgStyle} />
                </div>
                <div className="product-card-body">
                  <h4>{item.title}</h4>
                  <div className="product-card-footer">
                    <p>₹ {item.price}</p>
                    <button className="product-add-btn" aria-label="Add to cart">+</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Products;