import React from 'react';
import styled from 'styled-components';

const Location = ({city, country}) => {

  const Container = styled.div`
    text-align: center;
  `;

  const City = styled.h2`
    font-size: 1.6rem;
  `;

  const Country = styled.h3`
    font-size: 1.6rem;
  `;

  return(
    <Container>
      <City>{city}</City>
      <Country>{country}</Country>
    </Container>
  );
};

export default Location;
