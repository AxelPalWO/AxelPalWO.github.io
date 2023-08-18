const imagen = document.getElementById("twitter");
const portfolio = document.getElementById("portfolio");

imagen.addEventListener("mousemove", function(){
    if (imagen.src === ("./imágenes/580b57fcd9996e24bc43c53e.png")){
        imagen.src = "./imágenes/580b57fcd9996e24bc43c53e.png"
    } else {
        imagen.src = "./imágenes/Twitter-Logo-tumb-1280x720.png"
    }
});
imagen.addEventListener("mouseout", function(){
    if (imagen.src === ("./imágenes/580b57fcd9996e24bc43c53e.png")){
        imagen.src = "./imágenes/Twitter-Logo-tumb-1280x720.png"
    } else {
        imagen.src = "./imágenes/580b57fcd9996e24bc43c53e.png"
    }
});
portfolio.addEventListener("click",function(e){
    window.location = "portfolio.html"
})