import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import SEOTags from './components/SEOTags';
import GoogleAnalytics from './components/GoogleAnalytics';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <SEOTags />
    <GoogleAnalytics />
    <App />
  </React.StrictMode>
);