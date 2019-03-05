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
    this.prev = null;
}

function reverseLinkedList(head) {
    // move until end of LL
    // when this.next = null, assign the value to this.value 
    // remove the lat link, turn previous this.next = null 
    // base case: node is null

    do {
        head.next.prev = head
        head = head.next
    } while (head.next !== null)
    
    const newHead = head

    do {
        [head.next, head.prev] = [head.prev, head.next]
        head = head.prev
    } while (head.prev !== null)

    return newHead

}

module.exports = {Node: Node, reverseLinkedList: reverseLinkedList};
