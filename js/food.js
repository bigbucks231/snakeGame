import { onSnake, expandSnake } from '../js/snake.js'
import { randomGridPosition } from '../js/grid.js'

let food = getRandomFoodPosition()
const expansionRate = 5

export function update() {
    if(onSnake(food)) {
         expandSnake(expansionRate)
        food = getRandomFoodPosition()
    }
}

// this function creates the snake using the x and y axis
export function draw (gameBoard) {
        const foodElement = document.createElement('div')
        foodElement.style.gridRowStart = food.x
        foodElement.style.gridColumnStart = food.y
        foodElement.classList.add('food')
        gameBoard.appendChild(foodElement)
}

function getRandomFoodPosition() {
    let newFoodPosition 

    while (newFoodPosition == null || onSnake(newFoodPosition)) {
        newFoodPosition = randomGridPosition()
    }

    return newFoodPosition
}