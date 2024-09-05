
const Peticion = async (url, metodo, datoGuardar = "", archivos) => {
    
    try {
        let cargando = true; 

        let opciones = {
            method: "GET"
        }

        if (metodo === "GET" || metodo === "DELETE") {
            opciones = {
                method: metodo 
            }
        }

        if (metodo === "POST" || metodo === "PUT") {
           
            let body = JSON.stringify(datoGuardar); 
            if (archivos) {
                opciones = {
                    method: metodo,
                    body: datoGuardar 
                }
            } else {
                opciones.body = JSON.stringify(datoGuardar) 
                    
            }
        }

    const peticion = await fetch(url, opciones); 
        if (!peticion.ok) {
            return {
                error: 'Error en la solicitud Fetch',
                status: peticion.status, 
                cargando: false,
            };
        }

        const datos = await peticion.json(); 

        cargando = false; 
            return {
                datos, 
                cargando 
            };

        } catch (error) {
    
            return {
                datos: null, 
                cargando: false,
            };
        }
    }

export default Peticion;

