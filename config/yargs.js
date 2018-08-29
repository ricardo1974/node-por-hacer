const descripcion = {
    demand: true,
    alias: 'd'
}

const completado = {
    alias: 'c',
    default: true,
    desc: 'Marca como completado la tarea'
}

const argv = require('yargs')
    .command('crear', 'Crear un elemento por hacer', { descripcion })
    .command('actualizar', 'Actualiza el estado completado de una tarea', {
        descripcion,
        completado
    })
    .command('borrar', 'Borrar una tarea', { descripcion })
    .command('listar', 'Mostrar registros existentes en archivo JSON')
    .help()
    .argv;

module.exports = {
    argv
}