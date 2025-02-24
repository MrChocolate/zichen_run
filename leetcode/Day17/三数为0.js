// 三数之和为0 
function threeSum(nums) {
  nums.sort((a, b) => a - b)
  const n = nums.length
  let res = []
  for(let i=0;i<n-2;i++){
      if(i > 0 && nums[i] === nums[i-1])continue
      let l = i+1
      let r = n-1
      let target = -nums[i]
      while(l < r){
      let sum = nums[l] + nums[r]
      if(sum === target){
          res.push([nums[l],nums[r],nums[i]])
          while(l < r && nums[l]===nums[l+1])l++
          while(l < r && nums[r] === nums[r-1])r--
          l++
          r--
      }else if(sum > target){
          r--
      }else{
          l++
      }
      }
  }
      return res
}

// console.log(threeSum([-2,-8,8,-8,0,-8,10,16]))

