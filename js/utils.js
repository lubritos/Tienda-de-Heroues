$(document).ready(function() {

    $.getJSON("../api/heroes.json", function(data) {
        setStorage(data);
    });
  
});

function setStorage(heroes){
    localStorage.setItem('heroes', JSON.stringify(heroes));
}

function getStorage(){
    let item = localStorage.getItem('heroes');
    return JSON.parse(item);
  }
