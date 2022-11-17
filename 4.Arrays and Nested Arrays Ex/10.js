function ticTacToe(arr) {
  let board = [
    [false, false, false],

    [false, false, false],

    [false, false, false],
  ];
  let player = true;
  for (let coordinates of arr) {
    let [row, col] = coordinates.split(" ");
    if (board[row][col]) {
      console.log(`This place is already taken. Please choose another!`);
      continue;
    }
    let marker = player ? "X" : "O";
    board[row][col] = marker;
    if (checkIfWin(board, marker)) {
      console.log(`Player ${marker} wins!`);
      break;
    }
    if (checkIfFull(board)) {
      console.log("The game ended! Nobody wins :(");
      break;
    }

    player = !player;
  }
  console.log(board[0].join("\t"));
  console.log(board[1].join("\t"));
  console.log(board[2].join("\t"));
}

function checkIfWin(board, marker) {
  for (let i = 0; i < board.length; i++) {
    if (
      board[i][0] === marker &&
      board[i][1] === marker &&
      board[i][2] === marker
    ) {
      return true;
    } else if (
      board[0][i] === marker &&
      board[1][i] === marker &&
      board[2][i] === marker
    ) {
      return true;
    } else if (
      board[0][0] === marker &&
      board[1][1] === marker &&
      board[2][2] === marker
    ) {
      return true;
    } else if (
      board[0][2] === marker &&
      board[1][1] === marker &&
      board[2][0] === marker
    ) {
      return true;
    }
  }
  return false;
}

function checkIfFull(board) {
  for (let i = 0; i < board.length; i++) {
    if (board[i].includes(false)) {
      return false;
    }
  }
  return true;
}

ticTacToe([
  "0 1",

  "0 0",

  "0 2",

  "2 0",

  "1 0",

  "1 1",

  "1 2",

  "2 2",

  "2 1",

  "0 0",
]);
