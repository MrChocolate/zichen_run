
const maxCoinValue = (piles, k)=> {
  let n = piles.length;
  // dp[i][j]含义：前i个栈，取j次的最大值
  let dp = new Array(n + 1).fill(0).map(() => new Array(k + 1).fill(0));
  
  for (let i = 1; i <= n; i++) {
      // 计算当前栈的前缀和
      let currentPileSum = piles[i-1].reduce((acc,cur,index)=>{
          acc.push(acc[index]+cur)
          return acc
      },[0])
      for (let j = 1;  j <= k; j++) {
          for (let m = 0; m <= Math.min(j, piles[i - 1].length); m++) {
              // 选或不选当前栈
              dp[i][j] = Math.max(dp[i][j], dp[i-1][j - m] + currentPileSum[m]);
          }
      }
  }
  return dp[n][k];
}


function Person() { }

// var person = Person() 是调用Person普通函数，person等于Person函数返回的结果，
// var person = new Person() 则将Person作为构造函数，new一个Person的实例化对象赋值给person