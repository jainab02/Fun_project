const button2 = document.getElementById('bocchi2');
let left = 40;
button2.addEventListener('mouseover', function () {
    if (left == 40) {
        left = 35;
    } else {
        left = 40;
    }
    this.style.left = left + '%';
});
if (window.matchMedia("(max-width: 700px)").matches) {
    let left = 30;
    button2.addEventListener('mouseenter', function () {
        if (left == 30) {
            left = 15;
        } else {
            left = 30;
        }
        this.style.left = left + '%';
    });
}

var dailog = document.getElementById("dialog");

function openModal() {

    dailog.showModal();
}

function closeModal() {
    dailog.close();
}