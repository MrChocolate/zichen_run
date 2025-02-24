// 快速判断一个数是否是2的幂次方?
function fn(num){
  return !(num & num -1)
}
console.log(fn(3))