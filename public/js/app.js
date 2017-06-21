/*jshint esversion: 6*/
const App = {
rootElement:'#app',
numCols: 7,
colHeight: 6,
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
  this.gridOutput.innerHTML = '';
  }
};

App.start();
