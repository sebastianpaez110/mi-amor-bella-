let galeria = document.getElementById("galeria");

const CARPETA = "imagenes";
const EXTENSION = "jpeg";
const TOTAL_IMAGENES = 90;

for (let i = 1; i <= TOTAL_IMAGENES; i++) {
    let foto = document.createElement("img");

    // Tus imágenes se llaman: jpeg (1).jpeg, jpeg (2).jpeg, etc.
    foto.src = ${CARPETA}/jpeg (${i}).${EXTENSION};
    foto.alt = Foto ${i};

    foto.onerror = function () {
        console.log("No se encontró:", this.src);
        this.remove();
    };

    galeria.appendChild(foto);
}

window.addEventListener("load", () => {
    const musica = document.getElementById("musica");

    if (musica) {
        musica.play().catch(() => {
            document.addEventListener("click", () => {
                musica.play();
            }, { once: true });
        });
    }
});