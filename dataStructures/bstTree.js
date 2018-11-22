const createBST = () => {
  const createNode = val => ({
    val,
    left: null,
    right: null
  })

  let root = null

  return {
    insert: function (val) {
      const node = createNode(val)

      const insertNode = (node, newNode) => {
        if (newNode.val < node.val) {
          if (node.left === null) {
            node.left = newNode
          } else insertNode(node.left, newNode)
        } else {
          if (node.right === null) {
            node.right = newNode
          } else insertNode(node.right, newNode)
        }
      }

      if (root === null) root = node
      else insertNode(root, node)

      return this
    },
    find: function (val) {
      let found = null
      const search = (node, val) => {
        if (node === null) return null
        else if (val < node.val) search(node.left, val)
        else if (val > node.val) search(node.right, val)
        else found = node
      }
      search(root, val)
      return found
    },
    delete: val => {

    },
    getTree: () => root
  }
}

module.exports = createBST
