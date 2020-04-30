$(document).ready(function(){
    let heroes = getStorage();
    console.log(heroes);

    agregarTitulo(heroes['heroes'][0].title);

    function agregarTitulo(titulo){
        $('#heroes').append(`
        <div class="col-md-12">
            <h1> ${titulo} </h1>
        
        </div>
        `);

    }

})