import React from 'react';
import styled from 'styled-components';

const Condition = ({temp, condition}) => {

  const Temp = styled.h2`
    font-size: 2rem;
    font-weight:200;
  `;

  const State = styled.h3`
    font-size: 1.2rem;
  `;

  return(
    <>
      <Temp>{temp} &#176;C</Temp>
      <State>{condition}</State>
    </>

  );
};

export default Condition;
