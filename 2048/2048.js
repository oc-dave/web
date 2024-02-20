var board;
var score = 0;
var rows = 4;
var cols = 4;
var timer;
var seconds = 0;

window.onload = function() {
    setGame();
}

function setGame() {
    board = [
        [2, 0, 0, 0],
        [0, 4, 0, 0],
        [0, 0, 8, 0],
        [0, 0, 2, 0]
    ]

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            let tile = document.createElement('div');
            tile.id = r.toString() + '-' + c.toString();
            let num = board[r][c];
            updateTile(tile, num);
            document.getElementById('board').append(tile);
        }
    }
}

function updateTile(tile, num) {
    tile.innerText = '';
    tile.classList.value = '';
    tile.classList.add('tile');
    if (num > 0) {
        tile.innerText = num;
        if (num <= 4096) {
            tile.classList.add('x' + num.toString());
        } else {
            tile.classList.add('x8192')
        }
    }
}

function showYouWinMessage() {
    var youWinMessage = document.getElementById('youWinMessage');
    youWinMessage.style.display = 'block';
}

function showYouLoseMessage() {
    var youLoseMessage = document.getElementById('youLoseMessage');
    youLoseMessage.style.display = 'block';
}


function slideLeft() {
    for (let r = 0; r < rows; r++) {
        for (let c = 1; c < cols; c++) {
            if (board[r][c] !== 0) {
                let currentC = c;
                while (currentC > 0 && board[r][currentC - 1] === 0) {
                    board[r][currentC - 1] = board[r][currentC];
                    board[r][currentC] = 0;
                    currentC--;
                }
                if (currentC > 0 && board[r][currentC - 1] === board[r][currentC]) {
                    board[r][currentC - 1] *= 2;
                    board[r][currentC] = 0;
                }
            }
        }
    }
    generateRandomNumber();
    updateBoard();
}

function slideRight() {
    for (let r = 0; r < rows; r++) {
        for (let c = cols - 2; c >= 0; c--) {
            if (board[r][c] !== 0) {
                let currentC = c;
                while (currentC < cols - 1 && board[r][currentC + 1] === 0) {
                    board[r][currentC + 1] = board[r][currentC];
                    board[r][currentC] = 0;
                    currentC++;
                }
                if (currentC < cols - 1 && board[r][currentC + 1] === board[r][currentC]) {
                    board[r][currentC + 1] *= 2;
                    board[r][currentC] = 0;
                }
            }
        }
    }
    generateRandomNumber();
    updateBoard();
}

function slideUp() {
    for (let c = 0; c < cols; c++) {
        for (let r = 1; r < rows; r++) {
            if (board[r][c] !== 0) {
                let currentR = r;
                while (currentR > 0 && board[currentR - 1][c] === 0) {
                    board[currentR - 1][c] = board[currentR][c];
                    board[currentR][c] = 0;
                    currentR--;
                }
                if (currentR > 0 && board[currentR - 1][c] === board[currentR][c]) {
                    board[currentR - 1][c] *= 2;
                    board[currentR][c] = 0;
                }
            }
        }
    }
    generateRandomNumber();
    updateBoard();
}

function slideDown() {
    for (let c = 0; c < cols; c++) {
        for (let r = rows - 2; r >= 0; r--) {
            if (board[r][c] !== 0) {
                let currentR = r;
                while (currentR < rows - 1 && board[currentR + 1][c] === 0) {
                    board[currentR + 1][c] = board[currentR][c];
                    board[currentR][c] = 0;
                    currentR++;
                }
                if (currentR < rows - 1 && board[currentR + 1][c] === board[currentR][c]) {
                    board[currentR + 1][c] *= 2;
                    board[currentR][c] = 0;
                }
            }
        }
    }
    generateRandomNumber();
    updateBoard();
}

function generateRandomNumber() {
    let availableSpaces = [];
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (board[r][c] === 0) {
                availableSpaces.push({ row: r, col: c });
            }
        }
    }

    if (availableSpaces.length > 0) {
        let randomIndex = Math.floor(Math.random() * availableSpaces.length);
        let randomSpace = availableSpaces[randomIndex];
        board[randomSpace.row][randomSpace.col] = Math.random() < 0.9 ? 2 : 4;
    }
}

function updateBoard() {
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            let tile = document.getElementById(r + '-' + c);
            let num = board[r][c];
            updateTile(tile, num);
        }
    }
}

document.addEventListener('keyup', (e) => {
    if (e.code == 'ArrowLeft') {
        slideLeft();
    } else if (e.code == 'ArrowRight') {
        slideRight();
    } else if (e.code == 'ArrowUp') {
        slideUp();
    } else if (e.code == 'ArrowDown') {
        slideDown();
    }
});
