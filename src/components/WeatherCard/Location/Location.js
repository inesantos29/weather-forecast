import React from 'react';
import PropTypes from 'prop-types';

import { Container, City } from './style';

const Location = ({city}) => {
  return(
    <Container>
      <City>{city}</City>
    </Container>
  );
};

export default Location;


Location.propTypes = {
  city: PropTypes.string.isRequired,
};

