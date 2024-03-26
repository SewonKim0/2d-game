import { updatePlayer } from "./js/player.js"
import { display } from "./js/display.js"
import { render } from "./js/render.js"
import { loadMap } from "./js/loadMap.js"

// setup canvas
let canvas = document.querySelector('canvas')
let ctx = canvas.getContext('2d')
let mousePosition = [0, 0]

// game data
let player = {
    pos: [0, 0]
}
let blocks = []
let levels = ["map", "level1", "level2"]
let levelIndex = 0
let currTime = 0

// function to render the state of game
function game() {
    // get delta multiplier (to account for frame speed)
    const deltaTime = (performance.now() - currTime)
    currTime = performance.now()
    const deltaMultiplier = deltaTime / 16

    // render game map & player
    const returnData = render(canvas, ctx, mousePosition, player, blocks)

    // handle end block collision
    if (returnData.end === true) {
        player.pos = [0, 0]
        
        levelIndex++
        loadMap(blocks, levels[levelIndex])
    }

    // handle kill block collision
    if (returnData.kill === true) {
        player.pos = [0, 0]
    }

    // update player pos (with collision detection)
    updatePlayer(player, blocks, deltaMultiplier)

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