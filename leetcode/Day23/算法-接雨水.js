// TODO
// 算法1：接雨水
// 算法2: 盛最多水的容器


// 算法1：接雨水
function trap(height) {
  const n = height.length
  let leftMaxHeight = []
  let rightMaxHeight = []
  leftMaxHeight[0] = height[0]
  rightMaxHeight[n - 1] = height[n - 1]
  for (let i = 1; i < n; i++){
    leftMaxHeight[i] = Math.max(leftMaxHeight[i - 1], height[i])
    rightMaxHeight[n-i-1] = Math.max(rightMaxHeight[n-i],height[n-i-1])
  }
  let res = 0
  for (let i = 1; i < n - 1; i++){
    let value = Math.min(leftMaxHeight[i], rightMaxHeight[i]) - height[i]
    res+=value
  }
  return res
}


// 算法2: 盛最多水的容器
function maxArea(height) {
  const n = height.length
  let left = 0
  let right = n - 1
  let max = 0
  while (left < right) {
    max = Math.max(max, Math.min(height[left], height[right]) * (right - left))
    if (height[left] >= height[right]) {
      right -- 
    } else {
      left++
    }
  }
  return max
}
