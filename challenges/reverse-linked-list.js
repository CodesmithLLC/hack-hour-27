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
    let storage = [(head.value)];
    while (head.next) {
        head = head.next;
        storage.push(head.value);
    }
    storage = storage.reverse();
    let newHead = new Node(storage[0]);
    for (let i = 1; i < storage.length; i++) {
        tracker = new Node(storage[i]);
        newHead.next = tracker;
        newHead = newHead.next;
    }
    console.log(newHead);
    return storage;
}

let linked = { 
    value: 'red',
    next: {
        value: 'blue',
        next: {
            value: 'green',
            next: null
        }
    }
}

console.log(reverseLinkedList(linked));

module.exports = {Node: Node, reverseLinkedList: reverseLinkedList};
