import { clearCell } from "./configuration.js"

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
    }
    reader.readAsText(file)
});3