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
  '$.info': {
    description: types.string,
    version: types.string,
    title: types.string,
    contact: types.obj,
  },
  '$.info.contact': {
    email: types.string,
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
  '$.schemes.#': types.string,
  '$.paths': {
    $aPath: types.obj,
  },
  '$.paths.$aPath': {
    $aVerb: types.obj,
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
  '$.paths.$aPath.$aVerb.consumes.#': types.string,
  '$.paths.$aPath.$aVerb.produces.#': types.string,
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
  '$.paths.$aPath.$aVerb.parameters.#.items.enum.#': types.string,
  '$.paths.$aPath.$aVerb.parameters.#.schema': {
    $ref: types.string,
  },
  '$.paths.$aPath.$aVerb.responses': {
    $aRespCode: types.obj,
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
  '$.paths.$aPath.$aVerb.security.#': {
    $aSecurityDef: types.array,
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
