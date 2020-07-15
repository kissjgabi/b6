
function addStyle(id, style) {
    let element = document.getElementById(id);
    element.classList.add(style);
}

function removeStyle(id, style) {
    let element = document.getElementById(id);
    element.classList.remove(style);
}

function toggleStyle(id, style) {
    let element = document.getElementById(id);
    element.classList.toggle(style);
}

function hasStyle(id, style) {
    let element = document.getElementById(id);
    return element.classList.contains(style);
}
