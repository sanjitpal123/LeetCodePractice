/**
 * Reverse Singly_linked list.
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val, next) {
 *         this.val = (val===undefined ? 0 : val);
 *         this.next = (next===undefined ? null : next);
 *     }
 * }
 */

class ListNode {
  constructor(val, next) {
      this.val = (val === undefined ? 0 : val);
      this.next = (next === undefined ? null : next);
  }
}

function reverseList(head) {
  let l = head;
  let prev = null;
  
  while (l !== null) {
      let nextNode = l.next;
      l.next = prev;
      prev = l;
      l = nextNode;
  }
  
  return prev;
}
