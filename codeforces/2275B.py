# https://codeforces.com/problemset/problem/2275/B

total_input = int(input())

for _ in range(total_input):
    n = int(input())
    s = list(input())
    stack_serial = []
    skips = []

    for i in range(n):
        if s[i] == '1':
            stack_serial.append(i + 1)
        elif s[i] == '2' and stack_serial:
            stack_serial.pop()
            skips.append(i + 1)

    not_printed = sorted(stack_serial + skips)
    print(len(not_printed))
    print(" ".join(str(serial) for serial in not_printed))
