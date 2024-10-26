'use client'

import { format } from "date-fns";
import { useState } from "react";
import jsPDF from "jspdf";
import "jspdf-autotable";

  const useGenerarPDF = (valores, valores2, auth, caja = {}) => {
    const [pdfDataUrl, setPdfDataUrl] = useState(null);
    const fecha = format(new Date(), 'dd/MM/yyyy HH:mm:ss');

    const generarPDF = () => {
      const pdf = new jsPDF();
      const columnsParaPDF = [
        { field: 'DESCRIPCION', headerName: 'DESCRIPCIÓN', width: 500 },
        { field: 'PRECIO', headerName: 'PRECIO', width: 200 },
      ];

    const styles = {
      theme: "plain",
      tableWidth: "auto",
      lineColor: [200, 200, 200],
      lineWight: 0.1,
      font: "times",
      fontStyle: "normal",
      textColor: [0, 0, 0],
      display: "flex",
      cellWidth: "auto",
      fontSize: 8,
    };


    const dataToPrint = valores.map(row => {
      const rowData = [];
        columnsParaPDF.forEach(column => {
          let value = row[column.field];

          if (column.field === "PRECIO") {
            const precioRedondeado = Number(value).toFixed(0);
            value = parseFloat(precioRedondeado).toLocaleString();
          }
          rowData.push(value);
      });
    return rowData;
  });

  
    if (Array.isArray(valores2) && valores2.length > 0) {
      valores2.forEach((row) => {
          Object.entries(row).forEach(([key, value]) => {
              if (value !== 0 && value != null) {
                  const formattedKey = `${key.charAt(0).toUpperCase()}${key.slice(1).toLowerCase()}:`;

                  pdf.setFont("Helvetica", "bold");
                  pdf.text(formattedKey, 10, currentY);

                  pdf.setFont("Helvetica", "bold");
                  const valueText = `$${value.toLocaleString('es')}`;
                  pdf.text(valueText, 100, currentY);
                  currentY += 10;
              }
          });
      });
  } else {
      pdf.text("No hay información adicional disponible", 10, currentY);
      currentY += 10;
  }

  function encabezado() {
    pdf.setFontSize(10);
    pdf.setFont("times", "normal");
    pdf.text("Miguel Gomez & Cia", 10, 10);
    pdf.text("Tel: 777777", 10, 15);
    pdf.text("Email: miguelgomoz&cia@hotmail.com", 10, 20);
    pdf.text("Website: https://www.miguelgomez.com.co", 10, 25);
    pdf.text("---------------------------------------------------------------", 10, 30);

    // Título del recibo
    pdf.setFontSize(12);
    pdf.setFont("times", "bold");
    pdf.text(`Servicio: ${auth.PER_Nom || 'Desconocido'}`, 10, 40);
  }
   
  encabezado()
    pdf.autoTable({
      head: [columnsParaPDF.map(column => column.headerName)], 
      body: dataToPrint, 
      styles,
      startY: 150,
      theme:'plain',
      columnStyles: { cellWidth: "auto" },
    });
  
  function agregarContenido() {
    pdf.setFontSize(10);
    pdf.text(`TOTAL: ${caja.total}`, 350, pdf.autoTable.previous.finalY + 20);
    pdf.text(`EFECTIVO: ${valores2}`, 470, pdf.autoTable.previous.finalY + 20);
    pdf.text(`CAMBIO: ${clienteP.VENDEDOR}`, 12, pdf.autoTable.previous.finalY + 65);
    pdf.setFontSize(8);
    pdf.text(`MODIFICADO POR: ${clienteP.U_EDITADOPOR}`, 350, pdf.autoTable.previous.finalY + 65);
    pdf.text(`AUTORIZADO EN CARTERA POR: ${clienteP.VENDEDOR}`, 12, pdf.autoTable.previous.finalY + 80);
    pdf.text(`FECHA AUTORIZADO: ${clienteP.U_EDITADOPOR}`, 350, pdf.autoTable.previous.finalY + 80);
    pdf.text("___________________________________________________________________________________________________________________", 12, pdf.autoTable.previous.finalY + 90);
    pdf.text(`${fecha}`, 12, pdf.autoTable.previous.finalY + 103);
  }

      
        

        // Cambio
        currentY += 5;
        pdf.setFontSize(12);
        pdf.setFont("times", "bold");
        pdf.text("Cambio:", 10, currentY);
        const cambio = caja.cambio != null ? parseFloat(caja.cambio).toLocaleString('es') : '0.00';
        pdf.text(`$${cambio}`, 100, currentY);

        // Fecha
        currentY += 10;
        pdf.setFontSize(10);
        pdf.setFont("times", "normal");
        pdf.text(`Fecha: ${fecha}`, 10, currentY);

        // Generar PDF
        const dataUrl = pdf.output('datauristring');
        setPdfDataUrl(dataUrl);

        // Abrir PDF en una nueva ventana
        pdf.output('dataurlnewwindow');
    }

    return { generarPDF, pdfDataUrl };
}

export default useGenerarPDF;