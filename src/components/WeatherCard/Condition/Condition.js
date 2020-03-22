import React from 'react';
import {Temperature, State} from './style';

const Condition = ({temp, temp_min, temp_max, description}) => {

  const minMaxTemp = (min, max) => (
    <h4>
      <span>{min}&deg;</span>
      <span>{max}&deg;</span>
    </h4>
  );

  return(
    <>
      <Temperature>{temp}&deg;</Temperature>
      {minMaxTemp(temp_min, temp_max)}
      <State>{description}</State>
    </>
  );
};

export default Condition;
