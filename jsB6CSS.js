let focusStyle = 'p_focus';

let footers = ['termsOfUse', 'privacyPolicy', 'feedBack'];

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

function grow(id) {
    for (let ii = 0; ii < footers.length; ii++) {
        if (footers[ii] == id) {
            addStyle(id, focusStyle);
        } else {
            if (hasStyle(footers[ii], focusStyle)) {
                removeStyle(footers[ii], focusStyle);
            }
        }
    }
}

function shrink(id) {
    if (hasStyle(id, focusStyle)) {
        removeStyle(id, focusStyle);
    }
}
