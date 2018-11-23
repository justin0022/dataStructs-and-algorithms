/* global test, expect */

const d = require('../dataStructure.js')

test('getLinkedList returns linkedlist', () => {
  const linkedList = d.createLinkedList()
  expect(linkedList).toBeDefined()
  expect(linkedList.insert(1)).toEqual({ val: 1, next: null })
})
