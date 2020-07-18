let myWindow = window;
let myWindowOpen = false;
let topWindow = window.top;

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
    myWindow = window.open("terms_of_use.htm", "myWindow", "_blank", specs);
    myWindowOpen = true;
}

function openPolicyWindow() {
    myWindow.close();
    let specs = specsOfWindow();
    myWindow = window.open("privacy_policy.htm", "myWindow", "_blank", specs);
    myWindowOpen = true;
}

function openFeedBackWindow() {
    myWindow.close();
    let specs = specsOfWindow();
    myWindow = window.open("feedback.htm", "myWindow", "_blank", specs);
    myWindowOpen = true;
}

function closeWin() {
    window.close();
    myWindowOpen = false;
}

topWindow.addEventListener("focus", function () {
    if (myWindowOpen){
        myWindow.close();
        myWindowOpen = false;
    }
}); 

