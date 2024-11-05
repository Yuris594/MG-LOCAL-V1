"use client";

import jsPDF from "jspdf";
import "jspdf-autotable";
import { useEffect, useState } from "react";

const FacturaV = (clienteD, auth, articulos, total = {}, subTotal = {}) => {
  const [pdfDataUrl] = useState(null); 
  const [fecha, setFecha] = useState("");


  useEffect(() => {
    if (clienteD?.Fecha) {
      const obtenerFechaActual = () => {
        const fechaPedido = new Date(clienteD.Fecha);
        const dias = fechaPedido.getDate();
        const mes = fechaPedido.toLocaleString("es-CO", { month: "short" });
        const mesCapitalizado = mes.charAt(0).toUpperCase() + mes.slice(1);
        const anio = fechaPedido.getFullYear();
        const fechaFormateada = `${mesCapitalizado} ${dias}, ${anio}`;
        setFecha(fechaFormateada);
      };
      obtenerFechaActual();
    }
  }, [clienteD]);


  const generarPDF = () => {
    const pdf = new jsPDF("portrait", "pt", "letter");
    const columnsParaPDF = [
      { field: "FKcodigo_articles", headerName: "CODIGO", width: 150 },
      { field: "Nombre", headerName: "REFERENCIA", width: 350 },
      { field: "Cantidad", headerName: "CANTIDAD", width: 100 },
      { field: "Precio", headerName: "PRECIO", width: 100, },
      { field: "Descuento", headerName: "DESC", width: 90 },
      { field: "Iva", headerName: "IVA", width: 90 },
      { field: "Total", headerName: "TOTAL", width: 100, }
    ];

    const styles = {
      theme: "plain",
      tableWidth: "auto",
      cellWidth: "auto",
      margin: { top: 160, left: 12, right: 12 },
      styles: {
        cellPadding: 5,
        fontSize: 8,
      },
      lineColor: [200, 200, 200],
      lineWidth: 0.1,
      font: "times",
      fontStyle: "normal",
      textColor: [0, 0, 0],
      display: "flex",
      fontSize: 8
    };

    const dataToPrint = articulos.map((row) => {
      const rowData = [];
      columnsParaPDF.forEach((column) => {
        let value = row[column.field];
        
        if (column.field === "Precio" || column.field === "Total") {
          const precioRedondeado = Number(value).toFixed(0);
          value = parseFloat(precioRedondeado).toLocaleString(); 
        }
    
        rowData.push(value);
      });
      return rowData;
    });
      

    encabezado();
      pdf.autoTable({
        head: [columnsParaPDF.map((column) => column.headerName)],
        body: dataToPrint,
        styles,
        startY: 160,
        theme: "plain"
      });

    function encabezado() {
      pdf.setFontSize(13);
      pdf.addImage("/logo_factura.png", "PNG", 16, 30, 200, 25);
      pdf.setFontSize(8);
      pdf.setFont("courier", "italic");
      pdf.text(`NOMBRE VENDEDOR: ${auth.UserFullName}`, 400, 25);
      pdf.setFontSize(10);
      pdf.text("___________________________________________________________________________________________________________", 0, 60);
      pdf.setFont("times", "normal");
      pdf.setFontSize(12);
      pdf.text(`No. Pedido: ${clienteD?.NUMPED}`, 16, 85);
      pdf.text(`Fecha Pedido: ${fecha}`, 200, 85);
      pdf.text(`NIT: ${clienteD?.FKId_clientes}`, 450, 85);
      pdf.text(`R. Social: ${clienteD?.RazonSocial}`, 16, 98);
      pdf.text(`No. Factura: `, 16, 112);
      pdf.text(`Fecha Factura: `, 200, 112);
      pdf.text(`Documento1: ${clienteD?.Documento1}`, 16, 125);
      pdf.text(`Notas: ${clienteD?.Notas}`, 250, 125);
      pdf.setTextColor(255, 0, 0);
      pdf.text(`SubTotal: $${subTotal}`, 16, 137);
      pdf.text(`Total: $${total}`, 200, 137);
      pdf.setTextColor(0, 0, 0);
    }

    pdf.output('dataurlnewwindow');
  };

  return { generarPDF, pdfDataUrl };
}

export default FacturaV;