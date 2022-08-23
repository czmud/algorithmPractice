from typing import Optional

# Definition for singly-linked list.
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next
class Solution:
    def addTwoNumbers(self, l1: Optional[ListNode], l2: Optional[ListNode]) -> Optional[ListNode]:
        sum = sumRunner = ListNode( 0 )
        carry = 0
        while( l1 or l2 or carry ):
            if( l1.val + l2.val + carry < 10 ):
                sumRunner.next = ListNode( l1.val + l2.val + carry )
                carry = 0
            else:
                sumRunner.next = ListNode( (l1.val + l2.val + carry) % 10 )
                carry = int(( l1.val + l2.val + carry ) / 10)
            
            l1 = l1.next
            l2 = l2.next
            sumRunner = sumRunner.next
        return sum.next


solution1 = Solution()

list1 = ListNode(1)
list1.next = ListNode(2)
list1.next.next = ListNode(3)
list2 = ListNode(4)
list2.next = ListNode(5)
list2.next.next = ListNode(6)

sumPrint = solution1.addTwoNumbers( list1, list2 )

print(sumPrint.val)