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

        // get cell pos
        const row = Math.floor(cellIndex / 20)
        const col = cellIndex % 20

        // get cell type
        const classToType = {
            normal: undefined,
            end: "end"
        }
        const type = classToType[cell.className]

        const BLOCK_SIZE = 50
        const BLOCK_OFFSET = -9.5

        return {
            pos: [
                (col * BLOCK_SIZE) + (BLOCK_SIZE * BLOCK_OFFSET), 
                (row * BLOCK_SIZE) + (BLOCK_SIZE * BLOCK_OFFSET)
            ],
            size: [BLOCK_SIZE, BLOCK_SIZE],
            type: type
        }
    })
    map = map.filter(cell => cell !== null)

    return map
}