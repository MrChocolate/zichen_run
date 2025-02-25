// 问题：给定一个字符串，寻找出字符串中最长的回文串(回文串就是正序和逆序相同的字符串)
function longestHuiWenString(str) {
  const n = str.length
  let dp = new Array(n + 1).fill(0).map(() => new Array(n + 1).fill(0))
  let max = 0
  let index
  for (let i = 1; i <= n; i++){
    let count = 0
    for (let j = n; j > 0; j--){
      count++
      if (str[i - 1] === str[j - 1]) {
        dp[i][count] = dp[i - 1][count - 1] + 1
        if (dp[i][count] > max) {
          max = dp[i][count]
          index = i
       }
      }
    }
  }
  return str.slice(index-max,index)
}

console.log(longestHuiWenString('abcbea'))