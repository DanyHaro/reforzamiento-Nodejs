const descripcion = {
    demand: true,
    alias: 'd'
}
const completado = {
    default: true,
    alias: 'c'
}

let argv1 = require('yargs')
    .command('crear', 'Crear un elemento por hacer', {
        descripcion
    })
    .command('actualizar', 'Actualiza el estado de una tarea', {
        descripcion,
        completado
    })
    .command('eliminar', 'elimina una tarea', {
        descripcion
    })
    .help()
    .argv;

module.exports = {
    argv1: argv1
}