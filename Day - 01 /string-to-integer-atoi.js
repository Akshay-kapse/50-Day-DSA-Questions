// 🔸 LeetCode: String to Integer (atoi)
// 🔹 Difficulty: Medium
// 🔗 Link: https://leetcode.com/problems/string-to-integer-atoi/

var myAtoi = function (s) {
    s = s.trim();

    let sign = 1;
    let i = 0;
    let result = 0;

    if (s[i] === '+' || s[i] === '-') {
        sign = s[i] === '-' ? -1 : 1;
        i++;
    }

    while (i < s.length && s[i] >= '0' && s[i] <= '9') {
        result = result * 10 + (s[i].charCodeAt(0) - '0'.charCodeAt(0));
        i++;
    }

    result *= sign;

    if (sign < 0) return Math.max(result, -(2 ** 31));
    return Math.min(result, 2 ** 31 - 1);
};
