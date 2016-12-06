/*:::Multiples of 3 and 5:::
Problem 1: If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. 
The sum of these multiples is 23. Find the sum of all the multiples of 3 or 5 below 1000.*/

var total = 0;

// do/while limits input to sane values
do { num = prompt("Enter a number (0 to 100,000): ") } while (num > 100000); 

for (i = 1; i < num; i++) {
  if (i % 3 === 0 || i % 5 === 0) {
    total += i;
  }
}

console.log("Sum of all multiples of 3 or 5 below " + num + ": " + total);