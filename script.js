let galeria = document.getElementById("galeria");

for (let i = 1; i <= 90; i++) {
    let foto = document.createElement("img");
    foto.src = "imagenes/jpeg (" + i + ").jpeg";

    foto.onerror = function () {
        console.log("No se encontró:", this.src);
    };

    galeria.appendChild(foto);
}