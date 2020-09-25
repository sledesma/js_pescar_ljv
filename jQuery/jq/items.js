
function plantilla(nombre, url) {
    return '<div class="item"><span class="titulo">'+nombre+'</span><span class="descripcion">Descripcion</span><span class="acciones"><a href="'+url+'">VER MAS</span></div>'
}

$.get('https://swapi.dev/api/people/', function(respuesta) {
    var datos = respuesta.results;

    for(var i = 0; i < datos.length; i++) {
        var actual = datos[i];
        var aPoner = plantilla(actual.name, 'https://swapi.dev/api/people/'+(i+1));
        var htmlActual = $('#lista').html();
        var htmlNuevo = htmlActual + aPoner;
        $('#lista').html(htmlNuevo);
    }
});

/*
function get(url, callback) {
    Hacer peticion HTTP GET a url
    Cuando reciba la respuesta:
        callback(respuesta)
}
*/



