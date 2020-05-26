export default {
  permute: (array1, from, to) => {
    // performing swap
    const array = array1;
    [array[from], array[from + to]] = [array[from + to], array[from]];
    return array;
  },
  toObj: arr => {
    const obj = {};
    arr.forEach(k => {
      obj[k] = k;
    });
    return obj;
  },
};
