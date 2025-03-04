// 3.最长无重复的子串
// 30.串联所有单词
// 209.长度最小的子数组

// 209.长度最小的子数组
function fn(nums, target) {
  const n = nums.length
  let left = 0
  let right = 0
  let res = nums[0]
  let minLength = Infinity
  while (left <= right & right < n) {
    if (res < target) {
      right++
      res+=nums[right]
    } else {
      minLength = Math.min(minLength, right - left + 1)
      res -= nums[left]
      left++
    }
  }
  return minLength
}

// 3.最长无重复的子串 abcabbc===>3
function fn2(str) {
  let temp = []
  let maxLength = 0
  for (let i = 0; i < str.length; i++){
    while (temp.includes(str[i])) {
      temp.shift()
    }
    temp.push(str[i])
    maxLength = Math.max(maxLength,temp.length)
  }
  return maxLength
}