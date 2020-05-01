$(document).ready(function() {

    $.getJSON("../api/heroes.json", function(data) {
        setStorage(data);
    });

    $("#heroes").on('click', '.card' , function(){
        let idHeroe = $(this).data('id');
        seleccionarHeroe(idHeroe);
        window.location.href = "/detalle.html";
    });
  
});

function setStorage(heroes){
    localStorage.setItem('heroes', JSON.stringify(heroes));
}

function getStorage(){
    let item = localStorage.getItem('heroes');
    return JSON.parse(item);
}

function seleccionarHeroe(id){
    localStorage.setItem('heroe', id);
}
function getHeroe(){
    return localStorage.getItem('heroe');
}

function agregarTarjeta(id, item){
    console.log(item);
        $('#heroes').append(`
            <div class="col-md-4 mt-4">
                <div class="card" data-id="${id}">
                    <img src="${item.img}" class="card.img-top alt="...">
                    <div class="card-body text-center">
                     <h5>${item.nombre}</h5>
                     <span>${item.aparicion}</span>
                     <span>${item.casa}</span>
                    
                    </div>
            

            
            </div>

        `);
};
