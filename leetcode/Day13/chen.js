function fn(shorter, longer, k) {
  const res = []
  for (let i = 0; i <= k; i++){
    const length = i * longer + (k - i) * shorter
    res.push(length)
  }
  return res
}
