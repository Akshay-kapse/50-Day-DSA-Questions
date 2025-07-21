// 🔸 LeetCode: Rotate String
// 🔹 Difficulty: Easy
// 🔗 Link: https://leetcode.com/problems/rotate-string/

var rotateString = function (s, goal) {
    if (s.length !== goal.length) return false;
    return (s + s).includes(goal);
};
