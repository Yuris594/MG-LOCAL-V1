"use client";

import { Alert, AlertTitle, Snackbar } from '@mui/material';
import React, { useEffect, useState } from 'react'

const Internet = () => {
    const [online, setOnline] = useState(undefined);

    useEffect(() => {
        setOnline(navigator.onLine);

        const handleOnline = () => setOnline(true);
        const handleOffline = () => setOnline(false);
    
        window.addEventListener("online", handleOnline);
        window.addEventListener("offline", handleOffline);
        return () => {
          window.removeEventListener("online", handleOnline);
          window.removeEventListener("offline", handleOffline);
        };
    }, []);

    if (online === undefined) return null;

  return (
    <>
        <Snackbar open={!online} anchorOrigin={{ vertical: 'top', horizontal: "center" }}>
            <Alert severity='error'>
                <AlertTitle>No Tiene Conexion</AlertTitle>
                    Verifique La Conexion De Internet
            </Alert>
        </Snackbar>

    </>
  )
}

export default Internet;
