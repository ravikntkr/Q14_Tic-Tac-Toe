import React from "react";

class TicTacToe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      board: Array(9).fill(null),
      currentPlayer: "X",
      gameStatus: "",
    };
  }

  handleClick(index) {
    const { board, currentPlayer, gameStatus } = this.state;

    // If the game is already won or the cell is already filled, return
    if (gameStatus || board[index]) {
      return;
    }

    // Create a copy of the board state
    const newBoard = [...board];
    newBoard[index] = currentPlayer;

    // Check for a winner
    const winner = this.calculateWinner(newBoard);

    // Update the state with new values
    this.setState({
      board: newBoard,
      currentPlayer: currentPlayer === "X" ? "O" : "X",
      gameStatus: winner ? `Player ${winner} wins!` : "",
    });
  }

  calculateWinner(board) {
    const winPositions = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < winPositions.length; i++) {
      const [a, b, c] = winPositions[i];
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }

    return null;
  }

  render() {
    const { board, gameStatus } = this.state;

    return (
      <div className="tic-tac-toe">
        <div className="main-area">
          {/* <h1>Tic Tac Toe</h1> */}
          <div className="board">
            {board.map((cell, index) => (
              <div
                key={index}
                className="cell"
                onClick={() => this.handleClick(index)}
              >
                {cell}
              </div>
            ))}
          </div>
          <div className="status">{gameStatus}</div>
        </div>
      </div>
    );
  }
}

export default TicTacToe;
