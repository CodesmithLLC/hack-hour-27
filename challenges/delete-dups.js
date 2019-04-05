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

const seen = new Set()
function deleteDups(head) {
  if (!head || !head.next) return;
  seen.add(head.value)
  if (seen.has(head.next.value)){
    head.next = head.next.next
  }
  return deleteDups(head.next);
}

module.exports = deleteDups;
