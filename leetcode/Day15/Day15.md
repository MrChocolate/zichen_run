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

函数声明 (Function Declaration) 是指通过 `function` 关键字声明的函数，例如：
```javascript
function foo() {
    // ...函数体...
}
```

函数表达式 (Function Expression) 是指将一个函数赋值给一个变量，例如：
```javascript
const foo = function() {
    // ...函数体...
};
```

主要区别：
1. 函数声明会在代码执行前被提升 (hoisting)，而函数表达式不会。
2. 函数声明在整个作用域内都可以访问，而函数表达式只有在赋值语句之后才能访问。