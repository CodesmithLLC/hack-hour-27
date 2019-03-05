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
    // head is not defined or is the only node
    if (!head) return head;
    if (!head.next) return head;

    let lead = head.next;
    let mid = head;
    let tail = null;

    while (lead.next) {
        mid.next = tail;
        tail = mid;
        mid = lead;
        lead = lead.next;
    }

    mid.next = tail;
    lead.next = mid;

    return lead;
}

module.exports = {Node: Node, reverseLinkedList: reverseLinkedList};


// let list = new Node(1);
// list.next = new Node(2);
// list.next.next = new Node(3);
// list.next.next.next = new Node(4);
// console.log('original:');
// let p = list;
// while (p) {
//     console.log(p.value);
//     p = p.next;
// }
// let reverse = reverseLinkedList(list);
// console.log('reverse:');
// p = reverse;
// while (p) {
//     console.log(p.value);
//     p = p.next;
// }
