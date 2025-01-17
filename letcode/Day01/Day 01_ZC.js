// 1、算法
const minimumSubarrayLength = (nums, k) => {
  let result = Infinite
  for(let i=0;i<nums.length;i++){
      let item = nums[i]
      if(nums[i]>k)return 1
      for(j=i+1;j<nums.length;j++){
          item = item | nums[j]
          if(item > k){
              result = Math.min(result,j-i+1)
              break
          } 
      }
  }
  return result===Infinite ? -1 :result
}

// 2、事件委托
// 事件委托是将DOM中子节点的事件绑定在父节点上，利用浏览器事件向上冒泡的特性触发父节点事件，从而减少事件监听，提高性能和可维护性。
// 实现如下：假设有100个li 每个li都有一个click事件，那么则将click事件绑定在父节点ul身上

<html>
<ul id="parent">
    <li v-for="item in 100">{{item}}</li>
  </ul>
</html>

document.getElementById("parent").addEventListener('click', (e) => {
  if (e.target.tagName === 'LI') {
    console.log('li被点击，值为：',e.target.textContent)
  } 
})


