// 闭包是实现函数柯里化的基础
// 函数柯里化:将接受多个参数的函数，转换成接受一个单一参数（最初函数的第一个参数）的函数
// 函数柯里化目的：减少重复的入参,实现参数复用

// 实现：
// add(1)(2)(3) = 6
// add(1,2)(3) = 6
function curry(func) {
  return function curried(...args) {
      if (args.length >= func.length) {
          return func(...args);
      } else {
          return function(...newArgs) {
              return curried(...args,...newArgs);
          };
      }
  };
}

function originalAdd(a, b, c) {
  return a + b + c;
}

const curriedAdd = curry(originalAdd);
// 调用方式
const result1 = curriedAdd(1)(2)(3);
const result2 = curriedAdd(1, 2)(3);
const result3 = curriedAdd(1)(2, 3);
const result4 = curriedAdd(1, 2, 3);
console.log(result1); // 6
console.log(result2); // 6
console.log(result3); // 6
console.log(result4); // 6