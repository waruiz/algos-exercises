const expect = require('chai').expect;

const nums = [7, 3, 4, 2, 8, 5];

const bubbleSort = (arr) => {
  let switched = true;
  while (switched) {
    switched = false;
    for (let i = 1; i < arr.length; i++) {
      let temp;
      arr[i] < arr[i - 1] ?
        ( temp = arr[i], arr[i] = arr[i - 1], arr[i - 1] = temp, switched = true )
        : null;
    }
  }
  return arr;
};

// Testing
expect(bubbleSort(nums)).to.be.an('array');
expect(bubbleSort(nums)).to.eql([2, 3, 4, 5, 7, 8]);

