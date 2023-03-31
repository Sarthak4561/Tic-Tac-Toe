export default class gameView{
    constructor(){
        console.log('init game view');
    }
    
    updateBoard(game){
        this.updateTurn(game);
        console.log('board within the game');
        console.log(game.board);
        for (let index = 0; index < game.board.length; index++) {
            // console.log(game.board[index]);

            const tile = document.querySelector(`.board-tile[data-index='${index}']`);
            // console.log(tile);
            tile.textContent = game.board[index];
        }
    }

    updateTurn(game){
        let playerx = document.querySelector('.player-x');
        let playero = document.querySelector('.player-o');
        playerx.classList.remove('active');
        playero.classList.remove('active');
    
        if(game.turn == 'X'){
            playerx.classList.add('active')
        }
        else{
            playerx.classList.add('active')
        }
    }
}