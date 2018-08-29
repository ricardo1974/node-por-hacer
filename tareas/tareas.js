let crear = (descripcion) => {
    return new Promise((resolve, reject) => {
        if (!isNaN(descripcion)) {
            reject('La descripción no es valida');
            return;
        }
        resolve(true)
    })

}

let actualizar = (descripcion, completado) => {
    return new Promise((resolve, reject) => {
        if (!isNaN(descripcion)) {
            reject('La descripcion no es valida');
            return;
        }
        resolve(true)
    })
}

module.exports = {
    crear,
    actualizar
}