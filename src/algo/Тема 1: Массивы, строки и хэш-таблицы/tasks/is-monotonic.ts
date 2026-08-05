export function isMonotonic(nums: number[]): boolean {
  if (nums.length <= 1) return true;

  let increasing = true;
  let decreasing = true;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > nums[i - 1]) {
      decreasing = false;
    } else if (nums[i] < nums[i - 1]) {
      increasing = false;
    }
  }

  return increasing || decreasing;
}

// fmt.Println(isMonotonic([]int{1, 2, 2, 3})) // true (монотонно возрастает)
// fmt.Println(isMonotonic([]int{6, 5, 4, 4})) // true (монотонно убывает)
// fmt.Println(isMonotonic([]int{1, 3, 2}))    // false (не монотонный)
