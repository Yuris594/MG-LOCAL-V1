/*
El contexto se crea para compartir estados y datos entre componentes 
sin necesidad de pasar props a traves de multiples niveles.
*/

'use client'

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import Cookies from 'js-cookie';


  const AuthContext = createContext({
      login: (authTokens) => {},
      logout: () => {},
  });


  export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState(null); 
    const [cliente, setCliente] = useState({});
    const [pedido, setPedido] = useState({}); 
    const [caja, setCaja] = useState({}); 
    const [loading, setLoading] = useState(true); 
   
    const login = useCallback(function (authTokens) {
        Cookies.set("authTokens", JSON.stringify(authTokens))
        setAuth(authTokens);
    }, []);
  
    const logout = useCallback(function () {
     Cookies.remove('authTokens')
    }, []);

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


    const value = useMemo(
        () => ({
            auth,
            cliente,
            setCliente,
            pedido,
            setPedido,
            caja,
            setCaja,
            loading,
            login,
            logout,
        }), [auth, cliente, pedido, caja, login, logout]);


    return (
        <AuthContext.Provider value={ value }>
            {children}
        </AuthContext.Provider>
    );
};


export const useAuth = () => useContext(AuthContext);