/*jshint esversion: 6*/
const App = {
rootElement:'#app',
numCols: 7,
colHeight: 6,
cellWidth: 25,
cellHeight: 25,
grid:[],

start:function () {
  this.cacheDOM();
  this.makeGrid();
  this.bindEvents();
  this.render();
},

makeGrid:function () {
  this.grid = new Array(this.numCols);
  for (let colIndex = 0; colIndex < this.numCols; colIndex++) {
    this.grid[colIndex] = new Column(this.colHeight);
  }
},

cacheDOM:function () {
this.root = document.querySelector('#app');
this.gridOutput = this.root.querySelector('.grid-output');
},

bindEvents:function () {

},

render:function () {
  this.grid.forEach(col => {
    const colContainer = col.toHtml();
    colContainer.style.width = `27px`;
    col.column.forEach(cell => {
      const element = cell.toHtml();
      colContainer.appendChild(element);
    });
    this.root.appendChild(colContainer);
  });
  }
};

App.start();
