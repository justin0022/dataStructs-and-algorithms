const quickSort = a => {
  const arr = [...a]
  if (arr.length === 0) return []
  const middle = arr.shift()
  const left = arr.filter(x => x < middle)
  const right = arr.filter(x => x >= middle)
  return [...quickSort(left), middle, ...quickSort(right)]
}

const mergeSort = a => {
  const arr = [...a]
  // todo

  return arr
}

const selectionSort = a => {
  const arr = [...a]
  // todo

  return arr
}

const bogoSort = a => {
  const arr = [...a]
  // todo

  return arr
}

const bubbleSort = a => {
  const arr = [...a]
  // todo

  return arr
}

module.exports = {
  quickSort,
  mergeSort,
  selectionSort,
  bogoSort,
  bubbleSort
}
