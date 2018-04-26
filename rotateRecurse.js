var rotate = function(nums, k, place = 0) {
  let temp = nums[place];
  
  if (place < nums.length - 1) {
    nums = rotate(nums, k, place + 1);
  }
  
  if (place + k >= nums.length) {
    place = place - nums.length;
  }
  nums[place + k] = temp;
  
  if (place !== 0) {
    return nums;
  }
};