//
// This is only a SKELETON file for the 'Prime Factors' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const primeFactors = (num) => {
  let divisors = [];
  let curentDiv = 2;
  while (num != 1) {
    if (num % curentDiv == 0) {
      num /= curentDiv;
      divisors.push(curentDiv);
    } else curentDiv++;
  }
  return divisors;
};
