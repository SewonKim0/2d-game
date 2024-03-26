// player movement handlers
const playerMvt = {
    up: false,
    down: false,
    left: false,
    right: false
}
document.addEventListener('keydown', (e) => {
    switch (e.key) {
        case 'w':
            playerMvt.up = true
            break
        case 'a':
            playerMvt.left = true
            break
        case 's':
            playerMvt.down = true
            break
        case 'd':
            playerMvt.right = true
            break
    }
})
document.addEventListener('keyup', (e) => {
    switch (e.key) {
        case 'w':
            playerMvt.up = false
            break
        case 'a':
            playerMvt.left = false
            break
        case 's':
            playerMvt.down = false
            break
        case 'd':
            playerMvt.right = false
            break
    }
})

/**
 * This function is responsible for updating the player's position in response to user input
 * Collision detection is also handled here
 * @param {Object} player Player object
 * @param {Object[]} blocks Blocks in the map
 * @param {number} deltaMultiplier Delta time multiplier
 */
export function updatePlayer(player, blocks, deltaMultiplier) {
    const speed = 3 * deltaMultiplier

    // up
    if (playerMvt.up) {
        // if within 20 px of horizontal bounds
        // if within 20 px of vertical collision (up, down)
        let collision = false
        for (const block of blocks) {
            if (block.type === "end") {
                continue
            }
            const x1 = block.pos[0] - 20
            const x2 = block.pos[0] + block.size[0] + 20
            if (player.pos[0] > x1 && player.pos[0] < x2) {
                const y1 = block.pos[1] - 20
                const y2 = block.pos[1] + block.size[1] + 28
                if (player.pos[1] > y1 && player.pos[1] < y2) {
                    collision = true
                }
            }
        }
        if (!collision) {
            player.pos[1] -= speed
        }
    }
    // down
    if (playerMvt.down) {
        let collision = false
        for (const block of blocks) {
            if (block.type === "end") {
                continue
            }
            const x1 = block.pos[0] - 20
            const x2 = block.pos[0] + block.size[0] + 20
            if (player.pos[0] > x1 && player.pos[0] < x2) {
                const y1 = block.pos[1] - 28
                const y2 = block.pos[1] + block.size[1] + 20
                if (player.pos[1] > y1 && player.pos[1] < y2) {
                    collision = true
                }
            }
        }
        if (!collision) {
            player.pos[1] += speed
        }
    }
    // left
    if (playerMvt.left) {
        let collision = false
        for (const block of blocks) {
            if (block.type === "end") {
                continue
            }
            const y1 = block.pos[1] - 20
            const y2 = block.pos[1] + block.size[1] + 20
            if (player.pos[1] > y1 && player.pos[1] < y2) {
                const x1 = block.pos[0] - 20
                const x2 = block.pos[0] + block.size[0] + 28
                if (player.pos[0] > x1 && player.pos[0] < x2) {
                    collision = true
                }
            }
        }
        if (!collision) {
            player.pos[0] -= speed
        }
    }
    // right
    if (playerMvt.right) {
        let collision = false
        for (const block of blocks) {
            if (block.type === "end") {
                continue
            }
            const y1 = block.pos[1] - 20
            const y2 = block.pos[1] + block.size[1] + 20
            if (player.pos[1] > y1 && player.pos[1] < y2) {
                const x1 = block.pos[0] - 28
                const x2 = block.pos[0] + block.size[0] + 20
                if (player.pos[0] > x1 && player.pos[0] < x2) {
                    collision = true
                }
            }
        }
        if (!collision) {
            player.pos[0] += speed
        }
    }
}