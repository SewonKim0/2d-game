// block-related data
export const BLOCK_SIZE = 64
export const BLOCK_OFFSET = -9.5
export const FRAME_COUNT = 200

// BLOCK_TYPES: the block types and their associated colors
export const BLOCK_TYPES = [
    { name: "normal", color: "lightgray" },
    { name: "end", color: "lime" },
    { name: "kill", color: "red" },
    { name: "moving", color: "rgba(255, 0, 0, 0.5)" }
]

// BLOCK_TYPES_HANDLERS: handlers for additional functionality when cell set to a specific block type
export const BLOCK_TYPES_HANDLERS = {
    moving: (cell, prevMoveBlock) => {
        // if start
        if (prevMoveBlock === null) {
            cell.textContent = "S"
            return cell
        }
        // if end
        else {
            cell.textContent = "E"
            const yDiff = cell.dataset.row - prevMoveBlock.dataset.row
            const xDiff = cell.dataset.col - prevMoveBlock.dataset.col
            prevMoveBlock.dataset.motion = JSON.stringify([xDiff * BLOCK_SIZE, yDiff * BLOCK_SIZE])
            return null
        }
    }
}