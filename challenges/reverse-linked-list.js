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
    if (!head) return head;

    const stack = [];
    let newHead = head;
    stack.push(newHead);
    while (newHead.next) {
        newHead = newHead.next;
        stack.push(newHead);
    }

    console.log('TCL: reverseLinkedList -> stack', stack)

    // newHead should now be the tail. Pop it off
    stack.pop();
    let pointer = newHead;
    while (pointer) {
        pointer.next = stack.pop();
        pointer = pointer.next;
    }

    return newHead;
}

// const n1 = new Node(1);
// const n2 = new Node(2);
// const n3 = new Node(3);
// const n4 = new Node(4);
// const n5 = new Node(5);

// n1.next = n2;
// n2.next = n3;
// n3.next = n4;
// n4.next = n5;
// console.log('return - ', JSON.stringify(reverseLinkedList(n1)))




module.exports = {Node: Node, reverseLinkedList: reverseLinkedList};
