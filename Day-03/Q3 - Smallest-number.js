// 🔸 LeetCode: Smallest Number After Rearranging Digits
// 🔹 Difficulty: Medium
// 🔗 Link: https://leetcode.com/problems/smallest-number-after-rearranging-digits/

/**
 * @param {number} num
 * @return {number}
 */
var smallestNumber = function(num) {
    let arr = num.toString().split("").map(Number);
    let sign = 1;

    if (num < 0) {
        arr.shift();
        sign = -1;
        arr.sort((a, b) => b - a);
        return sign * parseInt(arr.join(''), 10);
    }

    arr.sort((a, b) => a - b);
    let nonZero = arr.filter(d => d !== 0);

    if (arr.length !== nonZero.length) {
        let count = arr.length - nonZero.length;
        let firstNonZero = arr[count];
        arr.splice(count, 1);
        arr.unshift(firstNonZero);
    }

    return parseInt(arr.join(''), 10);
};
