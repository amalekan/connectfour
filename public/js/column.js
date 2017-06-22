/* jshint esversion:6 */
function Column(height) {
  this.column = new Array(height);
  for (let i = 0; i < height; i++) {
    this.column[i] = new Cell(25, 25);
  }
}

Column.prototype.toHtml = function () {

  const div = document.createElement('div');
  div.style.display = 'inline-block';
  div.style.height = `${this.height}px`;
  div.style.margin = '2px';
  return div;

};
