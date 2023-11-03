var longestCommonPrefix = function (strs) {
  if (strs.length === 0) {
    return ""; // If the array is empty, there's no common prefix.
  }

  let commonPrefix = strs[0]; // Initialize with the first string.

  for (let i = 1; i < strs.length; i++) {
    let j = 0;
    while (
      j < commonPrefix.length &&
      j < strs[i].length &&
      commonPrefix[j] === strs[i][j]
    ) {
      j++;
    }
    commonPrefix = commonPrefix.substring(0, j); // Update the common prefix.

    if (commonPrefix === "") {
      return ""; // If the common prefix becomes empty, there's no common prefix.
    }
  }

  return commonPrefix;
};

// Example usage:
const strs1 = ["flower", "flow", "flight"];
const result1 = longestCommonPrefix(strs1);
console.log(result1);

const strs2 = ["dog", "racecar", "car"];
const result2 = longestCommonPrefix(strs2);
console.log(result2);
