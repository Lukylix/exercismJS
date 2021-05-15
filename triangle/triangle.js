//
// This is only a SKELETON file for the 'Triangle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Triangle {
  constructor(...sides) {
    let [a, b, c] = sides.sort();
    this.a = a;
    this.b = b;
    this.c = c;
  }

  get isTriangle() {
    if (this.a == 0 || this.b == 0 || this.c == 0) return false;
    if (this.a + this.b >= this.c) return true;
    return false;
  }

  get isEquilateral() {
    if (!this.isTriangle) return false;
    if (this.a == this.b && this.b == this.c) return true;
    return false;
  }

  get isIsosceles() {
    if (!this.isTriangle) return false;
    if (this.a == this.b) return true;
    if (this.a == this.c) return true;
    if (this.b == this.c) return true;
    return false;
  }

  get isScalene() {
    if (!this.isTriangle) return false;
    if ((this.a != this.b) & (this.a != this.c) & (this.b != this.c)) return true;
    return false;
  }
}
