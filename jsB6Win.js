let topWindow = window.top;
let myWindow = window;

function specsOfWindow() {
    let border = window.outerWidth / 2 - window.innerWidth / 2;
    let width = window.innerWidth * 0.875;
    let height = window.innerHeight * 0.625;
    let left = window.screenX + window.outerWidth * 0.1;
    let top = window.screenY + window.outerHeight - height * 1.275;
    return "width=" + width + ", height=" + height + ", top=" + top + ", left=" + left;
}

function openTermsWindow() {
    myWindow.close();
    let specs = specsOfWindow();
    myWindow = window.open("https://b6.hu/terms_of_use.htm", "myWindow", specs);
    myWindow.focus();
}

function openPolicyWindow() {
    myWindow.close();
    let specs = specsOfWindow();
    myWindow = window.open("https://b6.hu/privacy_policy.htm", "myWindow", specs);
    myWindow.focus();
}

function openFeedBackWindow() {
    myWindow.close();
    let specs = specsOfWindow();
    myWindow = window.open("https://b6.hu/feedback.htm", "myWindow", specs);
    myWindow.focus();
}

function closeWin() {
    window.close();
}

topWindow.addEventListener("focusin", function () {
    myWindow.close();
}); 
