const gameContainer = document.getElementById('gameContainer');
const scoreElement = document.getElementById('score');

const gridSize = 40;
const pixelSize = 10;
const initialSnakeLength = 5;

let snake = [{ row: 20, col: 1 }];
let food = { row: 10, col: 20 };
let direction = 'right';
let score = 0;

function createPixel(row, col, className) {
    const pixel = document.createElement('div');
    pixel.className = className;
    pixel.style.gridRow = row;
    pixel.style.gridColumn = col;
    return pixel;
}

function render() {
    // Clear the game container
    gameContainer.innerHTML = '';

    // Render the snake
    snake.forEach((segment, index) => {
        const { row, col } = segment;
        const className = index === 0 ? 'snakeBodyPixel' : 'snakeBodyPixel';
        gameContainer.appendChild(createPixel(row, col, className));
    });

    // Render the food
    const { row, col } = food;
    gameContainer.appendChild(createPixel(row, col, 'food'));

    // Update the score
    scoreElement.textContent = score;
}

function move() {
    const head = { ...snake[0] };

    // Update the head's position based on the current direction
    switch (direction) {
        case 'up':
            head.row--;
            break;
        case 'down':
            head.row++;
            break;
        case 'left':
            head.col--;
            break;
        case 'right':
            head.col++;
            break;
    }

    // Check if the snake hits the wall or itself
    if (
        head.row < 1 || head.row > gridSize ||
        head.col < 1 || head.col > gridSize ||
        snake.some(segment => segment.row === head.row && segment.col === head.col)
    ) {
        alert('Game Over!');
        resetGame();
        return;
    }

    // Check if the snake eats the food
    if (head.row === food.row && head.col === food.col) {
        // Increase the score
        score += 10;

        // Generate new food
        food = {
            row: Math.floor(Math.random() * gridSize) + 1,
            col: Math.floor(Math.random() * gridSize) + 1,
        };

        // Add a new segment to the snake
        snake.unshift(head);
    } else {
        // Move the snake by adding a new head and removing the tail
        snake.unshift(head);
        snake.pop();
    }

    // Render the updated game state
    render();
}

function resetGame() {
    snake = [{ row: 20, col: 1 }];
    food = { row: 10, col: 20 };
    direction = 'right';
    score = 0;
    render();
}

// Start the game loop
resetGame();
setInterval(move, 100);

// Listen for arrow key presses to change the direction
document.addEventListener('keydown', (e) => {
    switch (e.key) {
        case 'ArrowUp':
            if (direction !== 'down') direction = 'up';
            break;
        case 'ArrowDown':
            if (direction !== 'up') direction = 'down';
            break;
        case 'ArrowLeft':
            if (direction !== 'right') direction = 'left';
            break;
        case 'ArrowRight':
            if (direction !== 'left') direction = 'right';
            break;
    }
});
//your code hereconst gameContainer = document.getElementById('gameContainer');
const scoreElement = document.getElementById('score');

const gridSize = 40;
const pixelSize = 10;
const initialSnakeLength = 5;

let snake = [{ row: 20, col: 1 }];
let food = { row: 10, col: 20 };
let direction = 'right';
let score = 0;

function createPixel(row, col, className) {
    const pixel = document.createElement('div');
    pixel.className = className;
    pixel.style.gridRow = row;
    pixel.style.gridColumn = col;
    return pixel;
}

function render() {
    // Clear the game container
    gameContainer.innerHTML = '';

    // Render the snake
    snake.forEach((segment, index) => {
        const { row, col } = segment;
        const className = index === 0 ? 'snakeBodyPixel' : 'snakeBodyPixel';
        gameContainer.appendChild(createPixel(row, col, className));
    });

    // Render the food
    const { row, col } = food;
    gameContainer.appendChild(createPixel(row, col, 'food'));

    // Update the score
    scoreElement.textContent = score;
}

function move() {
    const head = { ...snake[0] };

    // Update the head's position based on the current direction
    switch (direction) {
        case 'up':
            head.row--;
            break;
        case 'down':
            head.row++;
            break;
        case 'left':
            head.col--;
            break;
        case 'right':
            head.col++;
            break;
    }

    // Check if the snake hits the wall or itself
    if (
        head.row < 1 || head.row > gridSize ||
        head.col < 1 || head.col > gridSize ||
        snake.some(segment => segment.row === head.row && segment.col === head.col)
    ) {
        alert('Game Over!');
        resetGame();
        return;
    }

    // Check if the snake eats the food
    if (head.row === food.row && head.col === food.col) {
        // Increase the score
        score += 10;

        // Generate new food
        food = {
            row: Math.floor(Math.random() * gridSize) + 1,
            col: Math.floor(Math.random() * gridSize) + 1,
        };

        // Add a new segment to the snake
        snake.unshift(head);
    } else {
        // Move the snake by adding a new head and removing the tail
        snake.unshift(head);
        snake.pop();
    }

    // Render the updated game state
    render();
}

function resetGame() {
    snake = [{ row: 20, col: 1 }];
    food = { row: 10, col: 20 };
    direction = 'right';
    score = 0;
    render();
}

// Start the game loop
resetGame();
setInterval(move, 100);

// Listen for arrow key presses to change the direction
document.addEventListener('keydown', (e) => {
    switch (e.key) {
        case 'ArrowUp':
            if (direction !== 'down') direction = 'up';
            break;
        case 'ArrowDown':
            if (direction !== 'up') direction = 'down';
            break;
        case 'ArrowLeft':
            if (direction !== 'right') direction = 'left';
            break;
        case 'ArrowRight':
            if (direction !== 'left') direction = 'right';
            break;
    }
});

