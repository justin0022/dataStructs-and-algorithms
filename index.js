const { createBST } = require('./dataStructure')

const bst = createBST()

console.log(bst
  .insert(5)
  .insert(7)
  .insert(3)
  .getTree()
)
