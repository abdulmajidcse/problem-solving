/**
 * Input: [4, 2, 9, -1, 7]

 * Output: { min: -1, max: 9 }
 */

interface minMax {
    min: number;
    max: number;
}

function findMinMax(nums: number[]): minMax | null {
    if (nums.length == 0) {
        return null;
    }

    let min: number = nums[0];
    let max: number = nums[0];

    for (let i: number = 1; i < nums.length; i++) {
        if (nums[i] < min) {
            min = nums[i];
        }

        if (nums[i] > max) {
            max = nums[i];
        }
    }

    return { min, max };
}

console.log(findMinMax([4, 2, 9, -1, 7]));
// { min: -1, max: 9 }

console.log(findMinMax([5]));
// { min: 5, max: 5 }

console.log(findMinMax([-8, -3, -10]));
// { min: -10, max: -3 }

console.log(findMinMax([]));
// null
