const img1 = document.getElementById("img1");
const img2 = document.getElementById("img2");
const img3 = document.getElementById("img3");

function izquierda() {
    if (window.getComputedStyle(img1).display !== "none") {
        img1.style.display = "none";
        img3.style.display = "block";
    } else if (window.getComputedStyle(img2).display !== "none") {
        img2.style.display = "none";
        img1.style.display = "block";
    } else if (window.getComputedStyle(img3).display !== "none") {
        img3.style.display = "none";
        img2.style.display = "block";
    }
}

function derecha() {
    if (window.getComputedStyle(img1).display !== "none") {
        img1.style.display = "none";
        img2.style.display = "block";
    } else if (window.getComputedStyle(img2).display !== "none") {
        img2.style.display = "none";
        img3.style.display = "block";
    } else if (window.getComputedStyle(img3).display !== "none") {
        img3.style.display = "none";
        img1.style.display = "block";
    }
}

const prueba = document.getElementsByClassName("content");
console.log(prueba);

