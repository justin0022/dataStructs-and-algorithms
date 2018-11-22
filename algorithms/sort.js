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

// Bogosort can be described as follows:

// 1. Check if your list of number is sorted. If so, stop. If not, go to step 2.
// 2. Rearrange the list of numbers randomly.
// 3. Go to step 1.

const bogoSort = a => {
  const arr = [...a]
  // todo

  return arr
}

// Bogobogosort specifies how one should check if the list of numbers is sorted. It does it recursively, because as anyone who knows anything at all about computer science knows, recursion is always good and cool. To check if the list is sorted, use the following procedure:

// Make a copy of the list of numbers.
// Sort the first n-1 elements of the copy using bogobogosort.
// Check to see if the nth element of the sorted copy is greater than the highest element of the first n-1 elements. If so, the copy is now sorted, else randomise the order of the elements of the copy and go to step 2.
// Check to see if the copy is in the same order as the original list.

const bogoBogoSort = a => {
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
  bogoBogoSort,
  bubbleSort
}
