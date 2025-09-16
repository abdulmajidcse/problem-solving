# Problem Source: https://codeforces.com/contest/2132/problem/A

t = int(input())
 
result = []
for _ in range(t):
    n = int(input())
    a = input()
    m = int(input())
    b = input()
    c = input()
 
    for i in range(m):
        if c[i] == 'D':
            a = a + b[i]
        else:
            a = b[i] + a
    result.append(a)
 
print("\n".join(result))