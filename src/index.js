import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import SearchAPI from './APIs/search';

const Search = new SearchAPI('http://localhost:8080');

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App Search={Search} />
  </React.StrictMode>
);
