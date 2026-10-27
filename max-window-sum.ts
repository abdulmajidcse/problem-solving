/**
 * const requests = [2, 1, 5, 1, 3, 2];
 * const k = 3;
 * 
 * [2, 1, 5] → 8
 * [1, 5, 1] → 7
 * [5, 1, 3] → 9
 * [1, 3, 2] → 6
 * Ans: 9
 */

function maxWindowSum(nums: number[], k: number): number {
    let windowSum: number = 0;

    for (let i: number = 0; i < k; i++) {
        windowSum += nums[i];
    }

    let maxSum: number = windowSum;

    for (let i: number = k; i < nums.length; i++) {
        windowSum += nums[i] - nums[i - k];
        maxSum = Math.max(maxSum, windowSum);
    }

    return maxSum;
}

console.log(maxWindowSum([2, 1, 5, 1, 3, 2], 3));
// Expected: 9

console.log(maxWindowSum([1, 2, 3, 4, 5], 2));
// Expected: 9

console.log(maxWindowSum([-4, -2, -7], 2));
// Expected: -6

console.log(maxWindowSum([8], 1));
// Expected: 8