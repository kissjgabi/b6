let myWindow = window;

function openTermsWin() {
    myWindow.close();
    myWindow = window.open("terms_of_use.htm", "myWindow", "_blank");
}

function openPolicyWin() {
    myWindow.close();
    myWindow = window.open("privacy_policy.htm", "myWindow", "_blank");
}

function closeWin() {
    window.close();
} 