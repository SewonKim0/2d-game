/**
 * Setup of the reset button's functionality
 * Attaches event listener to the reset button
 * @param 
 */
export function setup(reset) {
    document.querySelector(".reset").addEventListener("click", () => {
        reset()
    })
}