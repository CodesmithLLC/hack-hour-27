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
	if (!head.next) return head;
  //strat: p1, p2, T start at head. Until tail.next is null: T moves to next, P2 moves to tail, P2.next becomes P1. P1 moves to next. repeat.
  let tail = head;
  let prev = head;
  let prev2 = head;
  let length = 0;
  while (tail.next){
  	tail = tail.next
    length++;
  }
  tail = head.next;
  for (let i = 0; i <= length; i++){
    prev2 = prev2.next;
    tail = tail.next;
    prev2.next = prev
  } 
  console.log('tail', tail)
  console.log('prev', prev)
  console.log('prev2', prev2)
  console.log('length', length)
}

let myLL = new Node(1);
myLL.next = new Node(2);
myLL.next.next = new Node(3);
myLL.next.next.next = new Node(4);
console.log(reverseLinkedList(myLL));

module.exports = {Node: Node, reverseLinkedList: reverseLinkedList};
