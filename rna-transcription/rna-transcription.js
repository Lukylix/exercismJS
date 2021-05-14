//
// This is only a SKELETON file for the 'RNA Transcription' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const toRna = (DNA) => {
  const dicToRna = {
    G: "C",
    C: "G",
    T: "A",
    A: "U",
  };
  let anwser= "";
  for(let x= 0; x < DNA.length; x++)
    anwser += dicToRna[DNA[x]] ? dicToRna[DNA[x]] : "";
  return anwser;
};
