export default {
  $: '',
  '$.swagger': '',
  '$.info': '',
  '$.info.contact': '',
  '$.tags.#': '',
  '$.tags.#.externalDocs': '',
  '$.schemes.#': '',
  '$.paths': '',
  '$.paths.$aPath': '',
  '$.paths.$aPath.$aVerb': '',
  '$.paths.$aPath.$aVerb.tags.#': '',
  '$.paths.$aPath.$aVerb.consumes.#': '',
  '$.paths.$aPath.$aVerb.produces.#': '',
  '$.paths.$aPath.$aVerb.parameters.#': '',
  '$.paths.$aPath.$aVerb.parameters.#.items':
    'It is used when type = array, Specifies array elem model',
  '$.paths.$aPath.$aVerb.parameters.#.items.enum.#': '',
  '$.paths.$aPath.$aVerb.parameters.#.schema':
    'Used for specify parameter model',
  '$.paths.$aPath.$aVerb.parameters.#.schema.$ref':
    'Useful if you want to refer a Model in place of specify it again. It is written $ref literally',
  '$.paths.$aPath.$aVerb.responses': '',
  '$.paths.$aPath.$aVerb.responses.$aRespCode': '',
  '$.paths.$aPath.$aVerb.responses.$aRespCode.schema': '',
  '$.paths.$aPath.$aVerb.responses.$aRespCode.headers': '',
  '$.paths.$aPath.$aVerb.responses.$aRespCode.headers.$aHeaderName': '',
  '$.paths.$aPath.$aVerb.security.#': '',
  '$.paths.$aPath.$aVerb.security.#.$aSecurityDef.#': '',
  '$.securityDefinitions': '',
  '$.securityDefinitions.$aSecurityDef': '',
  '$.securityDefinitions.$aSecurityDef.type':
    'Required. The type of the security scheme. Valid values are "basic", "apiKey" or "oauth2".',
  '$.securityDefinitions.$aSecurityDef.description':
    'A short description for security scheme.',
  '$.securityDefinitions.$aSecurityDef.name':
    '[only apiKey type] Required. The name of the header or query parameter to be used.',
  '$.securityDefinitions.$aSecurityDef.in':
    '[only apiKey type] Required The location of the API key. Valid values are "query" or "header".',
  '$.securityDefinitions.$aSecurityDef.flow':
    '[only oauth2 type] Required. The flow used by the OAuth2 security scheme. Valid values are "implicit", "password", "application" or "accessCode".',
  '$.securityDefinitions.$aSecurityDef.authorizationUrl':
    '[only oauth2 type ("implicit", "accessCode")] Required. The authorization URL to be used for this flow. This SHOULD be in the form of a URL.',
  '$.securityDefinitions.$aSecurityDef.tokenUrl':
    '[only oauth2 type ("password", "application", "accessCode")] Required. The token URL to be used for this flow. This SHOULD be in the form of a URL.',
  '$.securityDefinitions.$aSecurityDef.scopes':
    '[only oauth2 type] Required. The available scopes for the OAuth2 security scheme.',
  '$.securityDefinitions.api_key': '',
  '$.definitions': '',
  '$.definitions.$aDef': '',
  '$.definitions.$aDef.properties': '',
  '$.definitions.$aDef.properties.$aProp': '',
  '$.definitions.$aDef.xml': '',
  '$.externalDocs': '',
};
