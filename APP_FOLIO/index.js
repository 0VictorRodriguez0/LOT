import express from 'express'
// import {conectar, agregarContacto, obtenerContactos} from './src/mysql_conector.js'
import {agregarContacto, obtenerContactos, borrarContacto, editarContacto} from './src/mysql_conector.js'
let todos
//app con todos los metodos de express
const app = express()

//escuchame en el puerto 8000 y haz lo siguiente
app.listen('8000', function(){
    console.log('Aplicacion iniciada en el puerto 8000')
})

//CONFIGURACION PUG
app.set('views', './vistas') // las vistas las agarrara de la carpeta vistas
app.set('view engine', 'pug') //el view engine que utilizara para rendizar html usara pug

//configuracion de archivos estaticos
app.use(express.static('./vistas'))
app.use(express.static('./src'))
app.use(express.static('./css'))


app.get('/', function(req,res){
    // res.send('aplicacion iniciada todo va bien')
    // conectar()
    todos=obtenerContactos()
    res.render('index', {titulo:'Hola mundo', contactos:todos}) 
})

app.get('/agregar/:nombre', function(req,res){
    let nombre = req.params.nombre
    // let numero = req.params.numero
    agregarContacto(nombre)
    res.redirect('/')
    console.log(nombre)
})

app.get('/editar/:id/:nombre', function(req,res){
    let id = req.params.id
    let nombre = req.params.nombre
    // let numero = req.params.numero
    editarContacto(id,nombre)
    res.redirect('/')
    console.log(id,nombre)
})


app.get('/borrar/:id', function(req,res){
    //recogiendo el id que viene por la URL
    let id = req.params.id
    //recoge el id
    // console.log(id)
    borrarContacto(id)
    res.redirect('/')
})