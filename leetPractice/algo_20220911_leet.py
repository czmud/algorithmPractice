# 9. Palindrome Number. Easy.
from pickletools import read_unicodestringnl


class Solution9:
    def isPalindrome(self, x: int) -> bool:
        str_x = str(x)
        length = len(str_x)
        for i in range(int(length/2)):
            if( str_x[i] != str_x[length-1-i] ):
                return False
        return True

# solution = Solution9()
# print(solution.isPalindrome(1045401))

#234. Palindrome Linked List. Easy.
# Definition for singly-linked list.
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next
class Solution234:
    def isPalindrome(self, head: ListNode) -> bool:
        if( head.next == None ):
            return True
        stack = []
        runner = head
        while( runner ):
            stack.append(runner.val)
            runner = runner.next
        runner = head
        length = int(len(stack)/2)
        for i in range(length):
            if runner.val != stack.pop():
                return False
            runner = runner.next
        return True

# solution = Solution234()
# print(solution.isPalindrome(ListNode(1,ListNode(2,ListNode(2, ListNode(1))))))

# 2130. Maximum Twin Sum of a Linked List. Medium.
class Solution2130:
    def pairSum(self, head: ListNode) -> int:
        stack = []
        maxSum = 0
        slow, fast = head, head
        while fast and fast.next:
            fast = fast.next.next
            stack.append(slow.val)
            slow = slow.next
        while slow:
            maxSum = max(maxSum, slow.val + stack.pop())
            slow = slow.next
        return maxSum