$(document).ready(function(){
    let heroes= getStorage();
    mostrarTarjetas(heroes['heroes'][1].lista);

    function mostrarTarjetas(tarjetas) {
        if (tarjetas) {
             $.each(tarjetas, function(position, item) {
                 console.log(item);
                 agregarTarjeta(position, item);
             });
        }
    }
})


