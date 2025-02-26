// * 问题：给定一个含有 n 个正整数的数组和一个正整数 s ，
// 找出该数组中满足其和 ≥ s 的长度最小的连续子数组，并返回其长度。
// 如果不存在符合条件的连续子数组，返回 0。

function shortestSubString(nums, s) {
  let minLength = Infinity
  for (let i = 0; i < nums.length; i++){
    let res = 0
    for (let j = i; j < nums.length; j++){
      res += nums[j]
      if (res >= s) {
        minLength = Math.min(minLength,j-i+1)
        break
      }
    }
  }
  return minLength === Infinity ? 0:minLength
}
// 滑动窗口
function shortestSubString(nums, s) {
  let minLength = Infinity
  let left = 0
  let right = 0
  let result = 0
  while (right < nums.length) {
    result += nums[right]
    while (result >= s && left <= right) {
      minLength = Math.min(minLength, right - left + 1)
      result -= nums[left]
      left++
    }
    right++
  }
  return minLength === Infinity ? 0 : minLength
  
}
console.log(shortestSubString([3,4,1,5,4,8,2],20))