$(document).ready(function(){
    let heroes= getStorage();
    let idHeroe = getHeroe();
mostrarHeroe(heroes['heroes'][1].lista[idHeroe]);

function mostrarHeroe(heroe){
        $('#heroe').append(`
        <div class="col-md-4">
        <img src="${heroe.img}">
        </div>
        <div clas="col-md-8">
        <h2>${heroe.nombre}</h2>
        </div>

        `)
}
})