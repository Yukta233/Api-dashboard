# React API Multi-Page Project

## Overview

This is a **React + Vite project** that integrates multiple APIs into a single multi-page website.  
The project demonstrates fetching and displaying data from **Weather API**, **News API**, **Products API**, and **Cocktail API**.  

Each page uses **inline CSS** and is structured for easy deployment.  

---

## 🌐 Pages

1. **Home Page (`/`)**
   - Landing page with welcome message.
   - Navbar links to all pages.

2. **Weather Page (`/weather`)**
   - Fetches weather data using [OpenWeatherMap API](https://openweathermap.org/api).
   - Users can search for **any city or country**.
   - Displays temperature, humidity, weather description, and icon.

3. **News Page (`/news`)**
   - Fetches top headlines from [NewsAPI](https://newsapi.org/).
   - Users can select **10 supported countries** from a dropdown.
   - Displays articles with title, description, image, and link.

4. **Products Page (`/products`)**
   - Fetches product data from [Fake Store API](https://fakestoreapi.com/).
   - Displays products with title, image, price, and description.

5. **Cocktails Page (`/cocktail`)**
   - Fetches cocktail recipes from [TheCocktailDB API](https://www.thecocktaildb.com/api.php).
   - Users can search **by cocktail name**.
   - Displays drink name, image, and instructions.

---

## 🚀 Features

- Multi-page React application using **React Router v6**.
- **Inline CSS only** → no external CSS files needed.
- Responsive layout, works on desktop and mobile.
- Environment variables used for **Weather** and **News** API keys.
- Fully deployable without modification.

---

## ⚡ Setup & Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/react-api-multi.git
cd react-api-multi

2. Install dependencies
npm install 

3. create .env file 
# Weather API Key
VITE_WEATHER_KEY=YOUR_OPENWEATHERMAP_KEY

# News API Key
VITE_NEWS_KEY=YOUR_NEWSAPI_KEY

4. start server
npm run dev