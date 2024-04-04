const canvas = document.querySelector('canvas')

// shoot data, to be received by index.js
    // frameCount: number of frames to render shoot for
    // shoot: whether to shoot & break blocks
    // bullets: number of bullets remaining, resets each round
    // cooldown: whether shooting is on cooldown
    // firerate: amount of time between shots (ms)
export const shootObj = {
    bullets: 0,
    shoot: false,
    frameCount: 0,
    mouseX: null,
    mouseY: null,
    cooldown: false,
    firerate: 1000
}

// click: shoot
canvas.addEventListener('click', function(event) {
    if (shootObj.bullets > 0 && shootObj.cooldown === false) {
        const mouseX = event.clientX - canvas.getBoundingClientRect().left
        const mouseY = event.clientY - canvas.getBoundingClientRect().top
        shootObj.mouseX = mouseX
        shootObj.mouseY = mouseY
        shootObj.frameCount = 5

        shootObj.bullets -= 1
        shootObj.cooldown = true
        setTimeout(() => {
            shootObj.cooldown = false
        }, shootObj.firerate)
    }
})