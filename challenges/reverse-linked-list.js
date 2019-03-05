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
    let stack = [];
    let current = head;
    let reverse = null;
    while (current) {
        stack.push(current);
        current.next = current;
    };
    reverse = stack.pop();
    current = reverse;
    while (current) {
        current.next = stack.pop()
        if (!current.next) current.next = null;
        current = current.next;
    };
    return reverse;
};

// function reverseLinkedList(head) {
//     let current = head;
//     let previous = null;
//     while (current) {
//         let temp = current.next;
//         current.next = previous;
//         previous = current;
//         current = temp;
//     }
//     return previous;
// }

module.exports = { Node: Node, reverseLinkedList: reverseLinkedList };
