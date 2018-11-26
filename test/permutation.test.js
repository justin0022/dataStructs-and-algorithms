/* global test, expect */

const { permutation } = require('../algorithm')

test('permuation', () => {
  expect(permutation).toBeDefined()

  let perm = permutation([1])
  expect(perm).toEqual([1])

  perm = permutation([1, 2])
  expect(perm).toEqual([1, 2], [2, 1])

  perm = permutation([1, 2, 3])
  expect(perm).toEqual(
    [1, 2, 3], [1, 3, 2],
    [2, 1, 3], [2, 3, 1],
    [3, 1, 2], [3, 2, 1]
  )
})
