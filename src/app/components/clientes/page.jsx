import Clientes from "@/app/start/clients/page";

const conseguirClientes = async () => {
    const response = await fetch("http://172.20.20.3:8001/clientes/listar", {
      method: "GET",
      headers: {
        "Content-Type" : "application/json"
      }
    });
    const data = await response.json()
    
    return (
        <Clientes clientes={data} />
    )
  }

export default conseguirClientes;