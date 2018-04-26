var rotate = function(nums, k) {
  for (let i = 0; i < k; i++) {
    let temp = nums[0];
    for (let j = 0; j < nums.length; j++) {
      let move = j;
      if (j + 1 >= nums.length) {
        move = j - nums.length;
      }
      let temp2 = temp;
      temp = nums[j + 1];
      nums[move + 1] = temp2;
    }
  }
};