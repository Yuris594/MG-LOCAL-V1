/*
El contexto se crea para compartir estados y datos entre componentes 
sin necesidad de pasar props a traves de multiples niveles.
*/

'use client'
import { createContext, useEffect, useState } from 'react';


const AuthContext = createContext();


export const AuthProvider = ({ children }) => {

    const [auth, setAuth] = useState({}); 
    const [cliente, setCliente] = useState({});
    const [pedido, setPedido] = useState({}); 
    const [caja, setCaja] = useState({}); 
    const [loading, setLoading] = useState(true); 


    useEffect(() => {
      const user = localStorage.getItem("datos");
      const cliente = localStorage.getItem("clientTemp");
      const pedido = localStorage.getItem("pedidoTemp");
      const caja = localStorage.getItem("caja");
    
      if (user) { setAuth(JSON.parse(user))};
      if (cliente) { setCliente(JSON.parse(cliente))};
      if (pedido)  { setPedido(JSON.parse(pedido))};
      if (caja)  { setCaja(JSON.parse(caja))};

    }, []);


    return (
        <AuthContext.Provider
            value={{
                auth,
                setAuth,
                cliente,
                setCliente,
                pedido,
                setPedido,
                caja,
                setCaja,
                loading,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};


export default AuthContext;
