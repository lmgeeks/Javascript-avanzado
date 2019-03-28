/**
 * Eventos Teclado
 */

 /**
  * Eventos con comportamiento por defecto en una pagina
  * 
  * submit de un <form/>
  * click de un <a href/>
  * drag and drop en el DOM
  * 
  * Los formularios guardan siempreuna referencia de cada control que se tenga adentro y se entiende porcontrol las etiquetas
  * 
  * input - select - textarea - button - fielset
  * 
  * Mas eventos : 
  * keyup
  * keydown
  * keypress : Deprecado!
  * 
  */

 //NUNCA se utiliza el click de un boton de formulario
 let form = document.querySelector("form")
 form.addEventListener("submit",e=>{
     e.preventDefault()
     let input = e.target[0].value
     console.log(input)

 })

/*
 let input = document.querySelector("input")
 input.addEventListener("keydown", e => {
     console.log(e)
     console.log(e.target.value)
 })
*/

/*
let input = document.querySelector("input")
input.addEventListener("keyup", e => {
    console.log(e)
    console.log(e.target.value)
})*/

//focus :  es darle atencion a la etiqueta
//blur : es dejar de darle atencion a una eqitueta
/*
let inputs = document.querySelectorAll("input")
inputs[0].addEventListener("blur",e=>{
    console.log(e.target.value)
})*/
/*
let formu = document.querySelector("form")
formu.addEventListener("focus", e => {
  e.target.style.background = "pink"
}, true)
formu.addEventListener("blur", e => {
  e.target.style.background = ""
}, true)

*/


let file = document.querySelector("#archivo")
let select = document.querySelector("#select")

file.addEventListener("change",e=>{
    //En un input de tipo file se busca la propiedad files, no su value
    console.log(e.target)
    console.log(e.target.files)
})

select.addEventListener("change",e=>{
    //En los selects se usa el value del select, no se señeccionan los <options>
    console.log(e.target)
    console.log(e.target.value)
})