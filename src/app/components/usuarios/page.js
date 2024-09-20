import Usuarios from "@/app/start/usuarios/page";

export const revalidate = 60

const PageUsuario = async () => {
    const response = await fetch('http://172.20.20.3:8001/usuarios/listar');
    const data = await response.json();
    
return (
    <>
        <Usuarios usuarios={data} />
    </>
    )
};

export default PageUsuario;