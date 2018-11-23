const createNode = val => ({
  val,
  next: null
})

const insertNode = (node, newNode) => {
  if (node.next === null) {
    node.next = newNode
  } else insertNode(node.next, newNode)
}

const findNode = (node, val) => {
  if (node == null) return null
  if (node.val === val) return node
  else return findNode(node.next, val)
}

// 1 -> 2 -> null
const deleteNode = (node, val) => {
  if (node == null || node.next == null) return
  if (node.val === val) {
    const nextNode = node.next
    node = nextNode
  } else deleteNode(node.next, val)
}

const createLinkedList = () => {
  let head = null
  return {
    insertEnd: function (val) {
      const node = createNode(val)
      if (head == null) head = node
      else insertNode(head, node)
      return this
    },
    insertFront: function (val) {
      const node = createNode(val)
      if (head == null) head = node
      else {
        node.next = head
        head = node
      }
      return this
    },
    delete: function (val) {
      deleteNode(head, val)
      return this
    },
    find: val => findNode(head, val),
    contains: val => findNode(head, val) != null,
    getLinkedList: () => head
  }
}

module.exports = createLinkedList
