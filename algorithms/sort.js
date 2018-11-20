const quickSort = a => {
  const arr = [...a]
  if (arr.length === 0) return []
  const middle = arr.shift()
  const left = arr.filter(x => x < middle)
  const right = arr.filter(x => x >= middle)
  return [...quickSort(left), middle, ...quickSort(right)]
}

const merge = (left, right) => {

}

const mergeSort = a => {
  const arr = [...a]

  if (arr.length === 1) return a

  const middle = Math.floor(arr.length / 2)
  const leftHalf = arr.slice(0, middle)
  const rightHalf = arr.slice(middle)
  // todo
  return merge(mergeSort(leftHalf), mergeSort(rightHalf))
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
