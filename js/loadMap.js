/**
 * THis function will load given map by editing the blocks array
 * @param {Object[]} blocks 
 * @param {String} mapName
 */
export function loadMap(blocks, mapName) {
    blocks.length = 0
    fetch(`./maps/${mapName}.json`)
        .then(res => res.json())
        .then(json => {
            json.forEach(block => {
                blocks.push(block)
            })
        })
}