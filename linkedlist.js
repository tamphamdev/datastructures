class TNode {
    data;
    next;
    constructor(data) {
        this.data= data
    }
    countNodes(head) {
      let count = 1
      let currentNode = head
      while(currentNode.next) {
          count++
          currentNode = currentNode.next
        }
      return count
    }

  }

  let head = new TNode(6)
  let nodeB = new TNode(3)
  let nodeC = new TNode(4)
  let nodeD = new TNode(2)
  let nodeE = new TNode(1)

  head.next = nodeB
  nodeB.next = nodeC
  nodeC.next = nodeD
  nodeD.next = nodeE
 head.countNodes(head) // 5
 console.log(' head.countNodes(head) :>> ',  head.countNodes(head));