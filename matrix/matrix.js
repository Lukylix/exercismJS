//
// This is only a SKELETON file for the 'Matrix' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Matrix {
  constructor(string) {
    this.rows= string.split(/\n/gm).map((e) => e.split(" ").map((e) => parseInt(e)));

    this.columns = this.rows[0].map((col,i) => this.rows.map(row => row[i]))
  }
}
