import ClientesGlobal from "@/app/start/clients/clientesGlobal/page";

export const revalidate = 60

const conseguirClientes = async () => {
    const response = await fetch("http://172.20.20.3:8001/clientes/listar", {
      method: "GET",
      headers: {
        "Content-Type" : "application/json"
      }
    });
    const data = await response.json()
    
    return (
        <ClientesGlobal clientes={data} />
    )
  }

export default conseguirClientes;