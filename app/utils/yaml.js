import yaml from 'js-yaml';
import {
  parseWithPointers,
  getJsonPathForPosition,
  getLocationForJsonPath,
} from '@stoplight/yaml';

export default {
  parse: t => {
    let object = {};
    let ex;
    try {
      object = yaml.safeLoad(t);
    } catch (e) {
      ex = e;
    }
    return { object, ex };
  },
  dump: obj => yaml.safeDump(obj, { lineWidth: 1000, noCompatMode: false }),
  getPathFromPosition: (text, pos) =>
    getJsonPathForPosition(parseWithPointers(text), {
      line: pos,
      character: 4,
    }),
  getPositionFromPath: (text, path) => {
    const position = getLocationForJsonPath(parseWithPointers(text), path);
    return position.range.start.line + 1;
  },
};
