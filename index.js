import { updatePlayer } from "./js/player.js"
import { modal } from "./js/modal.js"
import { render } from "./js/render.js"
import { loadMap } from "./js/loadMap.js"
import { levels, BLOCK_HANDLERS, NO_COLLISION_BLOCKS } from "./js/configuration.js"

// setup canvas
let canvas = document.querySelector('canvas')
let ctx = canvas.getContext('2d')
let mousePosition = [0, 0]

// game data
let player = {
    pos: [0, 0]
}
let blocks = []
let levelIndex = 0
let currTime = 0

// function to render the state of game
function game() {
    // get delta multiplier (to account for frame speed)
    const deltaTime = (performance.now() - currTime)
    currTime = performance.now()
    const deltaMultiplier = deltaTime / 16

    // render game map & player
    const returnData = render(BLOCK_HANDLERS, canvas, ctx, mousePosition, player, blocks)

    // handle end block collision
    if (returnData.end === true) {
        player.pos = [0, 0]
        
        levelIndex++
        if (levelIndex >= levels.length) {
            modal("<h1>You win!</h1>")
            levelIndex = 0
        }
        loadMap(blocks, levels[levelIndex])
    }

    // handle kill block collision
    if (returnData.kill === true) {
        player.pos = [0, 0]
    }

    // update player pos (with collision detection)
    updatePlayer(NO_COLLISION_BLOCKS, player, blocks, deltaMultiplier)

    requestAnimationFrame(game)
}
requestAnimationFrame(game)
loadMap(blocks, levels[levelIndex])

// mouse position tracker
canvas.addEventListener('mousemove', function(event) {
    const rect = canvas.getBoundingClientRect()
    const mouseX = event.clientX - rect.left
    const mouseY = event.clientY - rect.top
    mousePosition = [mouseX, mouseY]
})