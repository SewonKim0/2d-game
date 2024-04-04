const canvas = document.querySelector('canvas')
const ctx = canvas.getContext("2d")

// click: shoot
canvas.addEventListener('click', function(event) {
    const mouseX = event.clientX - canvas.getBoundingClientRect().left
    const mouseY = event.clientY - canvas.getBoundingClientRect().top
    
    ctx.beginPath()
    ctx.strokeStyle = "red"
    ctx.lineWidth = 5
    ctx.moveTo(canvas.width / 2, canvas.height / 2)
    ctx.lineTo(mouseX, mouseY)
    ctx.stroke()
    console.log("SHOOT END") // TEST
})