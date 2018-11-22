/* global test, expect */

const d = require('../dataStructure.js')

test('getTree gets the bst', () => {
  const bst = d.createBST()
  expect(bst).toBeDefined()
  expect(bst.getTree()).toEqual(null)
  expect(bst.insert(5).getTree()).toEqual({ 'left': null, 'right': null, 'val': 5 })
  expect(bst.insert(7).getTree()).toEqual({ 'left': null, 'right': { 'left': null, 'right': null, 'val': 7 }, 'val': 5 })
  expect(bst.insert(3).getTree()).toEqual({ 'left': { 'left': null, 'right': null, 'val': 3 }, 'right': { 'left': null, 'right': null, 'val': 7 }, 'val': 5 })
})

test('chained insertion works', () => {
  const bst = d.createBST()
  expect(bst
    .insert(5)
    .insert(7)
    .insert(3)
    .getTree()
  ).toEqual({ val: 5,
    left: { val: 3, left: null, right: null },
    right: { val: 7, left: null, right: null } })
})
