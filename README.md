# tic-tac-toe
This is the second project in my 7-day project hackathon. It's a 1v1 tic tac toe game, with focus on user interface.

## User stories:

### :white_check_mark: MVP:

- [x] 1. **Display Initial Game Board:** As a player, I want to see an empty 3x3 grid representing the game board when I open the game.

- [x] 2. **Take Turns:** As a player, I want to take turns with another player (or against an AI) to place my symbol (X or O) on an empty cell of the game board.

- [x] 3. **Winning Condition:** As a player, I want the game to declare a winner when any player forms a line of three of their symbols horizontally, vertically, or diagonally.

- [x] 4. **Draw Condition:** As a player, I want the game to declare a draw when all cells on the board are filled and no player has won.

- [x] 5. **Display Player's Turn:** As a player, I want to see a visual indication of whose turn it is (displaying "Player X's Turn" or "Player O's Turn").

- [x] 6. **Undo Moves:**
As a player, I want to be able to undo my move during the game.

- [x] 7. **Reset the Game:** As a player, I want to be able to reset the game to its initial state to play another round.

![The web interface of the game](image.png)

### Stretch:

- [ ] 1. **Player Names:** As a player, I want to enter my name or choose a character name that will be displayed on the game screen.

- [ ] 2. **Score Tracking:** As a player, I want to see a score counter that keeps track of the number of wins for each player.

- [ ] 3. **Multiple Game Modes:**
As a player, I want to choose between playing against another player or playing against an AI opponent with varying levels of difficulty.

## To run the game
In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

## Thoughts

1. I learned how to replace an item in an `Array`. The `splice` method allows you to add/remove items from an array, and this enables you to replace an item with another by removing the old one and adding the new one in the same index. The syntax is as follows:
    ```
    array.splice(index, items_num, item1, ..., itemX)
    ```
    | parameter | description |
    | --- | --- |
    | `index` | the index starting from which you want to add/remove an items |
    | `items_num` | the number of items to be removed at `index` |
    | `item1, ..., itemX` | the items to be added at `index` |
