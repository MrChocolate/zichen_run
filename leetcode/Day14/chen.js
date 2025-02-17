function fn(nums, k) {
  let map = {}
  nums.forEach(item=>{
      if(!map[item]){
          map[item]=1
      }else{
          map[item]++
      }
      
  })
  let result = []
  const entries = Object.entries(map);
  entries.sort((a, b) => b[1] - a[1]);
  result = entries.slice(0,k).map(item=>Number(item[0]))
  return result
}
console.log(fn([1,1,1,2,2,3],2))

// 进阶不会

// 为什么说扩展JS内置对象不好？
// 1、破坏别人封装好的功能，代码可维护性降低
// 2、可能会导致代码冲突
// 3、破坏原型，可能使得所有使用该对象的代码出现问题

// 替代方式：
// 创建自定义类并继承内置对象的方式，不破坏js内置对象的前提下，来拓展功能
// class myArray extends Array {
//   sum() {
//     return this.reduce((pre,cur)=>pre+cur,0)
//   }
// }

// const arr = new myArray(1, 2, 3, 4)
// console.log(arr.sum()) // 10

