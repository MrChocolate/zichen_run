const maxLongTime = (arr) => {
  let dp = new Array(arr.length + 2).fill(0)
  const n = arr.length
  // dp[n] 表示有n个预约时的最大值
  dp[0] = 0
  dp[1] = arr[0]
  for (let i = 2; i <= n; i++){
    dp[i] = Math.max(dp[i - 2] + arr[i - 1], dp[i - 1])
  }  
  return dp[n]
}

// 闭包
// 如果一个函数，访问了外层作用域，那么它就是一个闭包，如say函数
function sayHello() {
  const name = 'xzc'
  const say = () => {
    console.log(name)
  }
  return say
}

// 使用场景1:封装私有属性或方法
function counter() {
  let count = 0
  return {
    add: () => {
      return ++count
    },
    minus: () => {
      return --count
    }
  }
}

console.log(counter().add()) //1
console.log(counter().minus()) //-1

// 使用场景2：函数柯里化，见MyCurry.js