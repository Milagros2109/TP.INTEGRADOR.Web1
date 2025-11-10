let imagenes = ["./img/productos/reloj1.png", "./img/productos/auris1.png", "./img/productos/Celu4.png"];
let i = 0;
console.log(imagenes);
function anterior () {
    i--;
    if (i == -1) {
        i = imagenes.length - 1;
    }
    document.getElementById("img1").src = imagenes[i];
}

function siguiente () {
    i++;
    if (i == imagenes.length) {
        i = 0;
    }
    document.getElementById("img1").src = imagenes[i];
}