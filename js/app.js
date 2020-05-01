$(document).ready(function(){
    let heroes = getStorage();
    console.log(heroes);

    agregarTitulo(heroes['heroes'][0].title);
    mostrarTarjetas(heroes['heroes'][0].lista);

    function agregarTitulo(titulo){
        $('#heroes').append(`
        <div class="col-md-12">
            <h1> ${titulo} </h1>
        
        </div>
        `);

    }
    function mostrarTarjetas(tarjetas) {
        if (tarjetas) {
             $.each(tarjetas, function(position, item) {
                 console.log(item);
                 agregarTarjeta( position, item);
             });
        }
    }

})