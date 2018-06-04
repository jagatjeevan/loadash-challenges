// @flow

const concat = (...arr: Array<mixed>): Array<mixed> => {
  const resultArr = [];
  arr.forEach(elem => resultArr.push(elem));
  return resultArr;
};

export default concat;
