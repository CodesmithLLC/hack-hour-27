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
  if (!head.next) return head;
  let lead = head.next;
  let lag = head;
  let cache = new Set(head.value);
  while (lead) {
    if (cache.has(lead.value)) {
      lag.next = lead.next;
      lead = lead.next;
    } else {
      cache.add(lead.value);
      lead = lead.next;
      lag = lag.next;
    }
  }
  return head;
}

module.exports = deleteDups;
