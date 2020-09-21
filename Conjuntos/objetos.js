/**
 * // Acceder a los elementos
        console.log(alumnos.Andrea); // objeto
        console.log(alumnos['Andrea']); // objeto
        console.log(alumnos[0]); // undefined
 */

var alumnos = {
    Andrea: {
        nota: 6,
        aprobada: true,
        obsrevaciones: 'ninguna'
    },
    Carla: {
        nota: 4,
        aprobada: false,
        obsrevaciones: 'ninguna'
    },
    Gonzalo: {
        nota: 6,
        aprobada: false,
        obsrevaciones: 'debe presentar carpeta'
    },   
};

var busqueda = prompt('Ingrese el alumno a buscar');
var alumnoObtenido = alumnos[busqueda];

if(alumnoObtenido != undefined) {
    alert('Alumno encontrado');
} else {
    alert('Alumno no encontrado');
}


