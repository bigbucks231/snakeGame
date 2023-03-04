const gridSize = 21;
const position = {x: 5, y: 8};


export function randomGridPosition() {
    return {
        x: Math.floor(Math.random() * gridSize) + 1,
        y:  Math.floor(Math.random() * gridSize) + 1
    }
}

export function outsideGrid(position, gridSize) {
    return (
        position.x < 0 ||
        position.x >= gridSize ||
        position.y < 0 ||
        position.y >= gridSize
      );
}
