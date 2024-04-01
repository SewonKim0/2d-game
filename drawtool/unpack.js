import { clearCell } from "./configuration.js"
import { BLOCK_SIZE, BLOCK_OFFSET } from "./configuration.js";

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
            const row = (entry.pos[0] / BLOCK_SIZE) - BLOCK_OFFSET
            console.log(entry, row)
        }
    }
    reader.readAsText(file)
});3