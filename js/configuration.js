// levels: list of levels to load, represented by json files
export const levels = ["map", "level1", "level2"]

// block handlers: code to handle rendering of each block type
export const BLOCK_HANDLERS = {
    normal: ({ ctx, blockX, blockY, block }) => {
        ctx.beginPath()
        ctx.strokeRect(blockX, blockY, block.size[0], block.size[1])
    },
    end: ({ ctx, blockX, blockY, block, playerX, playerY, returnData }) => {
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
    },
    kill: ({ ctx, blockX, blockY, block, playerX, playerY, returnData }) => {
        ctx.beginPath()
        ctx.fillStyle = "red"
        ctx.globalAlpha = 0.4
        ctx.fillRect(blockX, blockY, block.size[0], block.size[1])
        ctx.globalAlpha = 1

        // check if player is within kill block
        if (playerX > blockX - 20 && playerX < blockX + block.size[0] + 20 &&
            playerY > blockY - 20 && playerY < blockY + block.size[1] + 20) {
            returnData.kill = true
        }
    }
}