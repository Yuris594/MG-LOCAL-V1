import Pedidos from "@/app/start/pedidos/page"


const PedidosApi = async () => {
    const response = await fetch("http://172.20.20.3:8001/pedidos/listar", {
        method: "GET",
        headers: { "Content-Type" : "application/json" }
    })
    const data = await response.json();

    return (
        <Pedidos  pedidos={data} />
    )

}

export default PedidosApi
