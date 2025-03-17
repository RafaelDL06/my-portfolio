import React from 'react';
import ReactDOM from 'react-dom/client'; // This is the new import for React 18
import App from './App';
//import './index.css'; // Your global CSS file

// Create the root element
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the App component into the root element
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
