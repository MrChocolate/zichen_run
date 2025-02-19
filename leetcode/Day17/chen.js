// 三数之和为0 [2,-1,-1,3,-2]
function threeSum(nums) {
  nums.sort((a, b) => a - b)
  let left = 0
  let right = nums.length - 1
  let res
  let result = []
  if (nums[left] >= 0 && nums[right] !== 0 || nums[left]!==0 && nums[right]<=0) {
    return result
  }
  while (left < right) {
    res = nums[left] + nums[right]
    let copyNums = nums.slice(left + 1, right)
    const index = copyNums.indexOf(-res)
    if (index !== -1) {
      result.push([nums[left], nums[right], copyNums[index]])
    }
    if (res > 0) {
      let curRight = nums[right]
      right--
      while (nums[right] === curRight) {
        right--
      }
    } else {
      let curLeft = nums[left]
      left++
      while (nums[left] === curLeft) {
        left++
      }
    }

  }
  return result
}

// console.log(threeSum([-2,-8,8,-8,0,-8,10,16]))