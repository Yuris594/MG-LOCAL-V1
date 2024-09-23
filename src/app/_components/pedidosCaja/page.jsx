import PedidosCaja from "@/app/start/pedidos/pedidosCaja/page";


export const revalidate = 60

const PedCaja = async () => {
    const response = await fetch("http://172.20.20.3:8001/productos/listar_solo_para_mg", {
      method: "GET",
      headers: {
        "Content-Type" : "application/json"
      }
    });
    const data = await response.json()
    
    return (
        <PedidosCaja producto={data} />
    )
  }

export default PedCaja;