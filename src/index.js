import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import BlogContext from './context/BlogContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <BlogContext.Provider value={null}> 
      <App />
    </BlogContext.Provider>
  </React.StrictMode>
);
