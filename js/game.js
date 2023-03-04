import {update as updateSnake, draw as drawSnake, snakeSpeed, getSnakeHead, snakeIntersection} from '../js/snake.js';
import {update as updateFood, draw as drawFood} from '../js/food.js';
import { outsideGrid } from '../js/grid.js';

let lastRenderTime = 0;
let gameOver = false
const gameBoard = document.getElementById('gameBoard')


function main (currentTime) { 
    if (gameOver) {
        if (confirm('Lost! boy')){
            window.location = "/"
        }
        return
    }

    window.requestAnimationFrame(main)
    const secondsSinceLastRenderTime = (currentTime - lastRenderTime) / 1000
    if (secondsSinceLastRenderTime < 1 / snakeSpeed) return
    
    lastRenderTime = currentTime

    update()
    draw()
}

window.requestAnimationFrame(main)

function update () {
    updateSnake()
    updateFood()
    checkDeath()
}

function draw () {
    gameBoard.innerHTML = ''
    drawSnake(gameBoard)
    drawFood(gameBoard)
    
}

function checkDeath() {
    gameOver = outsideGrid((getSnakeHead())) || snakeIntersection()
    const snakeHead = getSnakeHead()
}
