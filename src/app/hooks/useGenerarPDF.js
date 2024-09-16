'use client'

import { useState } from 'react'
import JsBarcode from 'jsbarcode';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import { format } from 'date-fns';


const generarCodigoBarras = (texto) => {
    const canvas = document.createElement('canvas');
    JsBarcode(canvas, texto, { format: "CODE128" });
    return canvas.toDataURL("image/png"); 
  };

  const useGenerarPDF = (clienteP, productosP, sumaSaldoTotalDESC = {}) => {
    const [pdfDataUrl, ] = useState(null);
    const [fecha] = useState(format(new Date(), 'dd/MM/yyyy HH:mm:ss'));
    const codigoBarras = generarCodigoBarras(); 

    const generarPDF = () => {
        const pdf = new jsPDF('portrait', 'pt', 'letter');
        const columnsParaPDF = [
            { field: 'ARTICULO', headerName: 'Codigo', width: 200 },
            { field: 'DESCRIPCION', headerName: 'Referencia', width: 500 },
            { field: 'PRECIO',  headerName: 'Precio', width: 200,
                valueFormatter: (params) => {
                    const PRECIO = params.value;
                    const precioRedondeado = Number(PRECIO).toFixed(0);
                    return `${parseFloat(precioRedondeado).toLocaleString()}`;
                }, align: 'right',
            },
            { field: 'CPed', headerName: 'Cant', width: 200, type: 'number' },
            { field: 'DESP', headerName: 'Desp', width: 250, type: 'number' },
            { field: 'EMPA', headerName: 'EMPA', width: 200, type: 'number' },

        ];

        const styles = {
          theme: "grid",
          tableWidth: "auto",
          lineColor: [200, 200, 200],
          lineWight: 0.1,
          font: "helvetica",
          fontStyle: "normal",
          textColor: [0, 0, 0],
          display: "flex",
          cellWidth: "auto",
          fontSize: 8,
          tableLineColor: [200, 200, 200]
        };

        const dataToPrint = productosP.map(row => {
          const rowData = [];
            columnsParaPDF.forEach(column => {
                rowData.push(row[column.field]);
            });
            return rowData;
        });

        encabezado()
          pdf.autoTable({
              head: [columnsParaPDF.map(column => column.headerName)], 
              body: dataToPrint, 
              styles,
              startY: 148,
              theme:'plain',
          });

        function encabezado() {
          pdf.setFontSize(20);
          pdf.addImage(`${codigoBarras}`, 220, 10,130,60);
          
          pdf.setFontSize(13);
          pdf.text("PREFACTURA", 12, 30,);
            if(clienteP.IMPRESO==="S"){
          pdf.text("DUPLICADO", 12, 55,);
            }
          pdf.setFontSize(13);
          pdf.text("FACTURA N°________", 450, 30,);
          pdf.setFontSize(9);
          pdf.text(` ${clienteP.FECHA_PEDIDO}`, 500, 65,);
          pdf.setFontSize(13);
          pdf.text("FECHA", 450, 65,);
          pdf.text("________________________________________________________________________________", 12, 70,);
          pdf.setFontSize(9);
          pdf.text(`CLIENTE:    ${clienteP.NOMBRE_RAZON}`, 12, 85,);
          pdf.text(`NIT/CEDULA:    ${clienteP.CLIENTE}`, 12, 98,);
          pdf.text(`DOC2:    ${clienteP.PEDIDO}`, 200, 98,);
          pdf.text(`PEORI:    ${clienteP.PEDIDO}`, 350, 98,);
          pdf.text(`CIUDAD PPAL:    ${clienteP.CIUDAD}-${clienteP.DEPTO}`, 12, 112,);
          pdf.text(`TEL:    ${clienteP.PEDIDO}`, 340, 112,);
          pdf.text(`D'UNA:    ${clienteP.PEDIDO}`, 450, 112,);
          pdf.text(`DIRECCION Y CIDUAD DE DESPACHO:    ${clienteP.PEDIDO}`, 12, 125,);
          pdf.text(`SOLICITA:   ${clienteP.PEDIDO}`, 12, 139,);
        }

        function agregarContenido() {
          // Agrega el contenido del PDF aquí
          pdf.setFontSize(11);
          pdf.text(`TOTAL ITEMS: ${productosP.length}`, 350, pdf.autoTable.previous.finalY + 20);
          pdf.text(`Total: ${sumaSaldoTotalDESC}`, 470, pdf.autoTable.previous.finalY + 20);
          pdf.text("SEPARADO POR_____________________________________", 12, pdf.autoTable.previous.finalY + 20)
          pdf.text("REVISADO POR______________________________________", 12, pdf.autoTable.previous.finalY + 40);
          pdf.text("DESPACHADO POR______________________", 350, pdf.autoTable.previous.finalY + 40);
          pdf.setFontSize(9);
          pdf.text(`VENDEDOR: ${clienteP.VENDEDOR}`, 12, pdf.autoTable.previous.finalY + 65);
          pdf.text(`MODIFICADO POR: ${clienteP.U_EDITADOPOR}`, 350, pdf.autoTable.previous.finalY + 65);
          pdf.text(`AUTORIZADO EN CARTERA POR:: ${clienteP.VENDEDOR}`, 12, pdf.autoTable.previous.finalY + 80);
          pdf.text(`FECHA AUTORIZADO: ${clienteP.U_EDITADOPOR}`, 350, pdf.autoTable.previous.finalY + 80);
          pdf.text("___________________________________________________________________________________________________________________", 12, pdf.autoTable.previous.finalY + 90);
          pdf.text(`${fecha}`, 12, pdf.autoTable.previous.finalY + 103);
        }

        agregarContenido();

        pdf.output('dataurlnewwindow');
    }
  return { generarPDF, pdfDataUrl };
}


export default useGenerarPDF;