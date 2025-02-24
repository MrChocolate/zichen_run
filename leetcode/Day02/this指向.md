# 1、构造函数调用，this 指向的是 new 后的对象

```js
class Person {
  name: string
  constructor(name: string) {
    this.name = name
  }
  sayName() {
    console.log('my name is', this.name)
  }
}
const girl = new Person('xzc')
girl.sayName() // 'my name is xzc'
```

# 2、普通函数，谁调用指向谁

```js
function test() {
  console.log(this)
}
const obj = {
  fn: test
}
console.log(obj.fn())
```

# 3、箭头函数，编译时已决定 this 的指向，不会根据调用发生变化

```js
const arrowFn = () => {
  console.log(this)
}
const obj1 = {
  fn: arrowFn
}
console.log(obj1.fn()) // window
```

# apply、call、bind

1、apply 和 call 改变 this 指向,并执行函数
2、bind 只改变 this 指向
3、apply 可以携带数组参数，call 和 bind 独立的参数
TODO 改变 this 指向题目
