const argv = require('./config/yargs').argv;
const colors = require('colors');
const porHacer = require('./por-hacer/por-hacer');

let comando = argv._[0];

switch (comando) {

    case 'crear':
        let tarea = porHacer.crear(argv.descripcion)
        console.log(tarea);
        break;

    case 'listar':
        let listado = porHacer.getListado();

        for (let tarea of listado) {
            console.log('====== Por Hacer ======='.green);
            console.log(tarea.descripcion);
            console.log('Estado: ', tarea.completado);
            console.log('========================'.green);
        }

        break;

    case 'actualizar':
        let actualizado = porHacer.actualizar(argv.descripcion, argv.completado);

        if (actualizado) {
            console.log('Tarea', argv.descripcion.green, 'actualizada');
        } else {
            console.log('Tarea', argv.descripcion.red, 'no coincide con tareas existentes');
        }
        break;

    case 'borrar':
        let borrado = porHacer.borrar(argv.descripcion);

        if (borrado) {
            console.log('Tarea', argv.descripcion.green, 'fue borrada!');
        } else {
            console.log('Tarea', argv.descripcion.red, 'no fue encontrada!');
        }

        break;

    default:
        console.log('Comando no es reconocido.');

}