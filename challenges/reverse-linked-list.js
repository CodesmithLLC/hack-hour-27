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
  const stack = [];
  let pointer = head.head;
  while (pointer){
    stack.push(pointer);
    pointer = pointer.next;
  }
  const newHead = stack[stack.length-1];
  while (stack.length > 0){
    const node = stack.pop();
    node.next = stack[stack.length-1];
    if (!stack[stack.length-1]) node.next = null;
  }
  head.head = newHead;
  return head
}

/*
const testList = {head:{value: 0, next:{value:1, next:{value:2, next:{value:3, next:null}}}}}
console.log(JSON.stringify(reverseLinkedList(testList)));
*/

module.exports = {Node: Node, reverseLinkedList: reverseLinkedList};
