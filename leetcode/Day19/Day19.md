# 算法
覆盖 K 个数组元素的最小范围
  * 问题：给定 K 个数组，都是排好序的，让求一个最小的范围，使得这个范围内至少会包括每个数组中的一个数字

## 解决方案
```javascript
function smallestRange(nums) {
    let minRange = [-Infinity, Infinity];
    let max = -Infinity;
    const pointers = new Array(nums.length).fill(0);

    while (true) {
        let minIndex = -1;
        let minValue = Infinity;

        for (let i = 0; i < nums.length; i++) {
            if (pointers[i] < nums[i].length && nums[i][pointers[i]] < minValue) {
                minValue = nums[i][pointers[i]];
                minIndex = i;
            }
        }

        if (minIndex === -1) break;

        pointers[minIndex]++;
        max = Math.max(max, minValue);

        if (max - minValue < minRange[1] - minRange[0]) {
            minRange = [minValue, max];
        }

        if (pointers[minIndex] === nums[minIndex].length) break;
    }

    return minRange;
}
```

# JS
对于长轮询，websockets 和 SSE（Server-Sent Events） 三者有什么区别？