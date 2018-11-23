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

test('find works', () => {
  const bst = d.createBST()

  expect(bst.find(0)).toEqual(null)

  expect(bst
    .insert(5)
    .find(5)
  ).toEqual({ 'left': null, 'right': null, 'val': 5 })

  expect(bst.find(6)).toEqual(null)

  expect(bst
    .insert(6)
    .find(5)
  ).toEqual({ 'left': null, 'right': { 'left': null, 'right': null, val: 6 }, 'val': 5 })
})

test('contains works', () => {
  const bst = d.createBST()

  expect(bst.contains(0)).toEqual(false)

  expect(bst
    .insert(5)
    .contains(5)
  ).toEqual(true)

  expect(bst.find(6)).toEqual(null)

  expect(bst
    .insert(6)
    .contains(5)
  ).toEqual(true)
})
