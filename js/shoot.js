const canvas = document.querySelector('canvas')
const ctx = canvas.getContext("2d")

// shoot frames, to be edited by index.js
export const shootObj = {
    frameCount: 0,
    mouseX: null,
    mouseY: null
}

// click: shoot
canvas.addEventListener('click', function(event) {
    const mouseX = event.clientX - canvas.getBoundingClientRect().left
    const mouseY = event.clientY - canvas.getBoundingClientRect().top
    
    shootObj.mouseX = mouseX
    shootObj.mouseY = mouseY
    shootObj.frameCount = 5
})