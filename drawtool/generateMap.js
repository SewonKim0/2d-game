import { BLOCK_SIZE, BLOCK_OFFSET, FRAME_COUNT } from "./configuration.js"

/**
 * This function generates a map for the drawing
 * @returns {Object[]} The map block objects in an array
 */
export function generateMap() {
    let cells = document.querySelectorAll(".grid > div")
    cells = [...cells]

    // convert cells -> json map
    let map = cells.map((cell, cellIndex) => {
        // empty cells -> null
        if (cell.className === "" || cell.className === "start") {
            return null
        }
        // moving cells with no motion -> null
        if (cell.className === "moving" && cell.dataset.motion === undefined) {
            return null
        }

        // get cell pos
        const row = Math.floor(cellIndex / 20)
        const col = cellIndex % 20

        return {
            pos: [
                (col * BLOCK_SIZE) + (BLOCK_SIZE * BLOCK_OFFSET), 
                (row * BLOCK_SIZE) + (BLOCK_SIZE * BLOCK_OFFSET)
            ],
            size: [BLOCK_SIZE, BLOCK_SIZE],
            type: cell.className,
            motion: cell.dataset.motion ? JSON.parse(cell.dataset.motion) : null,
            frameCount: FRAME_COUNT
        }
    })
    map = map.filter(cell => cell !== null)

    return map
}