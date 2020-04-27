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
import getValue from 'get-value';
import isNumber from 'is-number';
import Octicon, {
  Check,
  Repo,
  Megaphone,
  LightBulb,
} from '@primer/octicons-react';
import objectPath from 'object-path';
import yaml from '../../utils/yaml';
import arrays from '../../utils/arrays';

function SwaggerToolbox({
  row,
  text,
  textProp = () => {},
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
  const types = {
    obj: '{...}',
    array: '[...]',
    boolean: 'bool',
    string: 'str',
    value: 'val',
    type: 'type',
    format: 'fmt',
  };
  const model = {
    $: {
      swagger: types.string,
      info: types.obj,
      basePath: types.string,
      tags: types.array,
      schemes: types.array,
      paths: types.obj,
      securityDefinitions: types.obj,
      definitions: types.obj,
    },
    '$.swagger.suggest': {
      value: {
        '2.0': '2.0',
      },
    },
    '$.info': {
      description: types.string,
      version: types.string,
      title: types.string,
      contact: types.obj,
    },
    '$.info.contact': {
      email: types.string,
    },
    '$.basePath.suggest': {
      value: {
        'v33.05-a1': 'v33.05-a1',
      },
    },
    '$.tags.#': {
      name: types.string,
      description: types.string,
      externalDocs: types.obj,
    },
    '$.tags.#.externalDocs': {
      description: types.string,
      url: types.string,
    },
    '$.tags.suggest': {
      array: {
        aTag: {
          name: 'aTag',
        },
      },
    },
    '$.schemes.#': types.string,
    '$.schemes.suggest': {
      array: {
        http: 'http',
        https: 'https',
      },
    },
    '$.paths': {
      $aPath: types.obj,
    },
    '$.paths.suggest': {
      obj: {
        '/actualPath/to/my/resource': {},
        '/actualPath/{param}/resource': {},
      },
    },
    '$.paths.$aPath': {
      $aVerb: types.obj,
    },
    '$.paths.$aPath.suggest': {
      obj: {
        get: {},
        post: {},
        put: {},
        delete: {},
        options: {},
      },
    },
    '$.paths.$aPath.$aVerb': {
      tags: types.array,
      summary: types.string,
      description: types.string,
      operationId: types.string,
      consumes: types.array,
      produces: types.array,
      parameters: types.array,
      responses: types.obj,
      security: types.array,
    },
    '$.paths.$aPath.$aVerb.tags.#': types.string,
    '$.paths.$aPath.$aVerb.tags.suggest': {
      array: {
        aTag: 'aTag',
      },
    },
    '$.paths.$aPath.$aVerb.consumes.#': types.string,
    '$.paths.$aPath.$aVerb.consumes.suggest': {
      array: {
        'application/json': 'application/json',
        'application/xml': 'application/xml',
      },
    },
    '$.paths.$aPath.$aVerb.produces.#': types.string,
    '$.paths.$aPath.$aVerb.produces.suggest': {
      array: {
        'application/json': 'application/json',
        'application/xml': 'application/xml',
      },
    },
    '$.paths.$aPath.$aVerb.parameters.suggest': {
      array: {
        'actualPath param': { in: 'actualPath' },
        'query param': { in: 'query' },
        'header param': { in: 'header' },
        'body param': { in: 'body', name: 'body' },
      },
    },
    '$.paths.$aPath.$aVerb.parameters.#': {
      name: types.string,
      in: types.string,
      description: types.string,
      required: types.boolean,
      schema: types.obj,
      type: types.type,
      format: types.format,
      items: types.obj,
      collectionFormat: types.string,
    },
    '$.paths.$aPath.$aVerb.parameters.#.items': {
      type: types.type,
      enum: types.array,
      default: types.string,
    },
    '$.paths.$aPath.$aVerb.parameters.#.items.?info':
      'It is used when type = array, Specifies array elem model',
    '$.paths.$aPath.$aVerb.parameters.#.items.enum.#': types.string,
    '$.paths.$aPath.$aVerb.parameters.#.items.enum.suggest': {
      array: {
        Potato: 'Potato',
        Tomato: 'Tomato',
        Botato: 'Botato',
      },
    },
    '$.paths.$aPath.$aVerb.parameters.#.schema': {
      $ref: types.string,
    },
    '$.paths.$aPath.$aVerb.parameters.#.schema.?info':
      'Used for specify parameter model',
    '$.paths.$aPath.$aVerb.parameters.#.schema.$ref.suggest': {
      value: {
        '#/definitions/aModel': '',
      },
    },
    '$.paths.$aPath.$aVerb.parameters.#.schema.$ref.?info':
      'Useful if you want to refer a Model in place of specify it again. It is written $ref literally',
    '$.paths.$aPath.$aVerb.responses': {
      $aRespCode: types.obj,
    },
    '$.paths.$aPath.$aVerb.responses.suggest': {
      obj: {
        default: {
          description: 'successful operation',
        },
        '200': {
          description: 'successful operation',
        },
        '201': {
          description: 'Entity created',
        },
        '400': {
          description: 'Bad request',
        },
        '404': {
          description: 'Not found',
        },
        '405': {
          description: 'Validation exception',
        },
      },
    },
    '$.paths.$aPath.$aVerb.responses.$aRespCode': {
      description: types.string,
      schema: types.obj,
      headers: types.obj,
    },
    '$.paths.$aPath.$aVerb.responses.$aRespCode.schema': {
      $ref: types.string,
      type: types.type,
    },
    '$.paths.$aPath.$aVerb.responses.$aRespCode.headers': {
      $aHeaderName: types.obj,
    },
    '$.paths.$aPath.$aVerb.responses.$aRespCode.headers.$aHeaderName': {
      type: types.type,
      format: types.format,
      description: types.string,
    },
    '$.paths.$aPath.$aVerb.security.suggest': {
      array: {
        aSecurityDef: [],
      },
    },
    '$.paths.$aPath.$aVerb.security.#': {
      $aSecurityDef: types.array,
    },
    '$.paths.$aPath.$aVerb.security.#.$aSecurityDef.suggest': {
      array: {
        'write:aResource': '',
        'read:aResource': '',
      },
    },
    '$.paths.$aPath.$aVerb.security.#.$aSecurityDef.#': types.string,
    '$.securityDefinitions': {
      $aSecurityDef: types.obj,
      api_key: types.obj,
    },
    '$.securityDefinitions.$aSecurityDef': {
      type: types.string,
      authorizationUrl: types.string,
      flow: types.string,
      scopes: types.obj,
    },
    '$.securityDefinitions.$aSecurityDef.scopes': {
      aScope: types.string,
    },
    '$.securityDefinitions.$aSecurityDef.scopes.suggest': {
      obj: {
        'write:aResource': 'Writes a resource',
        'read:aResource': 'Reads a resource',
      },
    },
    '$.securityDefinitions.api_key': {
      type: types.string,
      name: types.string,
      in: types.string,
    },
    '$.definitions': {
      $aDef: types.obj,
    },
    '$.definitions.$aDef': {
      type: types.type,
      properties: types.obj,
      xml: types.obj,
    },
    '$.definitions.$aDef.properties': {
      $aProp: types.obj,
    },
    '$.definitions.$aDef.properties.$aProp': {
      type: types.type,
      format: types.format,
      default: types.value,
    },
    '$.definitions.$aDef.xml': {
      name: types.string,
    },
    '$.externalDocs': {
      description: types.string,
      url: types.string,
    },
  };
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
          const variableKey = wholeObject
            .keys(previous)
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
  const suggestionPath = `${childrenPath}.suggest`;
  const infoPath = `${childrenPath}.?info`;
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

  let info = model[infoPath];
  let suggestions = model[suggestionPath] || {};
  if (
    typeof structure.children === 'string' ||
    structure.children instanceof String
  ) {
    info = `type ${structure.children}`;
    structure.children = {};
    // If we are on a leaf, it is possible we are in an array and it has suggestions
    suggestions = model[`${siblingsPath}.suggest`] || suggestions;
  }

  console.log(structure.children, structure.siblings, suggestionPath);
  // siblings map['$.tags.1'] => ['name','description']
  // pos = 0
  //
  let array = [];
  const isActualAnArray = isNumber(actual);
  const arrayPos = isActualAnArray ? actual : parentPath.slice(-1).pop();
  const arrayPath = isActualAnArray ? parentPath : parentPath.slice(0, -1);
  const arrayControls = isNumber(arrayPos);
  // isActualAnArray = false
  // arrayPos = 1
  // arrayPath = ['tags']
  // arrayControls = true
  //
  //
  // Array move buttons enabling
  if (arrayControls) {
    array = getValue(wholeObject, arrayPath);
    // array = [{...},{...},{...}]
  }
  const impactObj = reOrderedObject => {
    // getting new yml (text)
    const newText = yaml.dump(reOrderedObject);
    textProp(newText);
    // getting new position
    const position = yaml.getPositionFromPath(newText, actualPath);
    rowProp(position);
  };
  const impactObjectS = (actualObj, actualObjPath, key, value) => {
    // setear el valor en el objeto (sub o parent)
    // tomar el objeto y setearlo por actualPath
    // notificar cambio
    actualObj[key] = value;
    if (actualObjPath.length > 0) {
      objectPath.set(wholeObject, actualObjPath, actualObj);
    }
    const newText = yaml.dump(wholeObject);
    textProp(newText);
  };
  const typeLabel = txt => (
    <label className="bg-gray border m-0 px-1 rounded-1 text-gray">{txt}</label>
  );
  const renderRowClass = key =>
    `Box-row flex-items-center p-0 v-align-middle${
      key === actual ? ' bg-yellow-1' : ''
    }`;
  const renderStructureRow = (key, i, params) => {
    const applied = params.actualObj[key];
    return (
      <div className={renderRowClass(key)} key={i}>
        <div className="d-flex">
          <div className="flex-auto lh-condensed min-width-0 p-2 pr-3">
            <div>
              {typeLabel(params.elems[key])} {key}{' '}
            </div>
          </div>
          <button
            type="button"
            disabled={false}
            className="bg-gray border border-gray-dark d-flex flex-items-center m-1 mr-1 px-2 rounded-1 text-gray"
            onClick={() => impactObjectS(params.actualObj, params.path, key, {})}
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
  const renderSuggestionRow = (key, i, params) => (
    <div className={renderRowClass(key)} key={i}>
      <div className="d-flex">
        <div className="flex-auto lh-condensed min-width-0 p-2 pr-3">
          <div>
            {typeLabel('suggest')} {key}{' '}
          </div>
        </div>
        <div className="bg-gray border border-gray-dark d-flex flex-items-center m-1 mr-1 px-2 rounded-1 text-gray">
          <Octicon icon={Check} /> Applied
        </div>
      </div>
    </div>
  );
  const renderBox = (title, elems, func, actualObj, path, ico = Repo) => {
    const params = { title, elems, func, actualObj, path, ico };
    return (
      elems &&
      Object.keys(elems).length > 0 && (
        <div className="border-box my-1">
          <div className="Box-header p-2 Box-title">
            <Octicon icon={ico} className="mr-1" /> {title}
          </div>
          {Object.keys(elems).map((key, i) => func(key, i, params))}
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
        renderStructureRow,
        parentObj,
        parentPath,
      )}
      {renderBox(
        'Structure subElems suggestions',
        structure.children,
        renderStructureRow,
        subObj,
        actualPath,
      )}
      {renderBox(
        'Value suggestions',
        suggestions.value,
        renderSuggestionRow,
        subObj,
        actualPath,
        LightBulb,
      )}
      {renderBox(
        'Array subElems suggestions',
        suggestions.array,
        renderSuggestionRow,
        subObj,
        actualPath,
        LightBulb,
      )}
      {renderBox(
        'Object subElems suggestions',
        suggestions.obj,
        renderSuggestionRow,
        subObj,
        actualPath,
        LightBulb,
      )}
      {renderInfoBox()}
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
