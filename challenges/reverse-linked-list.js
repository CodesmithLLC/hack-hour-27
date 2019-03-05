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
    if(head === null) return head;

    let ptr = head;
    let revHead = null;

    revHead = new Node(ptr.value);
    ptr = ptr.next;
    while(ptr !== null){
        let temp = new Node(ptr.value);
        temp.next = revHead;
        revHead = temp;
        ptr = ptr.next;
    }
    return revHead;
}

module.exports = {Node: Node, reverseLinkedList: reverseLinkedList};
