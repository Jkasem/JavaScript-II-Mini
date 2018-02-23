// to test these problems you can run 'node recursion.js' in your terminal
// Problem 1:

let n = 1;
while (n <= 10) {
  console.log('While Loop', n);
  n++;
}

// write a recursive - function called countToTen that mimics the while loop above.

const countToTen = () => {
  if (n > 10) return;
  countToTen(++n);
}

// when you code is ready, un-comment the next line and run the file
console.log(countToTen());
/* ================ Next Problem ================= */

// Problem 2:

const factorial = n => {
  if (n < 2) return 1;
  return n * nFactorial(n - 1);
};

console.log(factorial(5));

// write the above function in a recursive way.

// when your code is ready, un-comment the next line and run the file
console.log(recursiveFactorial());
