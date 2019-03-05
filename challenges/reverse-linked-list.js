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
    let newHead;
    // We need a pointer to keep track of where we are
    let pointer = head;

    // We also need a stack to keep track of what we've seen
    const stack = [];


    // Let's fill up the stack with Nodes!
    while (pointer.next) {
        stack.push(pointer);
        pointer = pointer.next;
    }
    pointer = newHead;

    while (stack.length > 1) {
        pointer.next = stack.pop();
    }

    pointer.next = null;

    return newHead;
}

module.exports = { Node: Node, reverseLinkedList: reverseLinkedList };
