import React from 'react';
import { Temperature, Status } from './style';

const Condition = ({temp, temp_min, temp_max, description}) => {

  const minMaxTemp = (min, max) => {
    if (min && max) {
      return (
        <h3>
          <span className="m-right">Min {min}&deg;</span>
          <span>Max {max}&deg;</span>
        </h3>
      )
    }
  };

  return(
    <>
      <Temperature>{temp}&deg;</Temperature>
      {minMaxTemp(temp_min, temp_max)}
      <Status>{description}</Status>
    </>
  );
};

export default Condition;
