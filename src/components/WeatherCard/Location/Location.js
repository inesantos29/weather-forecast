import React from 'react';
import {Container, City, Country} from "./style";

const Location = ({city, country}) => {
  return(
    <Container>
      <City>{city}</City>
      <Country>{country}</Country>
    </Container>
  );
};

export default Location;
