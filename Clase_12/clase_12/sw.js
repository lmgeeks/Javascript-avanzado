//Event.waitUntil(Promise)
//Event.respondWith(Promise)
//Cache API = Es la API que se encarga de guardar archivos asociados a una URL. No se pueden crear instancias de la interfaz sino que se obtienen cuando una particion del cache se abre

//Por obligacion cada SW tiene que volver a pedir como minimo su mismo cuerpo cada 24hs

//install = Corre automaticamente despues que el SW se registra
self.addEventListener("install",e=>{
    self.skipWaiting()
    e.waitUntil(
        caches.open("p1")
        .then(cache=>{
            //add = Agrega solo una
            //addAll = Agrega un array
            //put = Remplaza una
            //Se guardan solo URLs y se calculan despues del dominio y el puerto contando la barra 
            cache.addAll([
                "/",
                "/script.js",
                "/estilos.css"
            ])
        })
        .catch(err=>console.log(err))
    )
})

//activate = Corre automaticamente despues que el SW se instala
//self.addEventListener("activate",e=>{})

//fetch = Corre por cada request que haga el cliente al servidor y que este le responde al cliente
self.addEventListener("fetch",e=>{
    //Event.request => Request{}
    //Event.request.url => String 
    e.respondWith(
        caches.match(e.request)
        .then(recurso=>{
            console.log(recurso)
            return recurso || fetch(e.request)
            .then(res=>res)

            /* return recurso ? recurso : fetch(e.request)
            .then(res=>res) */

            /* if(recurso){
                return recurso
            }else{
                //fetch(e.request.url)
                return fetch(e.request)
                .then(res=>res)
            } */
        })
        //.catch() El metodo match NUNCA entra a su catch ya que si no coincide con nada dentro del cache,su resultado es undefined y no Error

        /*
        caches.open("p1")
        .then(cache=>{
            return cache.match()
        })
        .catch(...)
        */
    )
})

