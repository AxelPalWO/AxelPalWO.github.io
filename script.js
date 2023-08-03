const imagen = document.getElementById("twitter");

document.addEventListener("mouseenter", function(){
    if (imagen.src === ("./imágenes/580b57fcd9996e24bc43c53e.png")){
        imagen.src = "./imágenes/Twitter-Logo-tumb-1280x720.png"
    } else {
        imagen.src = "./imágenes/580b57fcd9996e24bc43c53e.png"
    }
});
document.addEventListener("mouseleave", function(){
    if (imagen.src === ("./imágenes/580b57fcd9996e24bc43c53e.png")){
        imagen.src = "./imágenes/580b57fcd9996e24bc43c53e.png"
    } else {
        imagen.src = "./imágenes/Twitter-Logo-tumb-1280x720.png"
    }
});