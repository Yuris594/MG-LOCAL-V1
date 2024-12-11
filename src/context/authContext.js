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
    const [caja, setCaja] = useState({}); 
    const [auth, setAuth] = useState(null); 
    const [pedido, setPedido] = useState({}); 
    const [cliente, setCliente] = useState({});
    const [clienteV, setClienteV] = useState({});
    const [pedidosV, setPedidosV] = useState({});
    const [carteraV, setCarteraV] = useState({});
   

    const login = useCallback(function (authTokens) {
        Cookies.set("authTokens", JSON.stringify(authTokens));
        localStorage.setItem("auth", JSON.stringify(authTokens))
        setAuth(authTokens);
    }, []);
  
    const logout = useCallback(function () {
     Cookies.remove('authTokens')
     localStorage.removeItem('auth');

     setAuth(null)
     router.push("/");
    }, []);

  
    //Guardar los datos del usuario para cuando recargue la pagina
    useEffect(() => {
      const storedAuth = localStorage.getItem('auth');
      const storedCaja = localStorage.getItem('caja');
      const storedPedido = localStorage.getItem('pedido');
      const storePedidos = localStorage.getItem("pedidoV");
      const storeCartera = localStorage.getItem("cartera");
      const storedCliente = localStorage.getItem('cliente');
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
      if (storedCliente) {
        setCliente(JSON.parse(storedCliente));
      }
      if (storedPedido) {
        setPedido(JSON.parse(storedPedido));
      }
      if (storedCaja) {
        setCaja(JSON.parse(storedCaja));
      }
    }, []);


    const value = useMemo(() => ({
        auth,
        cliente,
        setCliente,
        pedido,
        setPedido,
        caja,
        setCaja,
        clienteV,
        setClienteV, 
        pedidosV,
        setPedidosV, 
        carteraV,
        setCarteraV, 
        loading,
        login,
        logout,
    }), [auth, cliente, pedido, caja, clienteV, pedidosV, carteraV, login, logout]);


    return (
        <AuthContext.Provider value={ value }>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);







/*
'use client'

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import Cookies from 'js-cookie';
import { useSession } from "next-auth/react";


  const AuthContext = createContext({
     // login: (authTokens) => {},
     // logout: () => {},
    auth: null,
    setAuth: () => {},
    cliente: () => {},
    setCliente: () => {},
    pedido: () => {},
    setPedido: () => {},
    caja: () => {},
    setCaja: () => {},
  });


  export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState(null); 
    const [cliente, setCliente] = useState({});
    const [pedido, setPedido] = useState({}); 
    const [caja, setCaja] = useState({}); 
    const [loading] = useState(true); 
   
    /*const login = useCallback(function (authTokens) {
        Cookies.set("authTokens", JSON.stringify(authTokens));
        localStorage.setItem("auth", JSON.stringify(authTokens))
        setAuth(authTokens);
    }, []);
  
    const logout = useCallback(function () {
     Cookies.remove('authTokens')
     localStorage.removeItem('auth');

     setAuth(null)
    }, []);

    const { data: session } = useSession();

    useEffect(() => {
      if(session) {
        setAuth(session.user);
      } else {
        setAuth(null);
      }
    }, [session]);

    //Guardar los datos del usuario para cuando recargue la pagina
    useEffect(() => {
      //const storedAuth = localStorage.getItem('auth');
      const storedCliente = localStorage.getItem('cliente');
      const storedPedido = localStorage.getItem('pedido');
      const storedCaja = localStorage.getItem('caja');
      
      //if (storedAuth) {
      //  setAuth(JSON.parse(storedAuth));
      //}
      if (storedCliente) {
        setCliente(JSON.parse(storedCliente));
      }
      if (storedPedido) {
        setPedido(JSON.parse(storedPedido));
      }
      if (storedCaja) {
        setCaja(JSON.parse(storedCaja));
      }
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
        }), [auth, cliente, pedido, caja]);


    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);

*/