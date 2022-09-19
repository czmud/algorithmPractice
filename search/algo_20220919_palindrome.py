str1: str = ""
expected1 = False

str2: str = "a"
expected2 = True

str3: str = "ddaa"
expected3 = True
# Explanation: "daad" or "adda"

str4: str = "dda"
expected4 = True
# Explanation: "dad"

str5: str = "aaadd"
expected5 = True
# Explanation: "daaad"

str6: str = "abc"
expected6 = False


#Determines whether or not it is possible for the string's characters to be
#rearranged into a palindrome.
#- Space: O(?).
#- Time: O(?).
#@param {string str}
#@returns {boolean} Whether the given str can be rearranged into a palindrome.g}


def canStringBecomePalindrome(str: str):
    if len(str) < 1:
        return False
    charArray = {}
    for i in range(len(str)):
        if str[i] in charArray:
            charArray.pop(str[i])
        else:
            charArray[str[i]] = 1
    return len(charArray) < 2

print(canStringBecomePalindrome(str1))
print(canStringBecomePalindrome(str2))
print(canStringBecomePalindrome(str3))
print(canStringBecomePalindrome(str4))
print(canStringBecomePalindrome(str5))
print(canStringBecomePalindrome(str6))

nums1 = [1, 4, 3, 6, 9, 15]

def callback1(elem):
    return elem > 5

expected1 = [6, 9, 15]

nums2 = [1, 4, 3, 6, 9, 15]
def callback2 (elem):
    return elem > 2

expected2 = [4, 3, 6, 9, 15]

nums3 = [1, 4, 3, 6, 9, 15]

def callback3 (elem):
    return False

expected3 = []


#Removes every element in the array, starting from idx 0 until the callback
#function returns true when passed the iterated element.
#- Time: O(?).
#- Space: O(?).
#@param {Array<any>} arr
#@callback cb A callback function that expects to receive an array element.
#@returns {Array<any>} The given array with only the remaining items.

def dropIt(arr, cb):
    for num in arr:
        if cb(num):
            break
    
    return False
