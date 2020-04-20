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
import Octicon, { Check, Repo, Megaphone } from '@primer/octicons-react';
import yaml from '../../utils/yaml';

function SwaggerToolbox({
  row,
  text,
  textProp = () => {},
  rowProp = () => {},
}) {
  const types = {
    obj: '{...}',
    array: '[...]',
    boolean: 'bool',
    string: 'str',
    value: 'val',
    type: 'type',
    format: 'fmt',
  };
  const structure = {
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
        'path/to/my/resource': {},
        'path/{param}/resource': {},
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
        'path param': { in: 'path' },
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
      'It is used when type = array, Specifies array elem structure',
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
      'Used for specify parameter structure',
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
  let suggestionsSiblings = {};
  let suggestionsChildren = {};
  let suggestions = {};
  let info = null;
  let actual = '';
  // Sanitize
  const { object, ex } = yaml.parse(text); // golang idiomatic where?
  const json = JSON.stringify(object);
  if (json.includes('null')) {
    return <div>Don&#8217;t use null in values nor texts</div>;
  }
  if (!ex && !json.includes('null')) {
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
        const info = structure[join];
        if (info) {
          key = join;
        } else {
          const previous = structure[key];
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
    // getting path
    const path = yaml.getPathFromPosition(text, row) || [];
    // debugger;
    const pathCopy = path.slice(0); // copy array
    // path = ['tags',1,'name']
    // pathCopy = ['tags',1,'name']
    //
    actual = pathCopy.pop();
    // debugger;
    const siblingsPath = inferStructureKey(pathCopy);
    const childrenPath = inferStructureKey(path);
    const arrayChildrenPath = `${childrenPath}.suggest`;
    const infoPath = `${childrenPath}.?info`;
    // actual = 'name'
    // pathCopy = ['tags',1]
    // siblingsPath = '$.tags.1'
    // console.log(path, actual, siblingsPath);
    //
    const siblings = map[siblingsPath] || [];
    const pos = siblings.indexOf(actual);
    suggestionsChildren = structure[childrenPath] || suggestionsChildren;
    suggestionsSiblings = structure[siblingsPath] || suggestionsSiblings;
    suggestions = structure[arrayChildrenPath] || suggestions;
    info = structure[infoPath];
    console.log(suggestionsChildren, suggestionsSiblings, arrayChildrenPath);
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
    //
    // Array move buttons enabling
    if (arrayControls) {
      array = getValue(object, arrayPath);
      // array = [{...},{...},{...}]
    }
    const impactObj = reOrderedObject => {
      // getting new yml (text)
      const newText = yaml.dump(reOrderedObject);
      textProp(newText);
      // getting new position
      const position = yaml.getPositionFromPath(newText, path);
      rowProp(position);
    };
  }
  const typeLabel = txt => (
    <label className="bg-gray border m-0 px-1 rounded-1 text-gray">{txt}</label>
  );
  const renderSymbol = key =>
    typeLabel(
      suggestionsSiblings[key]
        ? suggestionsSiblings[key]
        : suggestionsChildren[key],
    );
  const renderSuggestionBoxClass = key =>
    `Box-row flex-items-center p-0 v-align-middle${
      key === actual ? ' bg-yellow-1' : ''
    }`;
  const renderSuggestionBox = (key, i) => (
    <div className={renderSuggestionBoxClass(key)} key={i}>
      <div className="d-flex">
        <div className="flex-auto lh-condensed min-width-0 p-2 pr-3">
          <div>
            {renderSymbol(key)} {key}{' '}
          </div>
        </div>
        <div className="bg-gray border border-gray-dark d-flex flex-items-center m-1 mr-1 px-2 rounded-1 text-gray">
          <Octicon icon={Check} /> Applied
        </div>
      </div>
    </div>
  );
  const renderArraySuggestionBox = (key, i) => (
    <div className="Box-row flex-items-center p-0 v-align-middle" key={i}>
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
  const renderBox = (title, elems, func) =>
    elems &&
    Object.keys(elems).length > 0 && (
      <div className="border-box my-1">
        <div className="Box-header p-2 Box-title">
          <Octicon icon={Repo} /> {title}
        </div>
        {Object.keys(elems).map(func)}
      </div>
    );
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
        suggestionsSiblings,
        renderSuggestionBox,
      )}
      {renderBox(
        'Structure subElems suggestions',
        suggestionsChildren,
        renderSuggestionBox,
      )}
      {renderBox(
        'Value suggestions',
        suggestions.value,
        renderArraySuggestionBox,
      )}
      {renderBox(
        'Array subElems suggestions',
        suggestions.array,
        renderArraySuggestionBox,
      )}
      {renderBox(
        'Object subElems suggestions',
        suggestions.obj,
        renderArraySuggestionBox,
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
