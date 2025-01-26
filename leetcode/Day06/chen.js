const minCoins = function(prices) {
  const n  = prices.length
  prices.unshift(0)
  let dp=new Array(n).fill(0)
  dp[1]=prices[1]
  for(let i=2;i<=n;i++){
      // 买当前水果
      dp[i]=dp[i-1]+prices[i]
      //不买当前水果，从前面的水果免费获得
      const j = Math.ceil(i/2)
      for(let k=i-1;k>=j;k--){
          dp[i]=Math.min(dp[i],dp[k-1]+prices[k])     
      }
  }
  return dp[n]
};

//问答题
// relative: 相对定位，不脱离文档流，可利用 top / bottom /left/right改变原始位置
// fixed：固定定位，相对于浏览器视口进行定位，脱离了文档流，不随页面滚动而改变。常用于顶部导航栏等需要一直显示的元素。
// absolute：相对定位，脱离了文档流，相对于最近的一个非static定位的父元素进行定位
// static:静态定位，默认的定位方式，元素按照在文档流中的顺序进行排列，不可通过 top / bottom /left/right改变位置。

