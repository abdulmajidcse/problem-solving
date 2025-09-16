# Problem Source: https://codeforces.com/problemset/problem/282/A

n = int(input())

result = 0
for _ in range(n):
    statement = input()
    if statement[0] == "+" or statement[-1] == "+":
        result += 1
    else:
        result -= 1
print(result)

