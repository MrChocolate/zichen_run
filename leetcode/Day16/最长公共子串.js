function LongestCommonSubstring(str1, str2) {
  const m = str1.length
  const n = str2.length

  let res = 0
  let index = 0
  let dp = new Array(n+1).fill(0).map(() => new Array(m+1).fill(0))
  for (let i = 1; i <= n; i++){
    for (let j = 1; j <= m; j++){
      if (str2[i-1] === str1[j-1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1
        if (dp[i][j] > res) {
          res = dp[i][j]
          index = j
        }
      }
    }
  }

  return str1.slice(index-res,index)
}

// console.log(LongestCommonSubstring('abcds','bcsaaaaaa'))



// on 与 addEventListener的区别
const button = document.getElementById('u-button');
button.onClick = function () {
  // ...函数体...
}
button.addEventListener('click', () => {
  // ...函数体...
}, true)

// 主要区别：
// 1、addEventListener第三个参数可以指定事件在捕获阶段（值为true）触发，
// 还是冒泡阶段（默认 / false）触发，而on只能在冒泡阶段触发

// 2、假设元素button通过on方式绑定多次同一类型的事件，那么只有最后一次生效（后面的赋值覆盖前面）
// 而addEventListener绑定多次同一类型事件，会依次执行，不会被覆盖。


