/**
 *
 * LeftMenu
 *
 */

import React, { memo } from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import './styles.css';

function LeftMenu() {
  return (
    <div>
      <ul className="list-group">
        <li className="list-group-item heading">Endpoints</li>
        <li className="list-group-item">
          <span className="badge badge-secondary">POST</span>
          Tx Resp
        </li>
        <li className="list-group-item">
          <span className="badge badge-secondary">POST</span>
          Point Resp
        </li>
        <li className="list-group-item">
          <span className="badge badge-secondary">POST</span>
          Reserva Resp
        </li>
        <li className="list-group-item">
          <span className="badge badge-secondary">POST</span>
          Retiros resp
        </li>
        <li className="list-group-item heading">Endpoints</li>
        <li className="list-group-item">
          <span className="badge badge-secondary">POST</span>
          Reserva Resp
        </li>
        <li className="list-group-item">
          <span className="badge badge-secondary">POST</span>
          Retiros resp
        </li>
      </ul>
    </div>
  );
}

LeftMenu.propTypes = {};

export default memo(LeftMenu);
