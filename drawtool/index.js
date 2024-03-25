import { downloadJson } from "./downloadJson.js"
import { generateMap } from "./generateMap.js"

// generate grid
const grid = document.querySelector(".grid")
for (let row = 0; row < 20; row++) {
  for (let col = 0; col < 20; col++) {
    const cell = document.createElement("div")
    grid.appendChild(cell)
  }
}

// mark start cell
const cells = document.querySelectorAll(".grid > div")
cells[189].className = "start"

// grid cells listeners
for (const cell of cells) {
  cell.addEventListener("click", () => {
    // exclude start cell
    if (cell.className === "start") {
      return
    }

    if (cell.className === "") {
        cell.className = "normal"
    } else if (cell.className === "normal") {
        cell.className = "end"
    } else if (cell.className === "end") {
        cell.className = ""
    }
  })
}

// generate map button
const generateButton = document.querySelector(".generate-button")
generateButton.addEventListener("click", () => {
  const map = generateMap()
  downloadJson(map)
})