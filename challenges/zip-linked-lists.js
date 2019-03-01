/* Merge two linked lists so that their nodes alternate. Let the first node of the zipped list be
 * the first node of the first argument, if it exists.
 * Implement the linked list using only a Node class. No need for a wrapper LinkedList class
 *
 * BONUS: Do this in place
 */

function Node(val) {
  this.value = val;
  this.next = null;
}

function zip(l1, l2) {
  let ptrL1 = l1;
  let ptrL2 = l2;
  let alternate = true;

  if(l1 === null && l2 === null) return new Node();
  if(l1 === null) return l2;
  if(l2 === null) return l1;

  const result = new Node(ptrL1.value);
  ptrL1 = ptrL1.next;
  let ptrResult = result;
  while(ptrL1 !== null || ptrL2 !== null) {
    if(ptrL1 === null){ // l1 NULL, NOT L2
      ptrResult.next = new Node(ptrL2.value);
      ptrL2 = ptrL2.next;
    } else if (ptrL2 === null) { // l1 NULL, NOT L2
      ptrResult.next = new Node(ptrL1.value);
      ptrL1 = ptrL1.next;
    }
    else {  // BOTH NOT NULL
      if(alternate){ // handle the L2
        ptrResult.next = new Node(ptrL2.value);
        ptrL2 = ptrL2.next;
      }else{
        // handle the L1
        ptrResult.next = new Node(ptrL1.value);
        ptrL1 = ptrL1.next;
      }
      alternate = !alternate;
    }
    ptrResult = ptrResult.next;
  }
  return result;
};

module.exports = {Node: Node, zip: zip};
