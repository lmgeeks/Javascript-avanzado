/**
 * Hay un evento en el objeto window llamado resize que se dispara cuando la ventana del navegador cambia de tamaño. Asignarle un callback para que a mayor de 700px el color de fondo del sitio sea rojo y azul cuando estemos a menos de ese ancho.
 * 
 * Hacer que la evaluaciòn de color de fondo se dispare no solo cada vez que se le cambia el tamaño a la pagina sino tambien en la primera carga de la misma
 * 
 * Crear un boton que al hacerle click genere un contador numérico comenzando por 0 y que se vea el resultado del contador en el DOM en un elemento <p>. Cada vez que el numero sobrepasa el 1, hacer que aparezca otro boton cuyo click resetee el contador y autodestruya el mismo boton
 * 
 */
/*
 //forma 1
 let body = document.querySelector("body")
 window.onresize = () => {
    // window.innerWidth
    // window.innerWidth == = outerWidth
    if(outerWidth > 700) {
        //forma 1 : body.className = 'rojo'
        //forma 2 :
        body.style.backgroundColor = 'red'
    }else{
        //forma 1 : body.className = 'azul'
        //forma 2 :
        body.style.backgroundColor = 'blue'
    }
 }*/
/*
let body = document.querySelector("body")
window.addEventListener("resize",cambiarFondo)

cambiarFondo()

 function cambiarFondo(){
    if(outerWidth > 700) {
        document.querySelector("body").style.backgroundColor = 'blue'
    }else{
        document.querySelector("body").style.backgroundColor = 'red'
    }
 }
 */



 //Clase 02

 //Node.addEventListener(evento String, calback Function [, fase Boolean])
 let tres = document.querySelector('#tres')
 let uno = document.querySelector('#uno')

 tres.addEventListener("click", e => {
     console.log("Click 3")
     e.stopPropagation()
 }/*,true*/)
 uno.addEventListener("click", e => {
    console.log("Click 1")
}/*,true*/)

let btn = document.querySelector("#crear")

btn.addEventListener("click",()=>{
    let dinamico = document.createElement("button")
    dinamico.innerText = "dinamico"
    dinamico.id = "dinamico"
    document.body.insertBefore(dinamico,uno)
})

document.addEventListener("click", e => {
    if(e.target.id== "dinamico"){
        console.log("Click Dinamico")
    }
})


/**
 * Fases de propagacion : son las formas en las que un evento se propaga a traves del DOM
 * 
 * Bubbling : ejecuta el callback del elemento target y va subiendo tantos nodos padres directos como haya en el DOM disparando callback's del mismo tipo
 * 
 * Capturing : Ejecuta el callback del elemento raiz del mismo tipo y va bajando tantos nodos hijos directos haya hasta llegar al elemento target
 * 
 * Event Object : El objeto evento se recibe como primer parametro un callback asociado a un evento y representa el evento que se acaba de disparar
 * 
 * Target : Es una referencia del elemento que originó un evento dado y su propagacion
 * 
 * Asignacion de eventos a elementos dinamicos
 * 
 */


 btn.addEventListener("mouseover",()=>{
     console.log("soy el hover de JS")
 })

 /**
  * Eventos de teclado
  */