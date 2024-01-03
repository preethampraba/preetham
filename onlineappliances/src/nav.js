import React from 'react';
import './App.css';

function App() {
  return (
    <div>
      <nav>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
      <div className="content">
        {/* Your page content goes here */}
        <h1>Welcome to My Navigation App</h1>
      </div>
    </div>
  );
}

export default App;
