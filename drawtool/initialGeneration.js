// generate grid
export function generateGrid() {
    const grid = document.querySelector(".grid")
    for (let row = 0; row < 20; row++) {
        for (let col = 0; col < 20; col++) {
            const cell = document.createElement("div")
            grid.appendChild(cell)
        }
    }
}

// generate block types buttons
export function generateTypesButtons(BLOCK_TYPES) {
    const blockTypes = document.querySelector(".block-types")
    for (const blockType of BLOCK_TYPES) {
        const button = document.createElement("button")
        button.textContent = blockType.name
        button.style.backgroundColor = blockType.color
        button.className = "block-type"
        blockTypes.appendChild(button)
    }
    blockTypes.children[0].style.fontWeight = "bolder"
    blockTypes.children[0].style.borderWidth = "4px"
}