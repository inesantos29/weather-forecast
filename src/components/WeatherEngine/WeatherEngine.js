import React, {useState, useEffect} from 'react';
import WeatherCard from "../WeatherCard/WeatherCard";

const WeatherEngine = ({location}) => {

  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [weather, setWeather] = useState({
    temp:null,
    city: null,
    condition:null,
    country:null
  });

  const getWeather = async q => {
    setQuery("");
    setLoading(true);
    try{
      const apiRes = await fetch(
        {/*`https://api.openweathermap.org/data/2.5/weather?q=${q}&appid=d1e5399eda22d71978d0a5e0fe154aab`*/}
      );
      const resJSON = await apiRes.json();
      setWeather({
        temp:resJSON.main.temp,
        city:resJSON.name,
        condition:resJSON.weather[0].main,
        country:resJSON.country
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
            <input  value={query} onChange={e => setQuery(e.target.value)} />
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
