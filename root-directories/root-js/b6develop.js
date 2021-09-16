let isDevelop = true;

let msgBox1 = document.getElementById('msgbox1');
let msgBox2 = document.getElementById('msgbox2');
let msgBox3 = document.getElementById('msgbox3');

function b6messages(msg1, msg2, msg3) {
    if (!isDevelop) return;
    msgBox1.innerHTML = msg1;
    msgBox2.innerHTML = msg2;
    msgBox3.innerHTML = msg3;
}
