function findClosestNumber(nums: number[]): number {
  let temp:number = Infinity
  let res:number = nums[0]
  nums.forEach((item:number) => {
    if (Math.abs(item) - 0 < temp) {
      temp = Math.abs(item) - 0
      res = item
    } else if (Math.abs(item) - 0 === temp) {
      res = Math.max(res,item)
    }
  })
  return res
};

// JavaScript 中 this 是如何运作的？

// this的使用取决于调用方式：
// 1、构造函数调用，this指向的是new 后的对象
class Person {
  name:string
  constructor(name:string) {
    this.name = name
  }
  sayName() {
    console.log('my name is',this.name)
  }
}
const girl = new Person('xzc')
girl.sayName() // 'my name is xzc'

// 2、普通函数，谁调用指向谁
function test() {
  console.log(this)
}
const obj = {
  fn:test
}

console.log(obj.fn()) // obj

// 3、箭头函数，编译时已决定this的指向，不会根据调用发生变化
const arrowFn = () => {
  console.log(this)
}
const obj1 = {
  fn:arrowFn
}
console.log(obj1.fn()) // window

// 改变this指向的方法：
// apply、call、bind
// 1、apply和call 改变this指向,并执行函数
// 2、bind 只改变this指向
// 3、apply可以携带数组参数，call和bind独立的参数
// TODO 改变this指向题目