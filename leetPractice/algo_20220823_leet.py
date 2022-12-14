# 2. Add Two Numbers. Medium.

# Definition for singly-linked list.
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next
class Solution:
    def addTwoNumbers(self, l1: ListNode, l2: ListNode) -> ListNode:
        sum = sumRunner = ListNode( l1.val + l2.val )
        l1 = l1.next
        l2 = l2.next
        if(sum.val < 10 ):
            carry = 0
        else:
            carry = int(sum.val / 10)
            sum.val = sum.val % 10
        while( l1 or l2 or carry ):
            if( l1 and l2 ):
                sumRunner.next = ListNode( l1.val + l2.val + carry )
                l1 = l1.next
                l2 = l2.next
            elif( l1 and not l2 ):
                sumRunner.next = ListNode( l1.val + carry )
                l1 = l1.next
            elif( not l1 and l2 ):
                sumRunner.next = ListNode( l2.val + carry )
                l2 = l2.next
            else:
                sumRunner.next = ListNode( carry )
            
            if( sumRunner.next.val < 10 ):
                carry = 0
            else:
                carry = int(sumRunner.next.val / 10)
                sumRunner.next.val = sumRunner.next.val % 10 
            sumRunner = sumRunner.next
        return sum


solution1 = Solution()

list1 = ListNode(1)
list1.next = ListNode(2)
list1.next.next = ListNode(3)
list2 = ListNode(4)
list2.next = ListNode(5)
list2.next.next = ListNode(6)

sumPrint = solution1.addTwoNumbers( list1, list2 )

print(sumPrint.val)
print(sumPrint.next.val)
print(sumPrint.next.next.val)