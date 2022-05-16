import { React, useState } from 'react';
import PropTypes from 'prop-types';
import { /*Button,*/ Divider, Grid } from '@material-ui/core';
import { useStyles } from '../style';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import IconButton from '@mui/material/IconButton';
//import TableCadastroModulo from '../../../../Componentes/Table/tablecadastro';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import * as XLSX from 'xlsx/xlsx.mjs';
import axios from 'axios';
import { base } from '../../../../Services/API/enderecos';
//import TransitionAlerts from '../../../../Componentes/Alert/TransitionAlerts';
//import ErrorIcon from '@material-ui/icons/Error';
import TablePagination from '@material-ui/core/TablePagination';

var ro = {};

const make_cols = (refstr) => {
  let o = [],
    C = XLSX.utils.decode_range(refstr).e.c + 1;
  for (var i = 0; i < C; ++i) o[i] = { name: XLSX.utils.encode_col(i), key: i };
  return o;
};

const Upload = () => {
  const classes = useStyles();
  const [cols, setCols] = useState([]);
  const [openTable, setOpenTable] = useState(false);
  const [linha, setlinha] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  //const [g, setg] = useState(0);

  const SheetJSFT = [
    'xlsx',
    'xlsb',
    'xlsm',
    'xls',
    'xml',
    'csv',
    'txt',
    'ods',
    'fods',
    'uos',
    'sylk',
    'dif',
    'dbf',
    'prn',
    'qpw',
    '123',
    'wb*',
    'wq*',
    'html',
    'htm',
  ]
    .map((x) => `.${x}`)
    .join(',');

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleFile = (file) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      /* Parse data */
      const ab = e.target.result;
      const wb = XLSX.read(ab, { type: 'array' });
      /* Get first worksheet */
      const wsname = wb.SheetNames[0];
      const ws = wb.Sheets[wsname];
      /* Convert array of arrays */
      const data = XLSX.utils.sheet_to_json(ws, { header: 1 });
      /*sheet_to_json(ws, { header: 1 });*/
      /* Update state */
      setlinha(data);
      setCols(make_cols(ws['!ref']));
      setOpenTable(true);
    };
    reader.readAsArrayBuffer(file);
  };

  function trans() {
    var conte = 0;
    setRowsPerPage(linha.length - 1);
    Object.keys(linha).forEach((key) => {
      if (key > 0 && linha[key] != 0) {
        ro[conte] = Object.assign({
          codigoBarra: linha[key][0].toString(),
          sku: linha[key][1].toString(),
          descricao: linha[key][2],
          comprimento: parseFloat(linha[key][3]),
          largura: parseFloat(linha[key][4]),
          altura: parseFloat(linha[key][5]),
          peso: parseFloat(linha[key][6]),
          ultimoPrecoCompra: parseFloat(linha[key][7]),
          unidade: 1,
          estoqueMinimo: linha[key][9],
          estoqueMaximo: linha[key][10],
          quantidade: linha[key][11],
          prazoEntrega: linha[key][12],
          fornecedor: linha[key][13],
        });

        ro != null ? valida(ro[conte]) : '';
        conte = conte++;
      }
    });
  }

  function valida(dados) {
    var arr = Object.values(dados);
    var $ = document.getElementById('table');
    var line = $.getElementsByTagName('tr');
    if (arr[0].length != 13) {
      for (var i = 1; i < line.length; i++) {
        var row = $.rows[i];
        var coluna = row.getElementsByTagName('td');
        if (arr[0] == coluna[1].innerText) {
          $.rows[i].cells[0].innerHTML = 'Salvo...';
          $.rows[i].style.backgroundColor = 'green';
        }
      }
    }
    salvarMultiplos(dados);
  }

  function salvarMultiplos(x) {
    axios
      .post(base + 'v1/1/produtos', x, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: localStorage.getItem('token'),
        },
      })
      .then(() => {
        var $ = document.getElementById('table');
        var line = $.getElementsByTagName('tr');
        for (var i = 1; i < line.length; i++) {
          var row = $.rows[i];
          var coluna = row.getElementsByTagName('td');
          if (Object.values(x)[0] == coluna[1].innerText) {
            $.rows[i].cells[0].innerHTML = 'Salvo...';
            $.rows[i].style.backgroundColor = 'green';
          }
        }
      })
      .catch((error) => {
        var $ = document.getElementById('table');
        var line = $.getElementsByTagName('tr');
        for (var i = 1; i < line.length; i++) {
          var row = $.rows[i];
          var coluna = row.getElementsByTagName('td');
          if (Object.values(x)[0] == coluna[1].innerText) {
            $.rows[i].cells[0].innerHTML = 'Falhou...' + error.response.data['message'];
            $.rows[i].style.backgroundColor = 'red';
          }
        }
      });
  }

  return (
    <Grid container direction="row" spacing={1}>
      {/*<TransitionAlerts open={alert} msg={msg} tipo={tipo} />;*/}
      <Grid item xs={12}>
        <label className={classes.inputPersonalizado}>
          <IconButton aria-label="upload picture" component="span">
            <PhotoCamera className={classes.botaoSelecionar} />
          </IconButton>
          <span id="testo" className={classes.span}>
            Selecione um Arquivo
          </span>
          <img id="imagem" className={classes.imagem} />
          <input
            type="file"
            className={classes.inputFile}
            accept={SheetJSFT}
            onChange={(e) => {
              const files = e.target.files;
              if (files && files[0]) handleFile(files[0]);
            }}
          />
        </label>
        <Divider className={openTable == true ? classes.diverOpen : classes.diverClose} />
      </Grid>
      <Grid item xs={12}>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 800 }} id="table" className={classes.table} aria-label="customized table">
            <TableHead>
              {linha.map((r, i) =>
                i == 0 ? (
                  <TableRow className={classes.tableHead} key={i}>
                    <TableCell id="col" align="right">
                      status
                    </TableCell>
                    {cols.map((c) =>
                      r[c.key] == 'codigoBarra' || r[c.key] == 'descricao' || r[c.key] == 'sku' ? (
                        <TableCell key={c.key} align="right">
                          {r[c.key]}
                        </TableCell>
                      ) : (
                        ''
                      ),
                    )}
                  </TableRow>
                ) : (
                  ''
                ),
              )}
            </TableHead>
            <TableBody id="corpo">
              {linha.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((r, i) => {
                return i > 0 && r[0] != null ? (
                  <TableRow id="li" key={r}>
                    <TableCell id="li" align="right">
                      Aguardando...
                    </TableCell>
                    {cols.map((c, i) =>
                      i <= 2 ? (
                        <TableCell id="li" key={c.key} align="right">
                          {r[c.key]}
                        </TableCell>
                      ) : (
                        ''
                      ),
                    )}
                  </TableRow>
                ) : (
                  ''
                );
              })}
              ;
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={linha.length - 1}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          className={openTable == true ? classes.submit : classes.diverClose}
        />
      </Grid>
      <Grid item xs={2}>
        <button
          //type="submit"
          variant="contained"
          color="primary"
          name="teste"
          className={openTable == true ? classes.submit : classes.diverClose}
          onClick={trans}
        >
          Salvar
        </button>
        <Grid item xs={12}>
          <span id="total" className={openTable == true ? '' : classes.diverClose}></span>
        </Grid>
      </Grid>
    </Grid>
  );
};

Upload.propTypes = {
  props: PropTypes.any,
};

export default Upload;
