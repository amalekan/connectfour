/* jshint esversion:6 */
function Column(height) {
  this.row = new Array(height);
  for (let i = 0; i < height; i++) {
    this.row[i] = new Cell(App.cellWidth, App.cellHeight, 'white');
  }
}

Column.prototype.toHtml = function () {

  const div = document.createElement('div');
  div.style.display = 'inline-block';
  div.style.height = `${this.height}px`;
  div.style.width = `${this.width}px`;
  div.style.margin = '2px';
  div.style.backgroundColor = 'white';
  return div;

};
