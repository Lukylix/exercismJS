//
// This is only a SKELETON file for the 'Pangram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isPangram = (str) => {
  str = str.toLowerCase();

  let letters = {};
  str.split("").forEach((letter) => {
    const charCode = letter.charCodeAt(0);
    if (charCode >= 96 && charCode <= 122) letters[letter] = true;
  });

  if (Object.keys(letters).length == 26) return true;
  return false;
};
