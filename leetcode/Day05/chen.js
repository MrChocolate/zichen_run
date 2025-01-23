const validSymbol = (s) => {
  const symbolMap = {
    '[': ']',
    '{': '}',
    '(':')'
  }
  const rightSymbolStack = []
  for (let item of s) {
    if (symbolMap[item]) {
      rightSymbolStack.push(symbolMap[item])
    } else if(item!== rightSymbolStack.pop()){
       return false
    }
  }
  return rightSymbolStack.length === 0
}

