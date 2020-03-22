import React from 'react';
import styled from 'styled-components';
import Location from './Location/Location';
import Icon from './Icon/Icon';
import Condition from './Condition/Condition';

const WeatherCard = ({city, country, temp, temp_min, temp_max, condition, description}) => {
  let red = 0;
  let blue = 0;
  let highColor = 0;

  // Cold weather (blue card) will go from temperatures less than 12 degrees
  // Hot weather (red card) will go for temperatures above or equal to 12
  if (temp >= 12) {
    highColor = (1 - (temp - 12) / 28) * 255;
    red = 255;
    blue = 0;
  } else {
    highColor = (1 - (temp + 20) / 32) * 255;
    red = 0;
    blue = 255;
  }

  let lowColor = highColor - 150;

  const Card = styled.div`
    background: linear-gradient(
      to top,
      rgb(${red}, ${highColor}, ${blue}),
      rgb(${red}, ${lowColor}, ${blue})
    );
    width: 300px;
    height: 380px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    border-radius: 15px;
    margin: 50px auto;
  `;

  return(
    <Card>
      <Location
        city={city}
        country={country}
      />
      <Icon condition={condition}/>
      <Condition
        temp={temp}
        temp_min={temp_min}
        temp_max={temp_max}
        condition={condition}
        description={description}
      />
    </Card>
  );
};

export default WeatherCard;
