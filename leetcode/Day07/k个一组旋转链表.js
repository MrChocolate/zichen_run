function ListNode(val, next) {
   this.val = (val===undefined ? 0 : val)
   this.next = (next===undefined ? null : next)
}

const myReverse = (head, tail) =>{
  let pre = tail.next
  let cur = head
  while (pre !== tail) {
    let next = cur.next
    cur.next = pre
    pre = cur
    cur = next
  }
  return [tail,head]
}

const reverseByGroup = (head, k) => {
  const virtualNode = new ListNode(0)
  virtualNode.next = head
  let pre = virtualNode
  while (cur) {
    let tail = pre
    for (let i = 0; i < k; i++){
      tail = tail.next
      if (!tail) {
        return virtualNode.next
      }
    }
    let next = tail.next
    const [newHead, newTail] = myReverse(cur, tail)
    pre.next = newHead
    newTail.next = next
    pre = newTail
    cur = next
  }
}