import Pedidos from "@/app/start/pedidos/page";

export const revalidate = 60

export const dynamicParams = true

export const generateStaticParams = async () => {
    const response = await fetch("http://172.20.20.3:8001/pedidos/listar");
    const data = await response.json();

    return { props: { pedidos: data } };
};


const Page = async () => {
    const response = await fetch("http://172.20.20.3:8001/pedidos/listar");
    const pedidos = await response.json();

    return <Pedidos pedidos={pedidos} />
}

export default Page;