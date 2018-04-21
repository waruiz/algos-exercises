const expect = require('chai').expect;

const nums = [100, 4, 12, 7, 109, 13, 1];

const peakFinder = (arr) => {
  let midI = Math.floor(arr.length / 2);

  if (arr.length === 1) {
    return arr[midI];
  }

  if (arr[midI] < arr[midI + 1]) {
    return peakFinder(arr.slice(0, midI).concat( arr.slice(midI + 1) ));
  } else if (arr[midI] < arr[midI - 1]) {
    return peakFinder(arr.slice(0, midI));
  } else {
    let newArr = arr.slice(0, midI - 1).concat( arr[midI] ).concat( arr.slice(midI + 2) );
    return peakFinder( newArr );
  }
};

// Testing
expect(peakFinder(nums)).to.be.a('number');
expect(peakFinder(nums)).to.equal(109);
