import Game from './game.js';
import gameView from './gameView.js';
let game = new Game();
let gameview = new gameView();

document.querySelector('.restart')
.addEventListener('click',()=>{
    onRestartClick();
})
gameview.updateBoard(game);

// console.log(game.board)
// console.log('My turn is ',game.turn);
// game.makeMove(3);
// gameview.updateBoard(game);

// game.nextTurn();
// game.makeMove(4);
// gameview.updateBoard(game);

// game.nextTurn();
// game.makeMove(0);
// gameview.updateBoard(game);

// game.nextTurn();
// game.makeMove(6);
// gameview.updateBoard(game);

// game.nextTurn();
// game.makeMove(2);
// gameview.updateBoard(game);

// game.nextTurn();
// game.makeMove(7);
// gameview.updateBoard(game);

let tiles = document.querySelectorAll(".board-tile");


tiles.forEach((tile)=>{
    tile.addEventListener("click",()=>{
        onTileClick(tile.dataset.index);
    })
})


function onTileClick(index){
    game.makeMove(index);
    
    gameview.updateBoard(game);
    game.nextTurn()
}

function onRestartClick(){
    game = new Game();
    gameview.updateBoard(game);
}

gameview.updateBoard(game);