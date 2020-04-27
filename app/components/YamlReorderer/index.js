/**
 *
 * YamlReorderer
 *
 */

import React, { memo, useState } from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
import './styles.css';
import '@primer/css/dist/buttons.css';
import orderedJson from 'json-order';
import getValue from 'get-value';
import setValue from 'set-value';
import isNumber from 'is-number';
import Octicon, {
  ArrowUp,
  ArrowDown,
  ListUnordered,
} from '@primer/octicons-react';
import yaml from '../../utils/yaml';
import arrays from '../../utils/arrays';

function YamlReorderer({ row, text, textProp = () => {}, rowProp = () => {} }) {
  const [helpText, setHelpText] = useState('Reorder tool');
  let [disableArrUp, disableArrDown] = [true, true];
  let [disableUp, disableDown] = [true, true];
  let onMove = () => {};
  let onArrayMove = () => {};
  //
  // parse yaml. Main input for calculus
  // Sanitize
  const { object, ex } = yaml.parse(text); // golang idiomatic where?
  const json = JSON.stringify(object) || '{}';
  if (json.includes('null')) {
    return <div>Don&#8217;t use null in values nor texts</div>;
  }
  if (!ex && !json.includes('null')) {
    // getting orderMap. Is a array-based meta-object of object
    const { map } = orderedJson.parse(json, '$', '.');
    // console.log(map);
    //
    // getting path
    const path = yaml.getPathFromPosition(text, row) || [];
    const pathCopy = path.slice(0); // copy array
    // path = ['tags',1,'name']
    // pathCopy = ['tags',1,'name']
    //
    const actual = pathCopy.pop();
    const mapPath = ['$'].concat(pathCopy).join('.');
    // actual = 'name'
    // pathCopy = ['tags',1]
    // mapPath = '$.tags.1'
    // console.log(path, actual, mapPath);
    //
    const siblings = map[mapPath] || [];
    const pos = siblings.indexOf(actual);
    // siblings map['$.tags.1'] => ['name','description']
    // pos = 0
    //
    let array = [];
    const isActualAnArray = isNumber(actual);
    const arrayPos = isActualAnArray ? actual : pathCopy.slice(-1).pop();
    const arrayPath = isActualAnArray ? pathCopy : pathCopy.slice(0, -1);
    const arrayControls = isNumber(arrayPos);
    // isActualAnArray = false
    // arrayPos = 1
    // arrayPath = ['tags']
    // arrayControls = true
    //
    // Move button enabling
    disableUp = pos === 0;
    disableDown = pos === siblings.length - 1;
    // disableUp = 0 === 0
    // disableDown = 0 === 2 - 1
    //
    // Array move buttons enabling
    if (arrayControls) {
      array = getValue(object, arrayPath);
      disableArrDown = arrayPos === array.length - 1;
      disableArrUp = arrayPos === 0;
      // array = [{...},{...},{...}]
      // disableArrDown = 1 === 3 - 1 => will enable
      // disableArrUp = 1 === 0 => will enable
    }
    const impactObj = reOrderedObject => {
      // getting new yml (text)
      const newText = yaml.dump(reOrderedObject);
      textProp(newText);
      // getting new position
      const position = yaml.getPositionFromPath(newText, path);
      rowProp(position);
    };
    onArrayMove = inc => {
      const altered = arrays.permute(array, arrayPos, inc);
      setValue(object, arrayPath.join('.'), altered);
      //
      // path ['tags',1,'name'] => ['tags',0,'name'] if inc = -1
      const offset = isActualAnArray ? 1 : 2;
      path[path.length - offset] += inc;
      impactObj(object);
    };
    onMove = inc => {
      map[mapPath] = arrays.permute(siblings, pos, inc);
      const reOrderedObject = orderedJson.order(object, map, '.');
      impactObj(reOrderedObject);
    };
  }
  // render
  return (
    <div
      className="row"
      onMouseOut={() => setHelpText('')}
      onBlur={() => setHelpText('')}
    >
      <div className="col-4 help">{helpText}</div>
      <div className="col-8 BtnGroup flex-shrink-0 d-none d-md-inline-block">
        <button
          className="btn btn-sm BtnGroup-item col-3"
          disabled={disableUp}
          onClick={() => onMove(-1)}
          onMouseOver={() => setHelpText('> Node up')}
          onFocus={() => setHelpText('> Node up')}
          type="button"
        >
          <Octicon icon={ArrowUp} />
        </button>
        <button
          className="btn btn-sm BtnGroup-item col-3"
          disabled={disableDown}
          onClick={() => onMove(1)}
          onMouseOver={() => setHelpText('> Node down')}
          onFocus={() => setHelpText('> Node down')}
          type="button"
        >
          <Octicon icon={ArrowDown} />
        </button>
        <button
          className="btn btn-sm BtnGroup-item col-3"
          disabled={disableArrUp}
          onClick={() => onArrayMove(-1)}
          onMouseOver={() => setHelpText('> Array up')}
          onFocus={() => setHelpText('> Array up')}
          type="button"
        >
          <Octicon icon={ListUnordered} />
          &nbsp;
          <Octicon icon={ArrowUp} />
        </button>
        <button
          className="btn btn-sm BtnGroup-item col-3"
          disabled={disableArrDown}
          onClick={() => onArrayMove(1)}
          onMouseOver={() => setHelpText('> Array down')}
          onFocus={() => setHelpText('> Array down')}
          type="button"
        >
          <Octicon icon={ListUnordered} />
          &nbsp;
          <Octicon icon={ArrowDown} />
        </button>
      </div>
    </div>
  );
}

YamlReorderer.propTypes = {
  row: PropTypes.number,
  text: PropTypes.string,
  textProp: PropTypes.func,
  rowProp: PropTypes.func,
};

export default memo(YamlReorderer);
