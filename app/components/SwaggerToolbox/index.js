/**
 *
 * SwaggerToolbox
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
import './styles.css';

function SwaggerToolbox({
  row,
  text,
  textProp = () => {},
  rowProp = () => {},
}) {
  // render
  return (
    <div>
      <div className="card">
        <div className="card-body">This is some text within a card body.</div>
      </div>
      <div className="card">
        <div className="card-body">
        </div>
      </div>
    </div>
  );
}

SwaggerToolbox.propTypes = {
  row: PropTypes.number,
  text: PropTypes.string,
  textProp: PropTypes.func,
  rowProp: PropTypes.func,
};

export default memo(SwaggerToolbox);
