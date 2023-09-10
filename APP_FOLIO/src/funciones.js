const nombre = document.querySelector('#nombre')
// const numero = document.querySelector('#numero')
const nombrec = document.querySelector('#nombrec')
// const numeroc = document.querySelector('#numeroc')
const numero_idc = document.querySelector('#numero_idc')

const btnAgregar = document.querySelector('#btn_agregar')
//devuelve array de todos los elementos que tenga la clase
const btnBorrar = document.getElementsByClassName("borrar")
const btnEditar = document.querySelector("#btn_editar")


btnAgregar.addEventListener('click', function(){
    window.location.href=`agregar/${nombre.value}`
})

btnEditar.addEventListener('click', function(){
    window.location.href=`editar/${numero_idc.value}/${nombrec.value}`
})

for(let i of btnBorrar){
    //cuando se pulse el boton rialice la función
    i.addEventListener('click',function(){
        //recoge el atributo
        let id = this.getAttribute('id')
        //llevar a una url llamda borrar/:id
        window.location.href =  `borrar/${id}`
    })
}
