def min_subarray_length_brute(numbers, target):
    n = len(numbers)
    min_length = float("inf")

    for i in range(n):
        current_sum = 0

        for j in range(i, n):
            current_sum += numbers[j]

            if current_sum >= target:
                min_length = min(min_length, j - i + 1)
                break

    return 0 if min_length == float("inf") else min_length

print(min_subarray_length_brute([2, 3, 1, 2, 4, 3], 7))
