/* global test, expect */

test('transpose a symmetric matrix', () => {
  expect([
    [1, 2],
    [2, 1]
  ]).toEqual([
    [1, 2],
    [2, 1]
  ])
})

test('can handle other matrices', () => {
  expect([
    [1, 2, 3],
    [4, 5, 6]
  ]).toEqual([
    [1, 2],
    [3, 4],
    [5, 6]
  ])
})
