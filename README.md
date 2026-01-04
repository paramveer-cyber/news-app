# News App

A lightweight, responsive news web application built with JavaScript, HTML, and CSS. Fetches and displays news articles from a news API, supports searching, filtering by category, and viewing article details.

## Features

- Browse top headlines and latest news
- Search articles by keyword
- Filter by category (e.g., business, technology, sports)
- View article details and open the original source
- Responsive layout for desktop and mobile

## Tech stack

- JavaScript (frontend logic)
- HTML5
- CSS3

The repository composition is mostly JavaScript with small amounts of HTML and CSS.


## Getting started

### Prerequisites

- Node.js (>= 14) and npm installed. You can check by running `node -v` and `npm -v`.

### Installation

1. Clone the repo:

   git clone https://github.com/paramveer-cyber/news-app.git
   cd news-app

2. Install dependencies:

   npm install

### Environment variables

This app needs an API key from a news provider (for example, NewsAPI.org) to fetch articles. Create a file named `.env` in the project root and add your API key. Example:

NEWS_API_KEY=your_api_key_here

When using a frontend build tool or framework, you might need to prefix environment variables (for example, `REACT_APP_NEWS_API_KEY`) — adapt the variable name to match the project's code.

### Running locally

Start the development server:

npm start

Then open http://localhost:3000 (or the port the project uses) in your browser.

### Build for production

Create a production build:

npm run build

Deploy the contents of the build/output folder to your static host (GitHub Pages, Netlify, Vercel, etc.).

## Project structure

Adjust the structure below to match the repository if needed:

- src/              - JavaScript source files
- public/           - Static HTML file(s) and assets
- styles/           - CSS files
- .env              - Environment variables (not committed)
