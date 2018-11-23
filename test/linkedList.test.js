/* global test, expect */

const d = require('../dataStructure.js')

test('linkedList insertFront works', () => {
  const linkedList = d.createLinkedList()
  expect(linkedList).toBeDefined()
  expect(linkedList.insertFront(1).getLinkedList()).toEqual({ val: 1, next: null })

  const linkedList2 = d.createLinkedList()
  expect(linkedList2.insertFront(1).insertFront(1).getLinkedList()).toEqual({ val: 1, next: { val: 1, next: null } })

  const linkedList3 = d.createLinkedList()
  expect(linkedList3.insertFront(1).insertFront(2).getLinkedList()).toEqual({ val: 2, next: { val: 1, next: null } })
})

test('linkedList insertEnd works', () => {
  const linkedList = d.createLinkedList()
  expect(linkedList).toBeDefined()
  expect(linkedList.insertEnd(1).getLinkedList()).toEqual({ val: 1, next: null })

  const linkedList2 = d.createLinkedList()
  expect(linkedList2.insertEnd(1).insertEnd(1).getLinkedList()).toEqual({ val: 1, next: { val: 1, next: null } })

  const linkedList3 = d.createLinkedList()
  expect(linkedList3.insertEnd(1).insertEnd(2).getLinkedList()).toEqual({ val: 1, next: { val: 2, next: null } })
})

test('linkedList find works', () => {
  const linkedList = d.createLinkedList()
  expect(linkedList.insertEnd(1).find(1)).toEqual({ val: 1, next: null })
  linkedList.insertEnd(2)
  expect(linkedList.find(2)).toEqual({ val: 2, next: null })
  expect(linkedList.find(1)).toEqual({ val: 1, next: { val: 2, next: null } })
  linkedList.insertEnd(1)
  expect(linkedList.find(1)).toEqual({ val: 1, next: { val: 2, next: { val: 1, next: null } } })
  expect(linkedList.insertEnd('hello').insertEnd(1).find('hello')).toEqual({ val: 'hello', next: { val: 1, next: null } })
})

test('linkedList contains works', () => {
  const linkedList = d.createLinkedList()
  expect(linkedList.contains(5)).toEqual(false)

  expect(linkedList.insertEnd(1).contains(1)).toEqual(true)
  expect(linkedList.insertEnd(1).insertEnd(2).contains(1)).toEqual(true)
  expect(linkedList.insertEnd(2).insertEnd(1).contains(1)).toEqual(true)
  expect(linkedList.insertEnd(2).insertEnd(1).contains(3)).toEqual(false)
  expect(linkedList.insertEnd('hello').insertEnd(1).contains('hello')).toEqual(true)
})

test('linkedList delete works', () => {

})