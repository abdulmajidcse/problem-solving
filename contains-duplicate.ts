/**
 * Input: [1, 2, 3, 1]
 * Output: true
 * 
 * Input: [1, 2, 3, 4]
 * Output: false
 */

function containsDuplicate(nums: number[]): boolean {
    const arrUnique = new Set<number>();
    for (let num of nums) {
        if (arrUnique.has(num)) {
            return true;
        }
        arrUnique.add(num);
    }
    return false;
}

/**
 * Time complexity: O(n) => O(n)
 * Space complexity: O(n) => O(n)
 */

console.log(containsDuplicate([1, 2, 3, 6]));
console.log(containsDuplicate([]));
console.log(containsDuplicate([-1, 2, 3, -1]));

/**
 * 1. create a new Set to store unique value
 * 2. start iteration
 * 3. check if the current value is already in the unique Set
 * 4. if it is, return true
 * 5. if it is not, add it to the unique Set
 * 6. if the iteration ends and no duplicates are found, return false.
 */