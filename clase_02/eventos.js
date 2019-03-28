let tres = document.querySelector("#tres")
let uno = document.querySelector("#uno")
/*
tres.onclick = () => console.log("Click 1")
tres.onclick = () => console.log("Click 2")
*/

//Node.addEventListener(evento String,callback Function [, fase Boolean])
tres.addEventListener("click", e => {
    console.log("Click 3")
    e.stopPropagation()
}/*,true*/)

uno.addEventListener("click", e => {
    console.log("Click 1")
    e.stopPropagation()
}/*,true*/)




/**
 * Fases de Propagacion : Son las formas en las que un evento de JS se propaga a traves del DOM
 * 
 * Bubbling : Ejecuta el callback del elemento target y va subiendo tantos nodos padres directo como haya en el DOM disparando callbacks del mismo tipo
 * 
 * Capturing : Ejecuta el callback del elemento raiz del mismo tipo y va bajando tantos nodos hijos directo haya hasta llegar al elemento target disparando de todos el callback del mismo tipo si es que hubiera
 * 
 * 
 * Event Object : El objeto evento se recibe como primer parametro en un callback asociado a un evento y representa el evento que se acaba de disparar
 * 
 * Target : Es una referencia del elemento que origino un evento dado y su propagación
 * 
 * 
 * Asignacion de eventos a elementos dinamicos
 * 
 * 
 */

let btn = document.querySelector("#crear")

btn.addEventListener("click",()=>{
    let dinamico = document.createElement("button")
    dinamico.innerText = "dinamico"
    dinamico.id = "dinamico"
    //dinamico.addEventListener
    document.body.insertBefore(dinamico,uno)
})

/*
let dinamico = document.querySelector("#dinamico")
dinamico.addEventListener("click",()=>{})
*/

document.addEventListener("click",e=>{
    if(e.target.id == "dinamico"){
        console.log("Click Dinamico")
    }
})

//hover == mouseover 

btn.addEventListener("mouseover",()=>{
    console.log("Soy el hover de JS")
})