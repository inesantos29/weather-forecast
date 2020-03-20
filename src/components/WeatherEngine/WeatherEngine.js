import React, {useEffect, useState} from 'react';
import WeatherCard from "../WeatherCard/WeatherCard";

const API_KEY = "8b4a1cfe7b37f251dcce8b232975fd6d";

const WeatherEngine = ({location}) => {

  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [weather, setWeather] = useState({
    city: null,
    country:null,
    temp:null,
    condition:null
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
        condition:resJSON.weather[0].main
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
          <WeatherCard
            temp={weather.temp}
            condition={weather.condition}
            city={weather.city}
            country={weather.country}
          />
          <form>
            <input value={query} onChange={e => setQuery(e.target.value)} />
            <button onClick={e => handleSearch(e)}>Search</button>
          </form>
        </>
        ) : loading? (
          <div>Loading</div>
      ): !loading && error?(
        <div>
          There has been an error!
          <br/>
          <button
            onClick={() => setError(false)}>
            Reset!
          </button>
        </div>) :null}
    </>
  );
};

export default WeatherEngine;
