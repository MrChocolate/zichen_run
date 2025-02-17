# 算法
最大子数组 (动态规划)
* 问题内容：给定一个数组，求数组中连续子数组的最大和，并返回这个值。

## 解决方案
```javascript
function maxSubArray(nums) {
    let maxSum = nums[0];
    let currentSum = nums[0];

    for (let i = 1; i < nums.length; i++) {
        currentSum = Math.max(nums[i], currentSum + nums[i]);
        maxSum = Math.max(maxSum, currentSum);
    }

    return maxSum;
}
```

# JS
函数声明与函数表达式有什么区别