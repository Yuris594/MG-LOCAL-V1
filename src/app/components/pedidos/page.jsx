import Pedidos from "@/app/start/pedidos/page";

export const revalidate = 60

export default async function PedidosApi() {
  const response = await fetch("http://172.20.20.3:8001/pedidos/listar");
  const pedidos = await response.json();

  return (
    <div>
      <Pedidos pedidos={pedidos} />
    </div>
  )
}