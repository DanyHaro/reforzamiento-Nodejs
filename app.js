// const argumento = require('yargs').argv;
const argumento = require('./config/yargs').argv1;
const porHacer = require('./por-hacer/por-hacer');

let comando = argumento._[0];

switch (comando) {
    case 'crear':
        console.log('Creando...');
        // console.log('LA TAREA ES: ' + argumento.descripcion); //apunta al atributo descripcion de cada argumento
        let tarea = porHacer.create(argumento.descripcion);
        porHacer.save();
        console.log(tarea);
        break;
    case 'listar':
        let lista = porHacer.getlista();
        for (const tarea of lista) {
            console.log('======LISTAS DE TAREAS========');
            console.log(`Descripción: `, tarea.description);
            console.log(`Estado: `, tarea.complete);
            console.log('==============================');
        }
        break;
    case 'actualizar':
        let actualizado = porHacer.update(argumento.descripcion);
        console.log('Estado modificado: ', actualizado);
        break;


    case 'eliminar':
        let borrado = porHacer.eliminar(argumento.descripcion);
        console.log("Borrado: " + borrado);
        break;

    default:
        console.log('Comando no reconocido');;
}