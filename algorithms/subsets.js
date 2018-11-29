// n = 0 => {}
// n = 1 => {}, {1}
// n = 2 => {}, {1}, {2}, {1, 2}
// n = 3 => {}, {1}, {2}, {1, 2}, {3}, {1, 3}, {2, 3}, {1, 2, 3}
// n = 4 => {}, {1}, {2}, {1, 2}, {3}, {1, 3}, {2, 3}, {1, 2, 3}, {4}, {1, 4}, {2, 4}, {3, 4}, {1, 2, 4}, {1, 3, 4}, {2, 3, 4}, {1, 2, 3, 4}

const generateMiddle = arr => {

}

const helper = n => {
  let filledArray = [...Array(n).keys()].map(x => x + 1)
  let res = []
  res.push(filledArray.slice(-1))
  generateMiddle(filledArray)
  res.push(filledArray)
  return res
}

const subsets = n => {
  if (n === 0) return []
  if (n === 1) return [subsets(0), [1]]
  if (n === 2) return [...subsets(1), ...helper(2)]
  if (n === 3) return [...subsets(2), ...helper(3)]
  if (n === 4) return [...subsets(3), [4], [1, 4], [2, 4], [3, 4], [1, 2, 4], [1, 3, 4], [2, 3, 4], [1, 2, 3, 4]]
}

console.log(helper(3))

// [1, 2, 3] => [ 1, 3 ], [ 2, 3 ]
// [1, 2, 3, 4] => [1, 4], [2, 4], [3, 4], [1, 2, 4], [1, 3, 4], [2, 3, 4]
