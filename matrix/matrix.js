//
// This is only a SKELETON file for the 'Matrix' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Matrix {
  constructor(string) {
    this.row = string.split(/\n/gm);
    for (let i = 0; i < this.row.length; i++) {
      this.row[i] = this.row[i].split(" ");
      //Int converstion
      for (let x = 0; x < this.row[i].length; x++) this.row[i][x] = parseInt(this.row[i][x]);
    }

    this.column = [];
    this.row[0].forEach(() => {
      this.column.push([]);
    });
    for (let j = 0; j < this.row.length; j++) {
      for (let k = 0; k < this.row[j].length; k++) this.column[k].push(this.row[j][k]);
    }
  }

  get rows() {
    return this.row;
  }

  get columns() {
    return this.column;
  }
}
