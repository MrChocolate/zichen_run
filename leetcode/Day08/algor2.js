function findOnlyOnceNumber(nums) {
  // 异或
  let a = nums[0]
  for (let i = 1; i < nums.length; i++){
    a = a ^ nums[i]
  }
  return a
}