// @flow

const unique = (arr: Array<any>) => {
    let tempArray = [];
    arr.filter(elem => {
        if(tempArray.indexOf(elem) < 0) {
            tempArray.push(elem);
        }
    });
    return tempArray;
};

export default unique;