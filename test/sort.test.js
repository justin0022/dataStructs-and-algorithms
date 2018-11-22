/* global test, expect */

const u = require('../algorithm.js')

const {
  quickSort,
  mergeSort,
  selectionSort,
  bogoSort,
  bubbleSort
} = u.sort

test('quickSort sorts an array of numbers from smallest to largest', () => {
  expect(quickSort).toBeDefined()
  expect(quickSort([])).toEqual([])
  expect(quickSort([1])).toEqual([1])
  expect(quickSort([4, 1, 2])).toEqual([1, 2, 4])
  expect(quickSort([4, 1, -5])).toEqual([-5, 1, 4])
})

test('mergeSort sorts an array of numbers from smallest to largest', () => {
  expect(mergeSort).toBeDefined()
  expect(mergeSort([])).toEqual([])
  expect(mergeSort([1])).toEqual([1])
  expect(mergeSort([4, 1, 2])).toEqual([1, 2, 4])
  expect(mergeSort([4, 1, -5])).toEqual([-5, 1, 4])
})

test('selectionSort sorts an array of numbers from smallest to largest', () => {
  expect(selectionSort).toBeDefined()
  expect(selectionSort([])).toEqual([])
  expect(selectionSort([1])).toEqual([1])
  expect(selectionSort([4, 1, 2])).toEqual([1, 2, 4])
  expect(selectionSort([4, 1, -5])).toEqual([-5, 1, 4])
})

test('bogoSort sorts an array of numbers from smallest to largest', () => {
  expect(bogoSort).toBeDefined()
  expect(bogoSort([])).toEqual([])
  expect(bogoSort([1])).toEqual([1])
  expect(bogoSort([4, 1, 2])).toEqual([1, 2, 4])
  expect(bogoSort([4, 1, -5])).toEqual([-5, 1, 4])
})

test('bubbleSort sorts an array of numbers from smallest to largest', () => {
  expect(bubbleSort).toBeDefined()
  expect(bubbleSort([])).toEqual([])
  expect(bubbleSort([1])).toEqual([1])
  expect(bubbleSort([4, 1, 2])).toEqual([1, 2, 4])
  expect(bubbleSort([4, 1, -5])).toEqual([-5, 1, 4])
})
