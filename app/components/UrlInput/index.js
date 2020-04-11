/**
 *
 * UrlInput
 *
 */

import React, { memo, useState } from 'react';
import PropTypes from 'prop-types';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

function UrlInput(props) {
  // States
  const [active, setDropdownActive] = useState(false);
  const [baseUrl, setBaseUrl] = useState(UrlInput.baseUrls[0]);
  // States updates
  const toggleDrop = () => setDropdownActive(!active);
  // Main render
  return (
    <div className="input-group mb-3">
      <div className="input-group-prepend">
        <button
          aria-expanded="false"
          aria-haspopup="true"
          className="btn btn-outline-secondary dropdown-toggle"
          data-toggle="dropdown"
          onClick={toggleDrop}
          type="button"
        >
          {baseUrl}
        </button>
        <div className={UrlInput.dropdownClasses(active)}>
          {UrlInput.baseUrls.map(b => (
            <a id={b} className="dropdown-item" onClick={() => setBaseUrl(b)}>
              {b}/
            </a>
          ))}
          <div role="separator" className="dropdown-divider" />
          <a className="dropdown-item" href="#">
            Separated link
          </a>
        </div>
      </div>
      <input
        aria-label="Text input with segmented dropdown button"
        className="form-control"
        onChange={event =>
          UrlInput.fireProperty(event.target.value, props.onTextChange)
        }
        type="text"
      />
    </div>
  );
}
UrlInput.dropdownClasses = active => `dropdown-menu${active ? ' show' : ''}`;
UrlInput.fireProperty = (value, callbacks) => callbacks.forEach(c => c(value));
UrlInput.baseUrls = [
  'http://api.internal.ml',
  'http://prod.nps-croupier.melifrontends.com',
  'localhost',
];

UrlInput.propTypes = {
  onTextChange: PropTypes.arrayOf(PropTypes.func),
};

export default memo(UrlInput);
