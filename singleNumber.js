// Find num not recurring twice in linear time

var singleNumber = function(nums) {
  let occurences = {};
  for (let i = 0; i < nums.length; i++) {
    occurences[ nums[i] ] = occurences[ nums[i] ] + 1 || 1;
  }
  for (let num in occurences) {
    if (occurences[ num ] !== 2) {
      return parseInt(num);
    }
  }
};