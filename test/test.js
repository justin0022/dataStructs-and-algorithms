const u = require('../')

const sort = u().sort

test('quickSort sorts an array of numbers from smallest to largest', () => {
  expect(sort.quickSort([4,1,2])).toEqual([1,2,4])
}) 