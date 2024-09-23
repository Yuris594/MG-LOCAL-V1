

const Iniciar = async (usuario, clave) => {
  const response = await fetch(`http://172.20.20.3:8001/usuarios/listar/${usuario}/${clave}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    if (response.status === 404) {
      console.log("Error");
      return [];
    }
  }
  return response.json();
  
};

export default Iniciar;