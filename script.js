let galeria=document.getElementById("galeria");

for(let i=1;i<=90;i++){

let foto=document.createElement("img");

foto.src="imagenes/foto"+i+".jpg";

galeria.appendChild(foto);

}
