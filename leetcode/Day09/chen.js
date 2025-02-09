function moveZeroToEnd(nums) {
  let i = 0
  let zeroCount = 0
  while (i < nums.length) {
    if (nums[i] === 0) {
      nums.splice(i, 1)
      zeroCount++
    } else {
      i++
    }
  }
  for (let j = 0; j < zeroCount; j++){
    nums.push(0)
  }
  return nums
}


