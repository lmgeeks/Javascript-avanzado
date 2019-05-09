// Por obligacion cada SW tiene que volver a pedor como minimo su mismo cuerpo cada 24hs

// Event.waitUntil(Promise)
// Event.responseWith(Promise)


//install = corre automaticamente despues que el SW se registra
self.addEventListener("install",e=>{
    self.skipWaiting()
    e.waitUntil(
        caches.open("p1")
        .then(cache=>{
            //add = Agrega solo una
            //addAll = Agrega un array
            //put = Reemplaza una 
            //Se 
            cache.addAll([
                "/",
                "/app.js",
                "logo.jpg"
            ])
        })
    )
})

//activate = corre automaticamente despues que el SW se instala
self.addEventListener("activate",e=>{})

//fetch = corre por cada request que haga el cliente al servidor y que este le responde al cliente
self.addEventListener("fetch",e=>{
    e.respondWith(
        caches.match(e.request)      
        .then(recurso=>{
            return recurso || fetch(e.request).then(res=>res)
            
            /*corta valida
             return recurso ? recurso : fetch(e.request).then(res=>res)  
             */

            //larga valida
            /*
            if(recurso){
                return recurso
            } else {
                //fetch(e.request.url)
                return fetch(e.request)
                .then(res=>res)
            }
            */
        })
        // caches.open("p1")
        // .then(cache=>{
        //     //el metodo catch nunca entra en el catch ya que si no coincide....
        //     cache.match()
        // })
        // .catch(err=>console.log(err))
    )
})