/* global test, expect */

const d = require('../dataStructure.js')

test('getLinkedList returns linkedlist', () => {
  const linkedList = d.createLinkedList()
  expect(linkedList).toBeDefined()
  expect(linkedList.insert(1).getLinkedList()).toEqual({ val: 1, next: null })

  const linkedList2 = d.createLinkedList()
  expect(linkedList2.insert(1).insert(1).getLinkedList()).toEqual({ val: 1, next: { val: 1, next: null } })

  const linkedList3 = d.createLinkedList()
  expect(linkedList3.insert(1).insert(2).getLinkedList()).toEqual({ val: 1, next: { val: 2, next: null } })
})
