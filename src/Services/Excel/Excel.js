import * as XLSX from 'xlsx/xlsx.mjs';

export const exportFile = (dados, nome) => {
  /* convert state to workbook */
  const ws = XLSX.utils.aoa_to_sheet(dados);
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, 'Produto');
  /* generate XLSX file and send to client */
  XLSX.writeFile(wb, nome);
};
