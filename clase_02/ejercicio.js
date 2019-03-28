/**
 * Hay un evento en el objeto window llamado resize que se dispara cuando la ventana del navegador cambia de tamaño. Asignarle un callback para que a mayor de 700px el color de fondo del sitio sea rojo y azul cuando estemos a menos de ese ancho.
 * 
 * Hacer que la evaluaciòn de color de fondo se dispare no solo cada vez que se le cambia el tamaño a la pagina sino tambien en la primera carga de la misma
 * 
 * Crear un boton que al hacerle click genere un contador numérico comenzando por 0 y que se vea el resultado del contador en el DOM en un elemento <p>. Cada vez que el numero sobrepasa el 1, hacer que aparezca otro boton cuyo click resetee el contador y autodestruya el mismo boton
 * 
 */

let body = document.querySelector("body")

//window.onresize = cambiarFondo()
window.addEventListener("resize",cambiarFondo)

cambiarFondo()

function cambiarFondo(){
    //window.innerWidth
    //window.outerWidth === outerWidth
    if (outerWidth > 700) {
        //body.className = "rojo"
        body.style.backgroundColor = "red"
    }else{
        //body.className = "azul"
        body.style.backgroundColor = "blue"
    }
}