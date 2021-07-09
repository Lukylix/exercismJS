//
// This is only a SKELETON file for the 'Secret Handshake' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const commands = (val) => {
  let binary = parseInt(val.toString(2));
  const secret = [
    [1000, "jump"],
    [100, "close your eyes"],
    [10, "double blink"],
    [1, "wink"],
  ];
  let resp = [];
  let reverse = false;
  if (binary - 10000 >= 0) {
    binary -= 10000;
    reverse = true;
  }
  secret.forEach((el) => {
    if (binary - el[0] >= 0) {
      binary -= el[0];
      resp.unshift(el[1]);
    }
  });
  if (reverse) resp = resp.reverse();
  return resp;
};
