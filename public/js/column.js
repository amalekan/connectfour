/* jshint esversion:6 */
function Column(height) {
  this.col = new Array(height);
  for (let i = 0; i < height; i++) {
    this.col[i] = new Cell();
  }
}

Column.prototype.toHtml = function () {

  const div = document.createElement('div');
  div.style.height = `${this.height}px`;
  div.style.display = 'inline-block';
  div.style.width = `${this.width}px`;
  div.style.border = '0.25px solid black';
  
  return div;

}
