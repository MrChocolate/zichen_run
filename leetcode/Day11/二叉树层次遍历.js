function levelOrder(root){
  if(!root)return []
  let result = []
  let stack = [root]
  let arr = []
  let res = []
  while(stack.length>0){
      const currentNode = stack.shift()
      if(currentNode.left){
          arr.push(currentNode.left)
      }
      if(currentNode.right){
          arr.push(currentNode.right)
      }
      res.push(currentNode.val)
      if(stack.length ===0){
          result.push(res)
          stack = arr.slice()
          arr = []
          res = []
      }
  }
  return result
};


