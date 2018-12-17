// task:
// Write a program that prints a staircase of size n.
//     #
//    ##
//   ###
//  ####
// #####

// Observe that its base and height are both equal to n, the image is drawn using # symbols and spaces.
// The last line is not preceded by any spaces.

// The staircase is right-aligned and has a height and width of n.

// pseudo code:
// there are spaces and hashes
// the number of lines to print is n
// the width of each line is n
// the amount of spaces is n - 1 but it decrements every line
// the amount of hashes is 1 but it incremements every line
// the spaces are printed first then the hashes

// create a var n for user input. this is gonna be the height of the staircase and the amount of characters in each line
// loop to create n amount of lines and keep track of the amount of hashes since the hashes increment every line
// print a string with n - i amount of spaces and i amount of hashes

let n = 10;

for (let i = 1; i <= n; i++) {
  console.log(' '.repeat(n - i) + '#'.repeat(i));
}