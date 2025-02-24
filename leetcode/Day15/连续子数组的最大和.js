function maxSubArraySum(nums) {
  let dp=new Array(nums.length).fill(0)
  dp[0]=nums[0]
  let res = dp[0]
  for(let i=1;i<nums.length;i++){
      dp[i]=Math.max(dp[i-1]+nums[i],nums[i])
      res = Math.max(res,dp[i])
  }
  return res
}

// 函数声明与函数表达式有什么区别?
// 函数声明：function+函数名，存在函数提升

cute() //he is a cute boy 
function cute() {
  console.log('he is a cute boy')
}

// 函数表达式:可以是匿名函数,也可是命名函数
// 由于const/let声明的变量存在暂时性死区，因此在函数表达式前访问会报错

cuteBoy() // Cannot access 'cuteBoy' before initialization
const cuteBoy = () => {
  console.log('he is a cute boy')
}
