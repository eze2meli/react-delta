/**
 *
 * SwaggerToolbox
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
import './styles.css';
import '@primer/css/dist/core.css';
import orderedJson from 'json-order';
import Octicon, { Check, Megaphone, LightBulb } from '@primer/octicons-react';
import objectPath from 'object-path';
import yaml from '../../utils/yaml';
import arrays from '../../utils/arrays';
import funcs from './suggestion/index';
import model from './meta/model';
import modelInfo from './meta/modelInfo';
import modelSuggest from './meta/modelSuggest';

function SwaggerToolbox({
  row,
  text,
  textProp = () => {},
  textFocusProp = () => {},
  rowProp = () => {},
}) {
  // Sanitize
  const { object: o, ex } = yaml.parse(text); // golang idiomatic where?
  const wholeObject = o || {};
  const json = JSON.stringify(wholeObject) || '{}';
  if (json.includes('null')) {
    return <div>Don&#8217;t use null in values nor texts</div>;
  }
  if (ex) {
    return <div>{JSON.stringify(ex)}</div>;
  }
  const inferStructureKey = path => {
    // debugger;
    if (path.length === 0) {
      return '$';
    }
    // replace array indexes with #
    const basePath =
      path
        .join('.')
        .replace(/[0-9]/g, '#')
        .split('.') || [];
    let key = '$';
    basePath.forEach(p => {
      // debugger;
      if (key === '?') {
        return;
      }
      const join = [key, p].join('.');
      const info = model[join];
      if (info) {
        key = join;
      } else {
        const previous = model[key];
        if (previous[p]) {
          key = join;
        } else {
          const variableKey = Object.keys(previous)
            .filter(k => k.startsWith('$'))
            .shift();
          if (variableKey) {
            key = [key, variableKey].join('.');
          } else {
            key = '?';
          }
        }
      }
    });
    return key;
  };
  // getting orderMap. Is a array-based meta-object of object
  const { map } = orderedJson.parse(json, '$', '.');
  // console.log(map);
  //
  // getting actualPath
  const actualPath = yaml.getPathFromPosition(text, row) || [];
  // debugger;
  const parentPath = actualPath.slice(0); // copy array
  // actualPath = ['tags',1,'name']
  // parentPath = ['tags',1,'name']
  //
  const actual = parentPath.pop();
  // debugger;
  const siblingsPath = inferStructureKey(parentPath);
  const childrenPath = inferStructureKey(actualPath);
  // actual = 'name'
  // parentPath = ['tags',1]
  // siblingsPath = '$.tags.1'
  // console.log(actualPath, actual, siblingsPath);
  //
  const siblings = map[siblingsPath] || [];
  const pos = siblings.indexOf(actual);
  const structure = {};
  structure.siblings = model[siblingsPath] || {};
  structure.children = model[childrenPath] || {};
  const parentObj = objectPath.get(wholeObject, parentPath) || {};
  let subObj = objectPath.get(wholeObject, actualPath) || {};

  if (subObj instanceof Array) {
    subObj = arrays.toObj(subObj);
  }

  let info = modelInfo[childrenPath];
  let suggestions = modelSuggest[childrenPath] || {};
  if (structure.children.$isAType) {
    info = `${structure.children.symbol}:\n${structure.children.description}`;
    structure.children = {};
    // If we are on a leaf, it is possible we are in an array and it has suggestions
    suggestions = modelSuggest[siblingsPath] || suggestions;
  }

  console.log(parentPath, actualPath);
  // siblings map['$.tags.1'] => ['name','description']
  // pos = 0
  //
  const impactObjectS = (params, key) => {
    const [actualObj, actualObjPath] = params.fns.impact(params, key);
    if (actualObjPath.length > 1) {
      objectPath.set(wholeObject, actualObjPath, actualObj);
    }
    const newText = yaml.dump(wholeObject);
    textProp(newText);
    textFocusProp();
  };
  const typeLabel = txt => (
    <label className="bg-gray border m-0 px-1 rounded-1 text-gray">{txt}</label>
  );
  const renderRowClass = key =>
    `Box-row flex-items-center p-0 v-align-middle${
      key === actual ? ' bg-yellow-1' : ''
    }`;
  const renderStructureRow = (key, i, params) => {
    const applied = params.fns.isApplied(params, key);
    const getSymbol = params.fns.getSymbol || (() => 'suggest');
    return (
      <div className={renderRowClass(key)} key={i}>
        <div className="d-flex">
          <div className="flex-auto lh-condensed min-width-0 p-2 pr-3">
            <div>
              {typeLabel(getSymbol(params, key))} {key}{' '}
            </div>
          </div>
          <button
            type="button"
            disabled={false}
            className="bg-gray border border-gray-dark d-flex flex-items-center m-1 mr-1 px-2 rounded-1 text-gray"
            onClick={() => impactObjectS(params, key)}
          >
            {applied ? (
              <span>
                <Octicon icon={Check} /> Applied
              </span>
            ) : (
              <span>Apply</span>
            )}
          </button>
        </div>
      </div>
    );
  };
  const renderBox = (title, elems, fns, actualObj, path) => {
    const params = { title, elems, fns, actualObj, path };
    const ico = fns.icon || LightBulb;
    return (
      elems &&
      Object.keys(elems).length > 0 && (
        <div className="border-box my-1">
          <div className="Box-header p-2 Box-title">
            <Octicon icon={ico} className="mr-1" /> {title}
          </div>
          {Object.keys(elems).map((key, i) =>
            renderStructureRow(key, i, params),
          )}
        </div>
      )
    );
  };
  const renderInfoBox = () =>
    info && (
      <div className="border-box my-1">
        <div className="Box-header p-2 Box-title">
          <Octicon icon={Megaphone} /> Information
        </div>
        <div className="Box-row flex-items-center p-0 v-align-middle">
          <div className="d-flex">
            <div className="flex-auto lh-condensed min-width-0 p-2 pr-3">
              <div>{info}</div>
            </div>
          </div>
        </div>
      </div>
    );
  // render
  return (
    <div style={{ height: 'inherit' }}>
      {renderBox(
        'Structure elems suggestions',
        structure.siblings,
        funcs.struct,
        parentObj,
        parentPath,
      )}
      {renderBox(
        'Structure subElems suggestions',
        structure.children,
        funcs.struct,
        subObj,
        actualPath,
      )}
      {renderBox(
        'Value suggestions',
        suggestions.value,
        funcs.value,
        parentObj,
        actualPath,
      )}
      {renderBox(
        'Array subElems suggestions',
        suggestions.array,
        funcs.arrayValue,
        parentObj,
        actualPath,
      )}
      {renderBox(
        'Object subElems suggestions',
        suggestions.obj,
        funcs.subObj,
        subObj,
        actualPath,
      )}
      {renderInfoBox()}
    </div>
  );
}

SwaggerToolbox.propTypes = {
  row: PropTypes.number,
  text: PropTypes.string,
  textProp: PropTypes.func,
  textFocusProp: PropTypes.func,
  rowProp: PropTypes.func,
};

const tryRender = args => {
  try {
    return SwaggerToolbox(args);
  } catch (e) {
    return (
      <p>
        Was not possible render Toolbox by an exception at processing info. Dont
        worry! Continue with your documentation.
        <span>{JSON.stringify(e)}</span>
      </p>
    );
  }
};

export default memo(tryRender);
