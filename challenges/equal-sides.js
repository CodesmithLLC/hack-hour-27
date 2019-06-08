// Write a function that returns the index of the given array at which the sums of the numbers on either side of it are equal to each other. 

// Example:
// equalSides([1, 2, 3, 4, 3, 2, 1]);
// should return 3 because the sums of the numbers on either side of arr[3] are both equal to 6. (1+2+3 (4) 3+2+1)
// The length of the sides do not have to be equal, only the sums of their values.

// equalSides([1, 1, 1, 4, 2, 1]);
// should also return 3 (arr[3] = 4), because 1+1+1 is 3, and 2+1 is 3.
// If the array can't be split into equal sides, return -1.