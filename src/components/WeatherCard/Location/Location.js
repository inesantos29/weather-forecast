import React from 'react';
import { Container, City } from './style';

const Location = ({city}) => {
  return(
    <Container>
      <City>{city}</City>
    </Container>
  );
};

export default Location;
