# Problem Source: https://codeforces.com/problemset/problem/71/A

n = int(input())

for _ in range(n):
    word = input()
    length = len(word)
    if length > 10:
        abbr = word[0] + str((length-2)) + word[length-1]
    else:
        abbr = word
    
    print(abbr)