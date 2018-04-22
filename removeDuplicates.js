var removeDuplicates = function(nums) {
  let lastOrderedI = 0;
  let switched = 1;
  
  for (let i = 1; i < nums.length; i++) {
    if ( nums[lastOrderedI] !== nums[i] ) {
      let temp = nums[i];
      nums[i] = nums[lastOrderedI + 1];
      nums[lastOrderedI + 1] = temp;
      lastOrderedI++;
      switched++;
    }
  }
  
  return switched;
};
