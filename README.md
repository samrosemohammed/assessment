# assessment

This repository contains a simple TypeScript function to check whether two strings are anagrams.

Usage
- See the implementation in [`areAnagrams`](index.ts) in [index.ts](index.ts).

Brief logic / approach
- If the strings have different lengths, return false.
- Build a frequency map for characters in the first string.
- Iterate the second string, decrementing counts in the map; if a character is missing or its count is zero, return false.
- If all characters match, return true.

Time Complexity
- $O(n)$ where $n$ is the length of the strings (they must be equal length).

Space Complexity
- $O(k)$ where $k$ is the number of distinct characters (worst-case $O(n)$).