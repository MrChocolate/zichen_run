# 1. 原型链继承

原型链继承是 JavaScript 中最基本的继承方式，它利用了原型对象的特性，通过将子类的原型指向父类的实例来实现继承。

```javascript
// 父类构造函数
function Parent() {
  this.name = 'Parent'
  this.colors = ['red', 'blue', 'green']
}

// 父类原型方法
Parent.prototype.sayName = function () {
  console.log(this.name)
}

// 子类构造函数
function Child() {
  this.childName = 'Child'
}

// 子类继承父类
Child.prototype = new Parent()

// 创建子类实例
const child = new Child()
child.sayName() // 输出: Parent
console.log(child.colors) // 输出: ['red', 'blue', 'green']
```

优点：实现简单，能让子类实例访问父类原型上的方法和属性。
缺点：多个子类实例会共享父类实例的引用类型属性，修改一个子类实例的引用类型属性会影响其他子类实例。

# 2. 构造函数继承

构造函数继承是在子类构造函数中调用父类构造函数，通过 call 或 apply 方法改变 this 的指向，将父类的属性和方法复制到子类实例中。

```javascript
// 父类构造函数
function Parent() {
  this.name = 'Parent'
  this.colors = ['red', 'blue', 'green']
}

// 子类构造函数
function Child() {
  Parent.call(this)
  this.childName = 'Child'
}

// 创建子类实例
const child = new Child()
console.log(child.name) // 输出: Parent
console.log(child.colors) // 输出: ['red', 'blue', 'green']
```

优点：每个子类实例都有自己独立的父类属性副本，不会相互影响。
缺点：只能继承父类构造函数中的属性和方法，无法继承父类原型上的属性和方法。

# 3. 组合继承

组合继承结合了原型链继承和构造函数继承的优点，既可以继承父类构造函数中的属性和方法，又可以继承父类原型上的属性和方法。

```javascript
// 父类构造函数
function Parent() {
  this.name = 'Parent'
  this.colors = ['red', 'blue', 'green']
}

// 父类原型方法
Parent.prototype.sayName = function () {
  console.log(this.name)
}

// 子类构造函数
function Child() {
  Parent.call(this)
  this.childName = 'Child'
}

// 子类继承父类原型
Child.prototype = new Parent()
Child.prototype.constructor = Child

// 创建子类实例
const child = new Child()
child.sayName() // 输出: Parent
console.log(child.colors) // 输出: ['red', 'blue', 'green']
```

优点：综合了原型链继承和构造函数继承的优点，既可以继承父类构造函数中的属性和方法，又可以继承父类原型上的属性和方法。
缺点：会调用两次父类构造函数，一次是在子类构造函数中调用 Parent.call(this)，另一次是在 Child.prototype = new Parent() 时调用。

# 4. 寄生组合继承

寄生组合继承是对组合继承的优化，它避免了组合继承中调用两次父类构造函数的问题，通过直接复制父类原型的副本到子类原型上实现继承。

```javascript
// 父类构造函数
function Parent() {
  this.name = 'Parent'
  this.colors = ['red', 'blue', 'green']
}

// 父类原型方法
Parent.prototype.sayName = function () {
  console.log(this.name)
}

// 子类构造函数
function Child() {
  Parent.call(this)
  this.childName = 'Child'
}

// 寄生组合继承核心函数
function inheritPrototype(subType, superType) {
  const prototype = Object.create(superType.prototype)
  prototype.constructor = subType
  subType.prototype = prototype
}

// 实现继承
inheritPrototype(Child, Parent)

// 创建子类实例
const child = new Child()
child.sayName() // 输出: Parent
console.log(child.colors) // 输出: ['red', 'blue', 'green']
```

优点：避免了组合继承中调用两次父类构造函数的问题，是一种比较理想的继承方式。
缺点：实现相对复杂一些。

# 5. 类继承（ES6 语法）

ES6 引入了 class 关键字和 extends 关键字，提供了更简洁、更符合面向对象编程风格的继承方式。

```javascript
// 父类
class Parent {
  constructor() {
    this.name = 'Parent'
    this.colors = ['red', 'blue', 'green']
  }

  sayName() {
    console.log(this.name)
  }
}

// 子类
class Child extends Parent {
  constructor() {
    super()
    this.childName = 'Child'
  }
}

// 创建子类实例
const child = new Child()
child.sayName() // 输出: Parent
console.log(child.colors) // 输出: ['red', 'blue', 'green']
```

优点：语法简洁，符合面向对象编程的习惯，易于理解和维护。
缺点：需要支持 ES6 语法的环境。
