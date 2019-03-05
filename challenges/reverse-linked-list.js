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

  const list = [];

  const traverseAndSave = function(node) {
    if(node.next === null) return list.unshift(node);
    else {
      list.unshift(node);
      traverseAndSave(node.next);
    }
  }

  traverseAndSave(head);

  for(let i=0; i<list.length; i++){
  	list[i].next = list[i+1];
  }

  list[list.length-1].next = null;

  return list[0];

}


//testing

// let aa = new Node(1);
// let ab = new Node(2);
// let ac = new Node(3);
// let ad = new Node(4);
// let ae = new Node(5);
// let af = new Node(6);
// let ag = new Node(7);

// aa.next = ab
// ab.next = ac
// ac.next = ad
// ad.next = ae
// ae.next = af
// af.next = ag

// let ba = new Node(1);
// let bb = new Node(2);

// ba.next = bb

// reverseLinkedList(aa);

module.exports = {Node: Node, reverseLinkedList: reverseLinkedList};
