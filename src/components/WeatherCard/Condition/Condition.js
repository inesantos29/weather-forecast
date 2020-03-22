import React from 'react';
import PropTypes from 'prop-types';

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
      {temp ? (<Temperature>{temp}&deg;</Temperature>) : null}
      {minMaxTemp(temp_min, temp_max)}
      <Status>{description}</Status>
    </>
  );
};

export default Condition;

Condition.propTypes = {
  temp:  PropTypes.number.isRequired,
  temp_min:  PropTypes.number.isRequired,
  temp_max: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
};
