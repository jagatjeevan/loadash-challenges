//  @flow

const difference = (arr1: Array<mixed>, arr2: Array<mixed>): Array<mixed> => arr1.filter(item => !arr2.includes(item));

export default difference;
