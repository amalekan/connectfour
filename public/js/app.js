/*jshint esversion: 6*/
const App = {
rootElement:'#app',
numCols: 7,
colHeight: 6,
cellWidth: 75,
cellHeight: 75,
grid:[],
playerColors:['green', 'black'],
player: 0,
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
  this.controls = this.root.querySelector('.controls');
},

bindEvents:function () {

},

resetGrid:function () {
  this.selectedColor = 'white';
  this.makeGrid();
  this.render();
},

makeMove: function (colIndex, player) {
  for (var i = this.colHeight-1; i >= 0; i--) {
    if (this.grid[colIndex].row[i].isEmpty === true) {
      const cell = this.grid[colIndex].row[i];
      cell.color = this.playerColors[player];
      cell.isEmpty = false;
      this.render(colIndex, i);
      this.checkHortWin(colIndex, i);
      this.checkVertWin(colIndex, i);
      this.checkDiagWin(colIndex, i);
      this.checkAntiDiagWin(colIndex, i);
      this.player = (this.player + 1)%2;
      return;
  }
}

},

checkVertWin: function (x,y) {
//Veritcal
  console.log(x, y);
  count = 0;
  for (let i = y; i < 5 ; i++) {
    if (i>=5){
      return;
    }
    if (this.grid[x].row[i].color !== this.grid[x].row[i+1].color){
      return;
    }
    count++;
    if (count == 3){
      console.log('Game Over!');
      return;
    }
  }
},
//Horizontal
checkHortWin:function (x,y) {
count = 0;

for (let j = x; j < 7; j++) {
  if (j == 6){
    leftCount = 0;
    for (let k = j; k > 0; k--){
      if(this.grid[k].row[y].color !== this.grid[k-1].row[y].color){
        return;
      }
      leftCount++;
      if (leftCount == 3){
        console.log('Game Over!');
        return;
      }
    }
  }
  if(this.grid[j].row[y].color !== this.grid[j+1].row[y].color){
    leftCount = 0;

    for (let k = j; k > 0; k--){
      if(this.grid[k].row[y].color !== this.grid[k-1].row[y].color){
        return;
      }
      leftCount++;
      if (leftCount == 3){
        console.log('Game Over!');
        return;
      }
    }
    return;
  }

  count++;
  if(count===3){
    console.log('Game Over!');
    return;
  }
}
},

checkDiagWin:function (x,y) {
  diagCount = 0;
  for (let i = x, j = y; i < 6 && j > 0; i++, j--) {
    if (i === 6 && j === 0){
      diagAltCount = 0;

      return;
    }
    if (i===6){
      for (let k = i, l = j; k > 0 && l < 6; k--, j++) {
        diagAltCount = 0;
        if(this.grid[k].row[l].color !== this.grid[k-1].row[l+1]){
          return;
        }
        diagAltCount++;
        if(diagAltCount === 3){
          console.log("Game Over!");
          return;
        }
      }
    }
    if (i===0){
      for (let k = i, l = j; k >0 && l >0; k++, l--) {
        diagCount = 0;
        if(this.grid[k].row[l].color !== this.grid[k+1].row[l-1]){
          return;
        }
        diagCount++;
        if(diagCount === 3){
          console.log("Game Over!");
          return;
        }
      }
    }
    if(this.grid[i].row[j].color !== this.grid[i+1].row[j-1].color){
      diagAltCount = 0;
      for (let k = i, l = j; k > 0 &&  l < 5; k--, l++) {
        if (this.grid[k].row[l].color !== this.grid[k-1].row[l+1].color){
          return;
        }
        diagAltCount++;
        if (diagAltCount === 3){
          console.log("Game Over!");
        }
      }
      return;
    }
    if((i===0) && (this.grid[i].row[j].color !== this.grid[i+1].row[j-1].color)){
      return;
    }
    diagCount++;
    if (diagCount === 3){
      console.log("Game Over!");
      return;
    }
  }
},

checkAntiDiagWin:function (x,y) {

},

render:function (colIndex, i) {
  this.gridOutput.innerHTML = '';
  this.controls.innerHTML = '';
  const resetButton = document.createElement('button');
  resetButton.textContent = 'New Game';
  resetButton.addEventListener('click', () => this.resetGrid());
  this.controls.appendChild(resetButton);
  this.grid.forEach((col, colIndex) => {
    const colContainer = col.toHtml();
    colContainer.style.width = `${this.cellWidth+2}px`;
    col.row.forEach(cell => {
      const element = cell.toHtml();
      colContainer.appendChild(element);
    });
    colContainer.addEventListener('click', () => this.makeMove(colIndex, this.player));
    this.gridOutput.appendChild(colContainer);
  });

  }

};
App.start();
