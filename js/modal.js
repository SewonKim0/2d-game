/**
 * Displays a modal on user's browser
 * @param {String} html Html string to display in modal
 */
export function modal(html) {
    let modal = document.createElement('div')
    modal.innerHTML = html
    modal.style.position = 'fixed'
    modal.style.width = "100%"
    modal.style.height = "100%"
    modal.style.display = "flex"
    modal.style.alignItems = "center"
    modal.style.justifyContent = "center"
    modal.style.fontWeight = "bold"
    modal.style.backgroundColor = "rgba(255, 255, 255, 0.5)"

    document.body.appendChild(modal)
    setTimeout(() => {
        modal.remove()
    }, 3000)
}