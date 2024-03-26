import { downloadJson } from "./downloadJson.js"
import { generateMap } from "./generateMap.js"

// block types data
const BLOCK_TYPES = [
  { name: "normal", color: "lightgray" },
  { name: "end", color: "lime" },
  { name: "kill", color: "red" }
]
let blockTypeIndex = 0

// generate block types buttons
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

// button click: grid cells listeners
for (const cell of cells) {
  cell.addEventListener("click", () => {
    // exclude start cell
    if (cell.className === "start") {
      return
    }

    // toggle block type
    const blockType = BLOCK_TYPES[blockTypeIndex]
    if (cell.className === "") {
      cell.className = blockType.name
      cell.style.backgroundColor = blockType.color
    } else {
      cell.className = ""
      cell.style.backgroundColor = "white"
    }
  })
}

// button click: select block type
const blockTypeButtons = document.querySelectorAll(".block-type")
for (const button of blockTypeButtons) {
  button.addEventListener("click", () => {
    // button selected bold
    for (const button of blockTypeButtons) {
      button.style.fontWeight = "normal"
      button.style.borderWidth = "3px"
    }
    button.style.fontWeight = "bolder"
    button.style.borderWidth = "4px"

    blockTypeIndex = BLOCK_TYPES.findIndex(blockType => blockType.name === button.textContent)
  })

}

// button click: generate map
const generateButton = document.querySelector(".generate-button")
generateButton.addEventListener("click", () => {
  const map = generateMap()
  downloadJson(map)
})