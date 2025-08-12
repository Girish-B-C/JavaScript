/**
 * Finds two indices in the array whose values add up to the target.
 * Returns a tuple of indices if found, otherwise null.
 * 
 * Example:
 * nums = [1, 2, 3, 4, 5], target = 9
 * Output: [3, 4] because nums[3] + nums[4] = 4 + 5 = 9
 */

function twoSum(nums: number[], target: number): [number, number] | null {
  // Create a map to store value → index
  const map = new Map<number, number>();

  // Iterate through the array
  for (let i = 0; i < nums.length; i++) {
    // Calculate the complement that would sum to the target
    const complement = target - nums[i];

    // If the complement exists in the map, return the pair of indices
    const foundIndex = map.get(complement);
    if (foundIndex !== undefined) {
      return [foundIndex, i];
    }

    // Store the current value and its index in the map
    map.set(nums[i], i);
  }

  // If no pair is found, return null
  return null;
}

// Example usage:
const nums = [1, 2, 3, 4, 5]; // Array of numbers
const target = 9;              // Target sum

// Call the function and print the result
const result = twoSum(nums, target);
if (result) {
  console.log(`Indices: ${result[0]}, ${result[1]}`); // Indices: 3, 4
  console.log(`Values: ${nums[result[0]]}, ${nums[result[1]]}`); // Values: 4, 5
} else {
    console.log("No pair found");
  }