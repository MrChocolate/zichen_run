function fn(shorter, longer, k) {
  const res = []
  if (k === 0) {
    return res
  }
  if (shorter === longer) {
    return [shorter * k]
  } 
  for (let i = 0; i <= k; i++){
    const length = i * longer + (k - i) * shorter
    res.push(length)
  }
  return res
}

// 事件冒泡
// 事件冒泡是dom事件（如click，moveover）的一种传播机制，
// 从当前触发的dom元素开始，一层一层的向父级元素传播事件，直至根元素。

// 使用场景：
// 多个子元素处理同一类型的事件时，将事件监听绑定在父元素上，利用事件冒泡，减少事件监听，提高性能。