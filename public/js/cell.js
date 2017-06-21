/* jshint esversion:6 */
function Cell(width, height) {
  this.width = width || 100;
  this.height = height || 100;
}

Cell.prototype.toHtml = function () {
  const div = document.createElement('div');
  div.style.height = `${this.height}px`;
  div.style.display = 'inline-block';
  div.style.width = `${this.width}px`;
  div.style.border = '0.25px solid black';
  return div;
};
