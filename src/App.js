import React from 'react';
import WeatherEngine from "./components/WeatherEngine/WeatherEngine";
import './App.css';

function App() {
  return (
    <div className="wrapper">
      <WeatherEngine location='sydney, au'/>
    </div>
  );
}

export default App;
