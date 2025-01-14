"use client";

import React, { useState } from "react";
import * as XLSX from "xlsx";
import { Button } from "@mui/material";

const UseImportoExcel = ({ onImportData }) => {
  const [fileName, setFileName] = useState("Subir Archivo");

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFileName(file.name);

      const reader = new FileReader();

      reader.onload = (event) => {
        try {
          const binaryStr = event.target.result;
          const workbook = XLSX.read(binaryStr, { type: "binary" });
          const sheetName = workbook.SheetNames[0];
          const sheet = workbook.Sheets[sheetName];
          const data = XLSX.utils.sheet_to_json(sheet);

          if (data.length) {
            // Enviar los datos procesados al componente padre
            onImportData(data);
          } else {
            console.error("El archivo Excel está vacío.");
          }
        } catch (error) {
          console.error("Error al procesar el archivo:", error);
        }
      };

      reader.readAsBinaryString(file);
    }
  };

  return (
    <>
      <label htmlFor="upload-file">
        <Button variant="outlined" color="success" component="span">
          {fileName}
        </Button>
      </label>
      <input
        type="file"
        id="upload-file"
        accept=".xlsx, .xls"
        style={{ display: "none" }}
        onChange={handleFileUpload}
      />
    </>
  );
};

export default UseImportoExcel;
