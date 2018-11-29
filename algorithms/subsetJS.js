const getAllSubsets = n =>
([...Array(n).keys()]
  .map(x => x + 1)
  .reduce(
    (subsets, value) => subsets.concat(subsets.map(set => [value, ...set])), [[]]
  )
)

// console.log([].keys())

console.log(getAllSubsets(24))
