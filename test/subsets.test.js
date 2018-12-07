/* global test, expect */

const { subsets } = require('../algorithm')

test('subsets calculates subsets of n', () => {
  expect(subsets(0)).toEqual([[]])
  expect(subsets(1)).toEqual([[], [1]])
  expect(subsets(2)).toEqual([[], [1], [2], [1, 2]])
})
