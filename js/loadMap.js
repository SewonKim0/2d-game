const bulletsLabel = document.querySelector(".bullets")

/**
 * THis function will load given map by editing the blocks array
 * @param {Object[]} blocks 
 * @param {String} mapName
 * @param {Object} shootObj
 */
export function loadMap(blocks, mapName, shootObj) {
    // fill blocks array to construct map
    blocks.length = 0
    fetch(`./maps/${mapName}.json`)
        .then(res => res.json())
        .then(json => {
            json.forEach(block => {
                blocks.push(block)
            })
        })

    // give bullets
    shootObj.bullets = 5
    bulletsLabel.textContent = `Bullets: ${shootObj.bullets}`
}