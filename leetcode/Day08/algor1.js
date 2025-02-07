function findDuplicateNumber(nums) {
  let a = 1
  let b = nums.length -1
  while(a < b){
      let mid = Math.round((a + b)/2)
      let count = 0
      nums.forEach(item=>{
          if(item<=mid){
              count ++ 
          }     
      })
      if(count > mid){
          b = mid
      }else{
          a = mid
      }
  }
  return a
};