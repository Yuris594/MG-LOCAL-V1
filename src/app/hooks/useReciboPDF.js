'use client'

import { useState } from "react";
import jsPDF from "jspdf";
import "jspdf-autotable";
import { format } from "date-fns";



 const useGenerarPDF = (valores, valores2, auth, caja = {}) => {
    const [pdfDataUrl, setPdfDataUrl] = useState(null);
    const fecha = format(new Date(), 'dd/MM/yyyy HH:mm:ss');

    const generarPDF = () => {
        const pdf = new jsPDF();
        pdf.setFontSize(6);
        pdf.text("............Miguel gomes & cia............", 20, 5);
        pdf.text("...................Tel:777777..................", 20, 7);
        pdf.text("..Miguelgomoz&cia@hotmail.com ..", 20, 9);
        pdf.text(".https://www.miguelgomez.com.co/.", 20, 11);
        pdf.text("-----------------------------------------------", 20, 13);
        pdf.text(`.Servicio-${auth.PER_Nom}.`, 20, 15);
        let currentY = 20;
        pdf.setFontSize(5);

        function productos() {
            for (let i = 0; i < valores.length - 4; i++) {
                const row = valores[i];
                pdf.text(`${row.DESCRIPCION}`, 3, currentY);
                pdf.text(`${row.PRECIO}`, 65, currentY);
                currentY += 2;
            }
        }

        function tipo() {
            valores2.forEach((row) => {
                Object.entries(row).forEach(([key, value],) => {
                    let text = `${key}:${value.toLocaleString('es')}`;
                    console.log(value);
                    if (value !== 0) {
                        pdf.text(text, 3, currentY);
                        currentY += 2
                    } });
                currentY += 2
            });
        }

        productos()
        currentY += 2;
        pdf.setFontSize(7);
        pdf.text(`Total-${caja.total}`, 54, currentY);

        tipo()
        pdf.text(`Cambio-${caja.cambio.toLocaleString('es')}`, 54, currentY );
        pdf.setFontSize(6);
        pdf.text(`${fecha}`, 27, currentY += 5);

        const dataUrl = pdf.output('datauristring');
        setPdfDataUrl(dataUrl);

        pdf.output('dataurlnewwindow');
    }

    return { generarPDF, pdfDataUrl };
}

export default useGenerarPDF;


