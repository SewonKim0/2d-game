/**
 * Renders the current game state with given data
 * Renders both player and blocks
 * @param {HTMLElement} canvas Canvas element of page
 * @param {*} ctx Context of canvas element
 * @param {Number[]} mousePosition Current mouse position [x, y]
 * @param {Object} player Player object
 * @param {Object[]} blocks Blocks array
 * @return {Object} Return data based on current state of map { end: bool }
 */
export function render(canvas, ctx, mousePosition, player, blocks) {
    const returnData = {}

    // board dims
    const boardWidth = canvas.getBoundingClientRect().width
    const boardHeight = canvas.getBoundingClientRect().height
    canvas.width = boardWidth
    canvas.height = boardHeight

    // render player
    const playerX = boardWidth / 2
    const playerY = boardHeight / 2
    ctx.beginPath()
    ctx.ellipse(playerX, playerY, 20, 20, 0, 0, Math.PI * 2)
    ctx.stroke()

    // render player shooter
    const dx = mousePosition[0] - playerX
    const dy = mousePosition[1] - playerY
    const theta = Math.atan2(dy, dx)
    const translation = [playerX, playerY]
    const rotation = theta - (Math.PI / 2)
    ctx.beginPath()
    ctx.ellipse(playerX, playerY, 10, 10, 0, 0, Math.PI * 2)
    ctx.fill()
    ctx.translate(translation[0], translation[1])
    ctx.rotate(rotation)
    ctx.fillRect(-5, 0, 10, 30)
    ctx.rotate(-rotation)
    ctx.translate(-translation[0], -translation[1])

    // render blocks
        // boardPos: (realPos - playerPos) + boardDim/2
    for (const block of blocks) {
        const blockX = (block.pos[0] - player.pos[0]) + (boardWidth / 2)
        const blockY = (block.pos[1] - player.pos[1]) + (boardHeight / 2)

        // end block
        if (block.type === "end") {
            ctx.beginPath()
            ctx.fillStyle = "lime"
            ctx.globalAlpha = 0.4
            ctx.fillRect(blockX, blockY, block.size[0], block.size[1])
            ctx.globalAlpha = 1

            // check if player is within end block
            if (playerX > blockX && playerX < blockX + block.size[0] &&
                playerY > blockY && playerY < blockY + block.size[1]) {
                returnData.end = true
            }
        }
        // normal block
        else {
            ctx.beginPath()
            ctx.strokeRect(blockX, blockY, block.size[0], block.size[1])
        }
    }

    return returnData
}