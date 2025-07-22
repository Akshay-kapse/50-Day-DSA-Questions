// 🔸 LeetCode: House Robber  
// 🔹 Difficulty: Medium  
// 🔗 Link: https://leetcode.com/problems/house-robber/

var rob = function (nums) {
    if (nums.length === 0) return 0
    if (nums.length === 1) return nums[0]
    if (nums.length === 2) return Math.max(nums[0], nums[1])

    let prev1 = nums[0]
    let prev2 = Math.max(nums[0], nums[1])

    for (let i = 2; i < nums.length; i++) {
        let curr = Math.max(prev2, prev1 + nums[i])
        prev1 = prev2
        prev2 = curr
    }
    return prev2
}
