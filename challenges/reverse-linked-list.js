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
    let current = head;
    let previous = null;
    while (current) {
        let temp = current.next;
        current.next = previous;
        previous = current;
        current = temp;
    }
    return previous;
}

module.exports = { Node: Node, reverseLinkedList: reverseLinkedList };
