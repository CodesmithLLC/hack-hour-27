/**
 * Write a function for reversing a linked list.
 * Your function will have one input: the head of the list
 * Your function should return the new head of the list
 *
 * BONUS:
 * Do it in place
 *
 */

function Node(value) {
    this.value = value;
    this.next = null;
}

function reverseLinkedList(head) {
    let nodes = [];
    while (head) {
        nodes.push(head.value)
        head = head.next;
    }
    let reverse = new Node(nodes[nodes.length-1]);
    const reverseHead = reverse;
   for (let i = nodes.length - 2; i >= 0; i--) {
       reverse.next = new Node(nodes[i]);
       reverse = reverse.next;
   }
   return reverseHead;
}

module.exports = {Node: Node, reverseLinkedList: reverseLinkedList};