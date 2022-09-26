# tictactoe


AIM: 
The aim of this project was to create an interactive tic tac toe game.


METHOD: 

Game board
- the game board was made using HTML button tag. Each grid cell has its own id with a corresponding coordinate with the first digit being the row and second being columns. Indexing for the rows and columsn start at 0. 

Game mechanics
- lines 15-69
    These lines will check the game status, as well as grab the coordinates from the ids of the button tags. It is also responsible for the swapping of players as well as inserting the X's and O's into the game board. It is also where the reset game mechanics is called.
- lines 72-115
    these lines are the check winner and draw mechanics. This function checks if the arrays of the gameGrid  (whether it be horizontal, vertical or diagonal) are equal to each other, without one of them being an empty string. The draw mechanic will work if all the elements in the array are non-empty but none of the winning conditions are met.
- lines 118-131
    These lines will update and keep the running score count, this is done using if statements and the ++ incrementor
- lines 134-152
    These lines form the reset function. When this is called inside lines 15-69, it resets the gameGrid, players whilst holding information about score counts and game mechanics.
