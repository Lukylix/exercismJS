//
// This is only a SKELETON file for the 'Secret Handshake' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const commands = (val) => {
  let ret = [];
  if ((val & 0b00001) === 0b00001) ret.push("wink");
  if ((val & 0b00010) === 0b00010) ret.push("double blink");
  if ((val & 0b00100) === 0b00100) ret.push("close your eyes");
  if ((val & 0b01000) === 0b01000) ret.push("jump");
  if ((val & 0b10000) === 0b10000) ret.reverse();
  return ret;
};
