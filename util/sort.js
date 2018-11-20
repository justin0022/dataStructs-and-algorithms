const quickSort = a => {
  let arr = [...a]
  if (arr.length === 0) return []
  const middle = arr.shift()
  const left = arr.filter(x => x < middle)
  const right = arr.filter(x => x >= middle)
  return [...quickSort(left), middle, ...quickSort(right)]
}

module.exports = {
  quickSort
}