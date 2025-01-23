const maxCoinsValue = (piles, k) => {
  // 转移方程，f(n)表示当前栈取n次 f(n) = f(k-n)+ sum(piles[n])
  let f = new Array(k+1).fill(0)
  for(let i=0;i<piles.length;i++){
      const currentItem = piles[i]
      for(let j=k;j>=0;j--){
          let sum = 0
          for(let m=0;m<=Math.min(j,currentItem.length);m++){
              if(m>0){
              sum += currentItem[m-1]
              }
              f[j]=Math.max(f[j-m]+sum,f[j])
          }
      }
  }
  return f[k]
}

function Person() { }
// var person = Person() 是调用Person普通函数，person等于Person函数返回的结果，
// var person = new Person() 则将Person作为构造函数，new一个Person的实例化对象赋值给person