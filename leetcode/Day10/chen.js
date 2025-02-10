function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}

const isHuiWenList = (head) => {
  let arr = []
  while(head){
      arr.push(head.val)
      head = head.next
  }
  if(arr.length > 0){
      let right = arr.length - 1
      let left = 0
      while(left < right){
          if(arr[left] !== arr[right]){
              return false
          }
          left++
          right--
      }
      return true
  }
}

// 作用域：
// 作用域是指函数和变量可以访问的范围。主要分为全局作用域、函数作用域、和块级作用域。
// 1、全局作用域定义的变量和方法可以在代码的任何地方访问
// 2、函数作用域是指函数内部声明的变量和函数只能在该函数内部访问，外部无法直接访问。
// 3、块级作用域是指由 {} 包裹的代码块，在块级作用域中声明的变量只能在该块内部访问。

// 作用域链
// 作用域链是指多个作用域组成的链表，当查找某个变量时，先在自己的作用域中查找，
// 若未找到则向上查找父级作用域，直至找到该变量，或者达到全局作用域。
