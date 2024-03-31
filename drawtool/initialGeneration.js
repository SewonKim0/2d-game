// generate grid
export function generateGrid() {
    const grid = document.querySelector(".grid")
    for (let row = 0; row < 20; row++) {
        for (let col = 0; col < 20; col++) {
            const cell = document.createElement("div")
            cell.dataset.row = row
            cell.dataset.col = col
            grid.appendChild(cell)
        }
    }

    // mark start cell
    const cells = document.querySelectorAll(".grid > div")
    cells[189].className = "start"

    return cells
}

// generate block types buttons
export function generateTypesButtons(BLOCK_TYPES) {
    const buttons = []
    const blockTypes = document.querySelector(".block-types")
    for (const blockType of BLOCK_TYPES) {
        const button = document.createElement("button")
        button.textContent = blockType.name
        button.style.backgroundColor = blockType.color
        button.className = "block-type"
        blockTypes.appendChild(button)
        buttons.push(button)
    }
    blockTypes.children[0].style.fontWeight = "bolder"
    blockTypes.children[0].style.borderWidth = "4px"

    return buttons
}