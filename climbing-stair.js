/**
 * You have total n stairs.
 * Everytime you can go 1 step or 2 steps.
 * 
 * How many ways you can go end step?
 * 
 * n = 3;
 * Possible ways:
 * 1 + 1 + 1
 * 1 + 2
 * 2 + 1
 * Expected output: 3
 */

// Recursive
// function climbingStair(n: number): number {
//     if (n <= 1) {
//         return 1;
//     }

//     return climbingStair(n - 1) + climbingStair(n - 2);
// }

// Top-Down DP - Memoization
// function climbingStair(n, memo = {}) {
//     if (n <= 1) {
//         return 1;
//     }

//     if (memo[n] !== undefined) {
//         return memo[n];
//     }

//     memo[n] = climbingStair(n - 1, memo) + climbingStair(n - 2, memo);

//     return memo[n];
// }

// Bottom-Up DP - Tabulation
function climbingStair(n) {
    if (n <= 1) {
        return 1;
    }

    dp = [1, 1];

    for (let i = 2; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }

    return dp[n];
}

console.log(climbingStair(10));
