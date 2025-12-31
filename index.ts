/* Check Whether the Two Given String are Anagrams to Each Other */

const areAnagrams = (str1: string, str2: string): boolean => {
  // Check length of both strings. If not equal, they cannot be anagrams.
  if (str1.length !== str2.length) return false;

  // Create a frequency map for characters in str1
  const charCount: { [key: string]: number } = {};

  for (const char of str1) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  // Decrease the frequency based on characters in str2
  for (const char of str2) {
    if (!charCount[char]) {
      return false; // Character in str2 not found in str1 or frequency mismatch
    }
    charCount[char]--;
  }

  return true;
};

const result = areAnagrams("listen", "silent");
console.log(`Are the two strings anagrams? ${result}`);
