function merge(intervals) {
  let result = []
  for(let item of intervals){
      let val0 = item[0]
      let val1 = item[1]
      let flag = false
      for(let res of result){
          if(val0 <= res[1] && val0 >= res[0]){
              res[1] = Math.max(val1,res[1])
              flag = true
              break
          }
          if(res[0] <=val1 && res[0]>=val0){
              res[0]=val0
              res[1] = Math.max(val1,res[1])
              flag = true
              break
          }
      }
      if(!flag){
          result.push(item)
      }
  }
  return result
};
// console.log(merge([[1,5],[2,3],[-2,1]]))


// 链式
// 链式调用，指同一个对象依次调用多个方法
// 链式调用的要求方法返回对象本身 （this）。
// 当一个对象的方法执行完毕后，返回该对象自身，从而在返回的对象上继续调用其他方法，形成一个连续的方法调用链。
// 如promise链式调用
promise1.then(()=>promise2).then(()=>promise3).then(()=>promise4).catch().finall()