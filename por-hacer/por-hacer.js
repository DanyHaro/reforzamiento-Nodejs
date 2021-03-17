const filesystem = require('fs');
let listadoPorHacer = [];


////FUNCIONES///

const saveDB = () => {
    let data = JSON.stringify(listadoPorHacer);

    filesystem.writeFile('database/data.json', data, (errores) => { //writeFile recibe los argumentos 1=ruta donde se guardara 2 = data
        if (errores) {
            throw new Error('no se encontro', errores)
        }

    })
}


///////////////

const cargarDatabase = () => {
    try {
        listadoPorHacer = require('../database/data.json');
    } catch (error) {
        listadoPorHacer = []
    }
}

////////////////

const getLista = () => {

    cargarDatabase();
    return listadoPorHacer;


}

////////////////////


const update = (descripcion, estado = true) => {
    cargarDatabase();
    let index = listadoPorHacer.findIndex(tarea => {
        return tarea.description === descripcion;
    });
    if (index >= 0) {
        listadoPorHacer[index].complete = estado
        saveDB();
        return true
    } else {
        return false;
    }
}

/////////////////////


const borrar = (descripcion) => {
    cargarDatabase()
    let index = listadoPorHacer.filter(tarea => {
        return tarea.description !== descripcion //Filtrame todo lo que sea diferente a "descripcion"
    })

    // console.log(index, " Index");
    // console.log(listadoPorHacer, " listado");

    if (index.length !== listadoPorHacer.length) {
        listadoPorHacer = index;
        saveDB();
        return true;
    } else {
        return false;
    }

}

///////////////////
const crear = (descripcion) => {
    cargarDatabase();
    let porhacer = {
        description: descripcion,
        complete: false
    }

    listadoPorHacer.push(porhacer);
    saveDB();
    return porhacer;
}
module.exports = {
    create: crear,
    save: saveDB,
    getlista: getLista,
    update: update,
    eliminar: borrar
}