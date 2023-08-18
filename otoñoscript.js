const rootstyles = document.documentElement.style;
const button = document.getElementById("toggle");

button.addEventListener("change",function(e){
    if (button.checked){
        rootstyles.setProperty("--principal-oscuro","#5A0609");
        rootstyles.setProperty("--principal-claro","#E7C5B1");
        rootstyles.setProperty("--secundario-oscuro","#C64B0D");
        rootstyles.setProperty("--secundario-claro","#C98025");
    } else {
        rootstyles.setProperty("--principal-oscuro","#0F1C30");
        rootstyles.setProperty("--principal-claro","#668DC0");
        rootstyles.setProperty("--secundario-oscuro","#304A6E");
        rootstyles.setProperty("--secundario-claro","C0D0EF");
    }
})