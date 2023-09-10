import mysql from 'mysql'
let todos
//crear conexion
const conector = mysql.createConnection({
    host: 'localhost',
    user: 'estudiante',
    password: 'estudiante',
    database: 'agenda_contactos'

})

//funcion conectar,prueba si se conecto al server
const conectar = () => {
    conector.connect(err => { //agarra conector de mysql y lanza funcion connect
        if(err) throw err  //si hay error 
        console.log('conectado')
    })
}

const agregarContacto = (nombre) => {
    const sql = `INSERT INTO agenda (id_agenda, nombre_contacto) VALUES (${null}, "${nombre}")`
    conector.query(sql, function(err, result, filed){
        if(err) throw err
        console.log(result)
    })
}

const obtenerContactos = () => {
    const sql = 'SELECT * FROM agenda'
    conector.query(sql, function(err,result,filed){
        todos = result
    })
    return todos
}

//recibe un id
const borrarContacto = id => {
    //borrame todo lo de la agenda sobre este id
    const sql = `DELETE FROM agenda where id_agenda=${id}`
    conector.query(sql)
}

const editarContacto = (id, nuevoNombre) => {
    const sql = `UPDATE agenda SET nombre_contacto = "${nuevoNombre}" WHERE id_agenda = ${id}`
    conector.query(sql, function (err, result, filed) {
        if (err) throw err
        console.log(result)
    })
}


//exportar un objeto
// export {conectar, agregarContacto, obtenerContactos, borrarContacto}
export { agregarContacto, obtenerContactos, borrarContacto,editarContacto}