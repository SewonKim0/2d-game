import { downloadJson } from "./downloadJson.js"
import { generateMap } from "./generateMap.js"
import { BLOCK_TYPES, BLOCK_TYPES_HANDLERS, BLOCK_TYPES_CLOSE_HANDLERS } from "./configuration.js"
import { generateGrid, generateTypesButtons } from "./initialGeneration.js"
const cells = generateGrid()
const blockTypeButtons = generateTypesButtons(BLOCK_TYPES)

// dynamic variables
let blockTypeIndex = 0
let prevMoveBlock = null

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

      // additional functionality
      if (BLOCK_TYPES_HANDLERS[blockType.name]) {
        prevMoveBlock = BLOCK_TYPES_HANDLERS[blockType.name](cell, prevMoveBlock)
      }
    } else {
      // additional functionality
      if (BLOCK_TYPES_CLOSE_HANDLERS[cell.className]) {
        prevMoveBlock = BLOCK_TYPES_CLOSE_HANDLERS[cell.className]({cells})
      }

      cell.style.backgroundColor = "white"
      cell.className = ""
    }
  })
}

// button click: select block type
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