'use client'

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';


  const AuthContext = createContext({
      login: (authTokens) => {},
      logout: () => {},
  });


  export const AuthProvider = ({ children }) => {
    const router = useRouter();
    const [loading] = useState(true); 
    const [auth, setAuth] = useState(null); 
    const [clienteV, setClienteV] = useState({});
    const [pedidosV, setPedidosV] = useState({});
    const [carteraV, setCarteraV] = useState({});
   

    const login = useCallback(function (authTokens) {
        Cookies.set("authTokens", JSON.stringify(authTokens));
        localStorage.setItem("auth", JSON.stringify(authTokens))
        setAuth(authTokens);
    }, []);
  
    const logout = useCallback(function () {
      router.push("/");
      Cookies.remove('authTokens')
      localStorage.removeItem('auth');

      setAuth(null)
    }, []);

  
    //Guardar los datos del usuario para cuando recargue la pagina
    useEffect(() => {
      const storedAuth = localStorage.getItem('auth') || Cookies.get('authTokens');
      const storePedidos = localStorage.getItem("pedidoV");
      const storeCartera = localStorage.getItem("cartera");
      const storeCliente = localStorage.getItem("clienteV");

      if (storeCliente) {
        setClienteV(JSON.parse(storeCliente));
      }

      if (storePedidos) {
        setPedidosV(JSON.parse(storePedidos));
      }

      if (storeCartera) {
        setCarteraV(JSON.parse(storeCartera));
      }
      
      if (storedAuth) {
        setAuth(JSON.parse(storedAuth));
      }
    }, []);


    const value = useMemo(() => ({
        auth,
        clienteV,
        setClienteV, 
        pedidosV,
        setPedidosV, 
        carteraV,
        setCarteraV, 
        loading,
        login,
        logout,
    }), [auth, clienteV, pedidosV, carteraV, login, logout]);


    return (
        <AuthContext.Provider value={ value }>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);




