export default {
  $: null,
  '$.swagger': {
    value: {
      '2.0': '2.0',
    },
  },
  '$.info': null,
  '$.info.contact': null,
  '$.basePath': {
    value: {
      'v33.05-a1': 'v33.05-a1',
    },
  },
  '$.tags': {
    array: {
      aTag: {
        name: 'aTag',
      },
    },
  },
  '$.tags.#': null,
  '$.tags.#.externalDocs': null,
  '$.schemes': {
    array: {
      http: 'http',
      https: 'https',
    },
  },
  '$.schemes.#': null,
  '$.paths': {
    obj: {
      '/actualPath/to/my/resource': {},
      '/actualPath/{param}/resource': {},
    },
  },
  '$.paths.$aPath': {
    obj: {
      get: {},
      post: {},
      put: {},
      delete: {},
      options: {},
    },
  },
  '$.paths.$aPath.$aVerb': null,
  '$.paths.$aPath.$aVerb.tags': {
    array: {
      aTag: 'aTag',
    },
  },
  '$.paths.$aPath.$aVerb.tags.#': null,
  '$.paths.$aPath.$aVerb.consumes': {
    array: {
      'application/json': 'application/json',
      'application/xml': 'application/xml',
    },
  },
  '$.paths.$aPath.$aVerb.consumes.#': null,
  '$.paths.$aPath.$aVerb.produces': {
    array: {
      'application/json': 'application/json',
      'application/xml': 'application/xml',
    },
  },
  '$.paths.$aPath.$aVerb.produces.#': null,
  '$.paths.$aPath.$aVerb.parameters': {
    array: {
      'actualPath param': { in: 'actualPath' },
      'query param': { in: 'query' },
      'header param': { in: 'header' },
      'body param': { in: 'body', name: 'body' },
    },
  },
  '$.paths.$aPath.$aVerb.parameters.#': null,
  '$.paths.$aPath.$aVerb.parameters.#.items': null,
  '$.paths.$aPath.$aVerb.parameters.#.items.enum': {
    array: {
      Potato: 'Potato',
      Tomato: 'Tomato',
      Botato: 'Botato',
    },
  },
  '$.paths.$aPath.$aVerb.parameters.#.items.enum.#': null,
  '$.paths.$aPath.$aVerb.parameters.#.schema': null,
  '$.paths.$aPath.$aVerb.parameters.#.schema.$ref': {
    value: {
      '#/definitions/aModel': null,
    },
  },
  '$.paths.$aPath.$aVerb.responses': {
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
  '$.paths.$aPath.$aVerb.responses.$aRespCode': null,
  '$.paths.$aPath.$aVerb.responses.$aRespCode.schema': null,
  '$.paths.$aPath.$aVerb.responses.$aRespCode.headers': null,
  '$.paths.$aPath.$aVerb.responses.$aRespCode.headers.$aHeaderName': null,
  '$.paths.$aPath.$aVerb.security': {
    array: {
      aSecurityDef: [],
    },
  },
  '$.paths.$aPath.$aVerb.security.#': null,
  '$.paths.$aPath.$aVerb.security.#.$aSecurityDef': {
    array: {
      'write:aResource': '',
      'read:aResource': '',
    },
  },
  '$.paths.$aPath.$aVerb.security.#.$aSecurityDef.#': null,
  '$.securityDefinitions': null,
  '$.securityDefinitions.$aSecurityDef': null,
  '$.securityDefinitions.$aSecurityDef.scopes': {
    obj: {
      'write:aResource': 'Writes a resource',
      'read:aResource': 'Reads a resource',
    },
  },
  '$.securityDefinitions.api_key': null,
  '$.definitions': null,
  '$.definitions.$aDef': null,
  '$.definitions.$aDef.properties': null,
  '$.definitions.$aDef.properties.$aProp': null,
  '$.definitions.$aDef.xml': null,
  '$.externalDocs': null,
};
