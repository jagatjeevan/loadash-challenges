// @flow

const sliceArr = (arr: Array<mixed>, size: number): Array<mixed> => {
  let arrChunks = [];
  for(let i = 0; i < arr.length; i =i + size) {
    arrChunks.push(arr.slice(i, ((i * size) + size)));
  }
  return arrChunks;
}

const chunk = (arr: Array<mixed>, size: number): Array<mixed> => (arr.length <= size) ? arr : sliceArr(arr, size);

export default chunk;
