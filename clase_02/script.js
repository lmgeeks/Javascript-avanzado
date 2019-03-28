/**
 * Eventos de teclado
 */

let form = document.querySelector("form")
//NUNCA se usa el click de un boton de formulario
form.addEventListener("submit", e => {
    e.preventDefault()
    //console.log(form)
    //console.dir(e.target)
    let input = e.target[0].value
    console.log(input)
})

/**
 * Eventos con comportamiento por defecto
 * 
 * submit de un <form/>
 * click de un <a/>
 * drag y drop en el DOM
 * 
 * 
 * Los formularios guardan siempre una referencia de cada control que tengan adentro : 
 * 
 * input - select - textarea - button - fieldset
 * 
 * 
 * Mas eventos: 
 * 
 * keyup
 * keydown
 * keypress : Deprecado!
 * 
 */

let input = document.querySelector("input")
/*
input.addEventListener("keydown", e => {
    console.log(e)
    console.log(e.target.value)
})
*/
/*
input.addEventListener("keyup", e => {
    console.log(e)
    console.log(e.target.value)
})
*/
//focus : darle atencion a una etiqueta
//blur : dejar de darle atencion a una etiqueta
/*
let inputs = document.querySelectorAll("input")
inputs[0].addEventListener("blur",e=>{
    console.log(e.target.value)
})

form.addEventListener("blur",e=>{
    if (e.target.tagName == "INPUT") {
        console.log(e.target.value)
    }
},true)
*/

let archivo = document.querySelector("#archivo")
let select = document.querySelector("select")

archivo.addEventListener("change",e=>{
    //En un input de tipo file se busca la propiedad files, no su value
    console.log(e.target.files)
})

select.addEventListener("change",e=>{
    //En los selects se usa el value del select, no se seleccionan los <option>
    console.log(e.target.value)
})

let a = document.querySelector("a")
a.addEventListener("click",e=>{
    e.preventDefault()
    console.log("Click")
})