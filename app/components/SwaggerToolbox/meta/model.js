import types from './types';

export default {
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
