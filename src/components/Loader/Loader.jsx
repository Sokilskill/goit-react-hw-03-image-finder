import React from 'react';
import PropTypes from 'prop-types';
import { Dna } from 'react-loader-spinner';
function Loader(props) {
  return (
    <div>
      <Dna
        visible={true}
        height="80"
        width="80"
        ariaLabel="dna-loading"
        wrapperStyle={{}}
        wrapperClass="dna-wrapper"
      />
    </div>
  );
}

Loader.propTypes = {};

export default Loader;
