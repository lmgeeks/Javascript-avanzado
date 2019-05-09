/*
let a = document.createElement("a")
a.href = "https://www.youtube.com/watch?v=sRyafNyax2w"
//firefox no detecta el evento click a menos que se agregue al DOM

a.click()
*/

let button = document.getElementById("button")
button.addEventListener("click",()=>{
    notify()
})

function notify(){
    
    if (Notification.permission === "granted"){
        let notificacion = new Notification("Hola",properties)
    } else if(Notification.permission !== "denied"){
        Notification.requestPermission(function(permission){
            if(Notification.permission === "granted"){
                let notificacion = new Notification("Bienvenido",properties)
            }
        })
    }
     
}

var properties = {
    body : "tenes un mensaje",
    icon : "logo.jpg"
}

//service worker
window.addEventListener('load', () => {
    if (!('serviceWorker' in navigator)) {
      // service workers not supported 😣
      return
    }


    if("serviceWorker" in navigator){
        var notificacion = new Notification("Bienvenido",properties)
        navigator.serviceWorker.register("sw.js")
        .then(()=>console.log("se registro el sw"))
        .catch(err=>console.log(err))
    }

})