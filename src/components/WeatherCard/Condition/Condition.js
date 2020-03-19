import React from 'react';
import {Temp, State} from './style';

const Condition = ({temp, condition}) => {
  return(
    <>
      <Temp>{temp} &#176;C</Temp>
      <State>{condition}</State>
    </>
  );
};

export default Condition;
