
console.log("Hola Mundo")
//register - install - activate
if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("sw.js")
    .then(()=>console.log("Se registro el Worker"))
    .catch(err=>console.error(err))
}

if(Notification.permission == "granted"){

    new Notification("Test",{
        body : "Body"
    })

}else{
    console.log("t")
    Notification.requestPermission(()=>{
        new Notification("Test",{
            body : "Body"
        })  
    })

}

/* Notification.requestPermission()
.then(res=>{
    if (res == "denied") {
        
    }
})
.catch(err=>{
    console.error(err)
}) */