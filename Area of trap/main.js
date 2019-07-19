// The Calculator

// Event Listener
document.getElementById('calc-btn').addEventListener('click', calcTotal);

// Event Function
function calcTotal() {
    // Input
    let H = Number(document.getElementById('Height').value);
    let B1 = Number(document.getElementById('TB').value);
    let B2 = Number(document.getElementById('BB').value);

    // Process
    let Area = 0.5 * (B1 + B2) * H

    // Output
    document.getElementById('Output').innerHTML = Math.floor(Area)
}