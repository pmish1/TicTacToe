const gridcells = document.querySelectorAll('.gridcell')
let player = 'user1'
let gameGrid = [['', '', ''],
                ['', '', ''],
                ['', '', '']]
let gameOver = false
const userTurn = document.querySelector('.userTurn')
const results = document.querySelector('.results')
const scoreUser1 = document.querySelector('.score-user1')
const scoreUser2 = document.querySelector('.score-user2')
const reset = document.querySelector('.material-icons')
const turn = document.querySelector('.turn')


//event listeners, displays knots and crosses, calls functions
gridcells.forEach((cell) => {
    cell.addEventListener('click', (event) => {
        //records players moves into gameGrid
        const coordinates = (argument, person) => {
        let row = argument[0]
        let column = argument[1] 
        gameGrid[row][column] = person
        }
        if (gameOver && player === 'user1') {
            console.log('game over')

            scoreCount(player)
            resetGrid()
                                                    
        } else if (player === 'user1') {
            if (event.target.className === 'gridcell-clicked-O') {
                return
            } else {
                event.target.className = 'gridcell-clicked-X'
                event.target.textContent = 'X'
                coordinates(event.target.id.split('-'), player)
                checkWinner()
                userTurn.textContent = 'user2'
                player = 'user2'
                
            }
        } else if (gameOver && player === 'user2') { 
            console.log('game over')

            scoreCount(player) 
            resetGrid()
        } else if (player === 'user2') {
            if (event.target.className === 'gridcell-clicked-X') {
                return
            } else {
                if (gameOver) {
                    console.log('game over')
                    scoreCount()
                    
                } else {
                    event.target.className = 'gridcell-clicked-O'
                    event.target.textContent = 'O'
                    coordinates(event.target.id.split('-'), player)
                    checkWinner()
                    userTurn.textContent = 'user1'
                    player = 'user1'
                    
                }                                  
            }
        }

        }) 
        
    })


const checkWinner = () => {
    //check horizontal row 0
    if (gameGrid[0][0] === gameGrid[0][1] && gameGrid[0][1] === gameGrid[0][2] && gameGrid[0][0] != '') {  
        results.textContent = `${gameGrid[0][0]} won`
        gameOver = true
    //check horizontal row 1
    } else if (gameGrid[1][0] === gameGrid[1][1] && gameGrid[1][1] === gameGrid[1][2] && gameGrid[1][0] != '') {  
        results.textContent = `${gameGrid[1][0]} won`
        gameOver = true
    //check horizontal row 2
    } else if (gameGrid[2][0] === gameGrid[2][1] && gameGrid[2][1] === gameGrid[2][2] && gameGrid[2][0] != '') {  
        results.textContent = `${gameGrid[2][0]} won`
        gameOver = true
    //check verticle column 0
    } else if (gameGrid[0][0] === gameGrid[1][0] && gameGrid[1][0] === gameGrid[2][0] && gameGrid[0][0] != '') {  
        results.textContent = `${gameGrid[0][0]} won`
        gameOver = true
    //check vertcile column 1
    } else if (gameGrid[0][1] === gameGrid[1][1] && gameGrid[1][1] === gameGrid[2][1] && gameGrid[0][1] != '') {  
        results.textContent = `${gameGrid[0][1]} won`
        gameOver = true
    //check verticle column 2
    } else if (gameGrid[0][2] === gameGrid[1][2] && gameGrid[1][2] === gameGrid[2][2] && gameGrid[0][2] != '') {  
        results.textContent = `${gameGrid[0][2]} won`
        gameOver = true
    //check diagonal top left to bottom right
    } else if (gameGrid[0][0] === gameGrid[1][1] && gameGrid[1][1] === gameGrid[2][2] && gameGrid[0][0] != '') {  
        results.textContent = `${gameGrid[0][0]} won`
        gameOver = true
    //check diagonal top right to bottom left
    } else if (gameGrid[0][2] === gameGrid[1][1] && gameGrid[1][1] === gameGrid[2][0] && gameGrid[0][2] != '') {  
        results.textContent = `${gameGrid[0][2]} won`
        gameOver = true
    //check for draw    
    } else {    
        let flatArray = [].concat(...gameGrid)
        if (flatArray.every((element) => element.length > 0)) {
            results.textContent = `game was a draw`
            //console.log('draw')
            gameOver = true
        }
    }
    
}

//function for score count
let user1Score = 0
let user2Score = 0
const scoreCount = (user) => {
    if (player === 'user2') {  //display if user1 won
        user1Score++
        scoreUser1.textContent = `User1: ${user1Score}`
        return
    } else {  //display if user2 won
        user2Score++
        scoreUser2.textContent = `User2: ${user2Score}`
        return
    }

}

//reset grid
const resetGrid = () => {
    reset.addEventListener('click', (event) => {
        const resetClickedX = document.querySelectorAll('.gridcell-clicked-X')
        const resetClickedO = document.querySelectorAll('.gridcell-clicked-O')
        resetClickedX.forEach((clicked) => {
            clicked.textContent = ''
            clicked.className = 'gridcell'
        })
        resetClickedO.forEach((clicked) => {
            clicked.textContent = ''
            clicked.className = 'gridcell'
        })
        gameGrid = [['', '', ''],
                    ['', '', ''],
                    ['', '', '']]
        gameOver = false
        player = 'user1'
    })
}