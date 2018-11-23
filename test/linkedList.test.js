/* global test, expect */

const d = require('../dataStructure.js')

test('linkedList creation works', () => {
  const linkedList = d.createLinkedList()
  expect(linkedList).toBeDefined()
  expect(linkedList.insert(1).getLinkedList()).toEqual({ val: 1, next: null })

  const linkedList2 = d.createLinkedList()
  expect(linkedList2.insert(1).insert(1).getLinkedList()).toEqual({ val: 1, next: { val: 1, next: null } })

  const linkedList3 = d.createLinkedList()
  expect(linkedList3.insert(1).insert(2).getLinkedList()).toEqual({ val: 1, next: { val: 2, next: null } })
})

test('linkedList find works', () => {
  const linkedList = d.createLinkedList()
  expect(linkedList.insert(1).find(1)).toEqual({ val: 1, next: null })
  linkedList.insert(2)
  expect(linkedList.find(2)).toEqual({ val: 2, next: null })
  expect(linkedList.find(1)).toEqual({ val: 1, next: { val: 2, next: null } })
  linkedList.insert(1)
  expect(linkedList.find(1)).toEqual({ val: 1, next: { val: 2, next: { val: 1, next: null } } })
})

test('linkedList contains works', () => {

})

test('linkedList delete works', () => {

})