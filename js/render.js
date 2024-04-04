/**
 * Renders the current game state with given data
 * Renders both player and blocks
 * @param {Object} BLOCK_HANDLERS Object containing functions to render each block type
 * @param {HTMLElement} canvas Canvas element of page
 * @param {*} ctx Context of canvas element
 * @param {Number[]} mousePosition Current mouse position [x, y]
 * @param {Object} player Player object
 * @param {Object[]} blocks Blocks array
 * @param {Object} shootObj Data transfer object related to shoot data
 * @return {Object} Return data based on current state of map { end: bool }
 */
export function render(BLOCK_HANDLERS, canvas, ctx, mousePosition, player, blocks, shootObj) {
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

        // handle rendering for each block type
        BLOCK_HANDLERS[block.type]({
            ctx: ctx,
            playerX: playerX,
            playerY: playerY,
            blockX: blockX,
            blockY: blockY,
            block: block,
            returnData: returnData
        })
    }

    // render shooting
    if (shootObj.frameCount > 0) {
        let dx = shootObj.mouseX - (canvas.width / 2)
        let dy = shootObj.mouseY - (canvas.height / 2)
        let length = Math.sqrt(dx * dx + dy * dy)
        dx /= length
        dy /= length
        let extendedX = shootObj.mouseX + (dx * 1000)
        let extendedY = shootObj.mouseY + (dy * 1000)

        ctx.beginPath()
        ctx.strokeStyle = "black"
        ctx.lineWidth = 5
        ctx.moveTo(canvas.width / 2, canvas.height / 2)
        ctx.lineTo(extendedX, extendedY)
        ctx.stroke()

        shootObj.frameCount -= 1
    }

    return returnData
}