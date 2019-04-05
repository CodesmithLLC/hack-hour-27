/**
 * Write a function deleteDups that removes duplicates from an unsorted linked list.
 *
 * Example:
 * 1->2->3->3
 *
 * deleteDups(head); -> 1->2->3
 *
 * Extra:
 * How would you solve this problem if a temporary buffer is not allowed?
 */



function deleteDups(head) {
  const visited = new Set();
  if (head.next) {
    visted.add(head.next);
    // if head.next's value is already in visted, remove from LL
  }
}

module.exports = deleteDups;
