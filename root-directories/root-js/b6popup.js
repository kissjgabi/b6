
function specsOfWindow() {
    let width = window.innerWidth * 0.875;
    let height = window.innerHeight * 0.625;
    let left = window.screenX + window.outerWidth * 0.1;
    let top = window.screenY + window.outerHeight - height * 1.275;
    return "width=" + width + ", height=" + height + ", top=" + top + ", left=" + left;
}

function openTermsWindow() {
    let specs = specsOfWindow();
    my_window = window.open("terms_of_use.php", "myWindow", specs);
    my_window.focus();
    my_window.onblur = function () {
        my_window.close();
    };
}

function openPolicyWindow() {
    let specs = specsOfWindow();
    my_window = window.open("privacy_policy.php", "myWindow", specs);
    my_window.focus();
    my_window.onblur = function () {
        my_window.close();
    };
}

function openFeedBackWindow() {
    let specs = specsOfWindow();
    my_window = window.open("feedback.php", "myWindow", specs);
    myWindowOpen = true;
    my_window.focus();
    my_window.onblur = function () {
        my_window.close();
    };
}
