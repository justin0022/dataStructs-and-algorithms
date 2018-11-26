// Heap(S, n)
//  10: IF n > 2 THEN
//  20:   Heap(S, n - 1)
//  30: FOR i := 1 TO n - 1
//  40:   IF n is even THEN
//  50:     swap S[i] and S[n]
//  60:   ELSE
//  70:     swap S[1] and S[n]
//  80:   process S
//  90:   IF n > 2 THEN
// 100:     Heap(S, n - 1)

const swap = (arr, i, j) => {
  const t = arr[i]
  arr[i] = arr[j]
  arr[j] = t
}

const permutation = arr => {
  let n = arr.length
  const result = []

  const generate = (n, arr) => {
    if (n === 1) result.push(arr)
    else {
      for (let i = 0; i < n; ++i) {
        generate(n - 1, arr)
        if (n % 2 === 0) {
          swap(arr, i, n - 1)
        } else swap(arr, 0, n - 1)
      }
    }
  }

  generate(n, arr)

  return result
}

module.exports = permutation
