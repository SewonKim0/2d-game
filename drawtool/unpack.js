import { clearCell, BLOCK_SIZE, BLOCK_OFFSET, BLOCK_TYPES } from "./configuration.js";

const fileInput = document.querySelector(".unpack-button")

/* Unpack Map via JSON */
fileInput.addEventListener("change", () => {
    // get inputted JSON
    const file = fileInput.files[0];
    const reader = new FileReader();
    reader.onload = function(event) {
        const fileContent = event.target.result
        const json = JSON.parse(fileContent)

        // clear map
        const cells = document.querySelectorAll(".grid > div")
        for (const cell of cells) {
            if (cell.className === "start") {
                continue
            }
            clearCell(cell)
        }

        // fill cells from json
        for (const entry of json) {
            const row = (entry.pos[1] / BLOCK_SIZE) - BLOCK_OFFSET
            const col = (entry.pos[0] / BLOCK_SIZE) - BLOCK_OFFSET
            const type = entry.type
            const cell = document.querySelector(`.grid > div[data-row="${row}"][data-col="${col}"]`)

            cell.className = type
            cell.style.backgroundColor = BLOCK_TYPES.find(blockType => blockType.name === type).color
        }
    }
    reader.readAsText(file)
});3