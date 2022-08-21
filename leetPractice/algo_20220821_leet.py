# 58. Length of Last Word. Easy.
def lengthOfLastWord(s: str) -> int:
    wordLength = 0
    s = s.strip()
    for i in range(len(s)-1, -1, -1) :
        if s[i] == " ":
            return wordLength
        wordLength +=1
    return wordLength


print( lengthOfLastWord("how do you say dizzy"))
print( lengthOfLastWord("how do you say spectacular"))
print( lengthOfLastWord("how do you say boo"))
