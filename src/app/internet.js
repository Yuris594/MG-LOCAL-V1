"use client";

import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2';

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

    const Internet = () => {
      Swal.fire({
        icon: "error",
        title: "No Tiene Conexión.",
        text: "Verifique la Conexión de Internet."
      })
    }

  return (
    <>
      <Internet />
    </>
  )
}

export default Internet;
