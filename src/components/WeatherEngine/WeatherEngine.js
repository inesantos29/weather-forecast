import React, {useEffect, useState} from 'react';
import WeatherCard from '../WeatherCard/WeatherCard';
import SearchBar from '../SearchBar/SearchBar';

const API_KEY = "d1e5399eda22d71978d0a5e0fe154aab";

const WeatherEngine = ({location}) => {

  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [weather, setWeather] = useState({
    city: null,
    country:null,
    temp:null,
    temp_min: null,
    tem_max: null,
    condition:null,
    description: null
  });

  const calCelsius = (temp) => {
    return Math.floor(temp - 273.15);
  };

  const getWeather = async q => {
    setQuery("");
    setLoading(true);
    try{
      const apiRes = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${q}&appid=${API_KEY}`
      );
      const resJSON = await apiRes.json();
      setWeather({
        city:resJSON.name,
        country:resJSON.country,
        temp:(calCelsius(resJSON.main.temp)),
        temp_min:(calCelsius(resJSON.main.temp_min)),
        temp_max:(calCelsius(resJSON.main.temp_max)),
        condition:resJSON.weather[0].main,
        description:resJSON.weather[0].description
      });
    } catch(error){
      setError(true);
    }
    setLoading(false);
  };

  const handleSearch = e => {
    e.preventDefault();
    getWeather(query);
  };

  useEffect(() =>{
    getWeather(location);
  }, [location]);

  return (
    <>
      {!loading && !error ? (
        <>
          <SearchBar
            value={query}
            onChange={e => setQuery(e.target.value)}
            onClick={e => handleSearch(e)}
          />

          <WeatherCard
            city={weather.city}
            country={weather.country}
            temp={weather.temp}
            temp_min={weather.temp_min}
            temp_max={weather.temp_max}
            condition={weather.condition}
            description={weather.description}
          />
        </>
      ) : loading? (
        <div className="user-message">
          <h2>Loading...</h2>
        </div>
      ): !loading && error?(
      <div className="user-message">
        <h2>There has been an error!</h2>
        <br/>
        <button
          className="button--state-danger"
          onClick={() => setError(false)}>
          Reset
        </button>
      </div>) :null}
    </>
  );
};

export default WeatherEngine;
