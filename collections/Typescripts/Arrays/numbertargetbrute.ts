/**
 * Finds two indices in the array whose values add up to the target.
 * Returns a tuple of indices if found, otherwise null.
 * This version does NOT use Map.
 */

function twoSumBruteForce(nums: number[], target: number): [number, number] | null {
  // Check every pair of numbers in the array
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
  // If no pair is found, return null
  return null;
}

// Example usage:
const nums = [1, 2, 3, 4, 5];
const target = 9;

const result = twoSumBruteForce(nums, target);
if (result) {
  console.log(`Indices: ${result[0]}, ${result[1]}`); // Indices: 3, 4
  console.log(`Values: ${nums[result[0]]}, ${nums[result[1]]}`); // Values: 4, 5
} else {
  console.log("No pair found");
}