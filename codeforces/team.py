# Problem Source: https://codeforces.com/problemset/problem/231/A

n = int(input())

result = 0
for _ in range(n):
    indicator = list(map(int, input().split(" ")))
    if (sum(indicator) > 1):
        result += 1
print(result)

