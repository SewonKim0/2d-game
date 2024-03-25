/**
 * This function will download the given json object into user's browser on client side
 * @param {Object} json The json obj to download
 */
export function downloadJson(json) {
    console.log("RUN1")
    const jsonStr = JSON.stringify(json)
    const blob = new Blob([jsonStr], {type: 'application/json'})
    const url = URL.createObjectURL(blob)

    const a = document.createElement('a')
    a.href = url
    a.download = 'generatedMap.json'
    a.click()
}