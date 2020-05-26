const type = (symbol, defaultValue, description) => ({
  symbol,
  defaultValue,
  description,
  $isAType: true,
});
export default {
  obj: type('{...}', {}, ''),
  array: type('[...]', [], ''),
  boolean: type('bool', true, ''),
  string: type('str', '', "It's a String"),
  value: type('val', null, ''),
  type: type('type', 'It is a type', ''),
  format: type('fmt', 'aFormat', ''),
};
