/**
 * function for testing purposes, log via gui
 * @param {String} msg Text to display
 */
export function display(msg) {
    let modal = document.createElement('div')
    modal.innerText = msg
    modal.style.position = 'fixed'
    modal.style.width = "50%"
    modal.style.height = "50%"
    modal.style.textAlign = "center"
    modal.style.backgroundColor = "pink"

    document.body.appendChild(modal)
    setTimeout(() => {
        modal.remove()
    }, 1000)
}