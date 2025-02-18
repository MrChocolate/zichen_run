# 算法
爬楼梯问题
    问题内容：假设你正在爬楼梯，楼梯共有 n 阶，你每次只能爬1-2阶，请问爬到顶楼共有多少方案。

## 解决方案
```javascript
function climbStairs(n) {
    if (n <= 2) return n;
    let first = 1, second = 2;
    for (let i = 3; i <= n; i++) {
        let third = first + second;
        first = second;
        second = third;
    }
    return second;
}
```

# JS
绑定事件的方法On 与 addEventListener，有什么区别