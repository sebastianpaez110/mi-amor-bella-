let galeria = document.getElementById("galeria");
const CARPETA = "imagenes";
const EXTENSION = "jpeg"; // cambia a "jpg" si tus archivos son .jpg
const TOTAL_IMAGENES = 90;

for (let i = 1; i <= TOTAL_IMAGENES; i++) {
    let foto = document.createElement("img");

    // Sin espacio antes del paréntesis, que suele ser la causa real del fallo
    foto.src = ${CARPETA}/jpeg${i}.${EXTENSION};

    foto.onerror = function () {
        console.log("No se encontró:", this.src);
        this.remove(); // opcional: quita del DOM la imagen rota
    };

    foto.alt = Foto ${i};
    galeria.appendChild(foto);
}