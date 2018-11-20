/* global test, expect */

const u = require('../algorithm.js')

const sort = u().sort

test('quickSort sorts an array of numbers from smallest to largest', () => {
  expect(sort.quickSort([])).toEqual([])
  expect(sort.quickSort([1])).toEqual([1])
  expect(sort.quickSort([4, 1, 2])).toEqual([1, 2, 4])
  expect(sort.quickSort([4, 1, -5])).toEqual([-5, 1, 4])
})
