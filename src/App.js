import React from 'react';
import WeatherEngine from './components/WeatherEngine/WeatherEngine';
import './App.css';

function App() {
  return (
    <div className="container">
      <div className="title">
        <a
          href="https://openweathermap.org/api"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          Open Weather API
        </a>
      </div>
      <WeatherEngine location="Lisbon"  />
    </div>
  );
}

export default App;
