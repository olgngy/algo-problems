// https://www.hackerrank.com/challenges/ctci-linked-list-cycle
/*
Detect a cycle in a linked list. Note that the head pointer may be 'NULL' if the list is empty.

A Node is defined as: 
  struct Node {
    int data;
    struct Node* next;
  }
*/

bool has_cycle (Node* head) {
  // Complete this function
  // Do not write the main method
  if (head == NULL) return false;
  Node* fast = head;
  Node* slow = head;
  while (fast != NULL) {
    fast = fast->next->next;
    slow = slow->next;
    if (fast == slow) return true;
  }
  return false;
}