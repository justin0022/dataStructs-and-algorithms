const createNode = val => ({
  val,
  left: null,
  right: null
})

const createBST = () => {
  let root = null
  return {
    insert: val => {
      const node = createNode(val)

      const insertNode = (node, newNode) => {
        if (newNode.val < node.data) {
          if (node.left === null) {
            node.left = newNode
          } else {
            insertNode(node.left, newNode)
          }
        } else {
          if (node.right === null) {
            node.right = newNode
          } else {
            insertNode(node.right, newNode)
          }
        }
      }

      root === null
        ? root = node
        : insertNode(root, node)

      return root
    },
    contains: () => {
      return root
    },
    delete: val => {

    }
  }
}

module.exports = createBST
