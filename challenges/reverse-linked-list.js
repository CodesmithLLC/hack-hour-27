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
    let node = head;
    let previous;
    let temp;
    while (node) {
        temp = node.next; // save next before we overwrite node.next
        node.next = previous; // reverse pointer
        prevous = node; // step forward in list
        node = temp;
    }
    return previous;
}

module.exports = {Node: Node, reverseLinkedList: reverseLinkedList};
