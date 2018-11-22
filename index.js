const { createBST } = require('./dataStructure')

const bst = createBST()

bst
  .insert(15)
  .insert(25)
  .insert(10)
  .insert(7)

console.log(bst.contains(8))
