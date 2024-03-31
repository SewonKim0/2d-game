// levels: list of levels to load, represented by json files
export const levels = ["level1", "level2"]

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
    },
    moving: ({ ctx, blockX, blockY, playerX, playerY, block, returnData }) => {
        ctx.beginPath()
        ctx.fillStyle = "red"
        ctx.globalAlpha = 0.4
        ctx.fillRect(blockX, blockY, block.size[0], block.size[1])
        ctx.globalAlpha = 1

        // initialize block.forward and block.originalPos
        if (block.forward === undefined) {
            block.forward = true
        }
        if (block.originalPos === undefined) {
            block.originalPos = block.pos.slice()
        }

        // move block back and forth
        if (block.forward) {
            block.pos[0] += block.motion[0] / block.frameCount
            block.pos[1] += block.motion[1] / block.frameCount
            if ((block.motion[0] >= 0 && block.pos[0] > block.originalPos[0] + block.motion[0])
                || (block.motion[0] < 0 && block.pos[0] < block.originalPos[0] + block.motion[0])) {
                block.forward = false
            }
        } else {
            block.pos[0] -= block.motion[0] / block.frameCount
            block.pos[1] -= block.motion[1] / block.frameCount
            if ((block.motion[0] >= 0 && block.pos[0] < block.originalPos[0])
                || (block.motion[0] < 0 && block.pos[0] > block.originalPos[0])) {
                block.forward = true
            }
        }

        // check if player is within kill block
        if (playerX > blockX - 20 && playerX < blockX + block.size[0] + 20 &&
            playerY > blockY - 20 && playerY < blockY + block.size[1] + 20) {
            returnData.kill = true
        }
    }
}

// NO_COLLISION_BLOCKS: block types that do not collide with player
export const NO_COLLISION_BLOCKS = ["end", "kill", "moving"]