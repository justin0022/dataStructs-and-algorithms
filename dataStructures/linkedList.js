const createNode = val => ({
  val,
  next: null
})

const insertNode = (node, val) => {
  if (node.next === null) {
    node.next = val
  } else insertNode(node.next, val)
}

const createLinkedList = () => {
  let head = null
  return {
    insert: function (val) {
      const node = createNode(val)
      if (head === null) head = node
      else insertNode(head, node)
      return this
    },
    delete: function (val) {

    },
    find: () => {

    },
    contains: () => {

    },
    getLinkedList: () => head
  }
}

module.exports = createLinkedList
