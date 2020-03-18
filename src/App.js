import React from 'react';

import WeatherCard from "./components/WeatherCard/WeatherCard";

import './App.css';

function App() {
  return (
    <div className="App">
      <WeatherCard temp={30} condition={"Clear"} city={"Sydney"} country={"AU"}/>
      <WeatherCard temp={22} condition={"Clear"} city={"Lisbon"} country={"PT"}/>
      <WeatherCard temp={11} condition={"Clouds"} city={"London"} country={"GB"}/>
      <WeatherCard temp={17} condition={"Dust"} city={"Rome"} country={"IT "}/>
    </div>
  );
}

export default App;
