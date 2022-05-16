import { React } from 'react';
import P from 'prop-types';
import TextField from '@mui/material/TextField';
// import { Grid } from '@material-ui/core';
import ComboForn from '../../../../Componentes/Combo/comboForn';
// import Divider from '@mui/material/Divider';
import { Box } from '@mui/system';
import useStyles from './style';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import Typography from '@mui/material/Typography';

const SelectItem = (props) => {
  const classes = useStyles();

  const dados = [];

  const handleChangeDados = (event) => {
    dados.push({ produto: event.target.value });
    let n = event.target.name.length - 7;
    let nItem = event.target.name.substring(event.target.name.length - n, event.target.name.length);
    const produto = event.target.value
      ? props.filterProdutos.filter((d) => {
          return d.id == event.target.value;
        })
      : '';

    document.getElementById('uvcompra' + nItem)
      ? (document.getElementById('uvcompra' + nItem).innerText = produto[0].ultimoPrecoCompra.toLocaleString('pt-br', {
          style: 'currency',
          currency: 'BRL',
        }))
      : '';
  };

  const handleChangeQuantidade = (event) => {
    let n = event.target.name.length - 10;
    let nItem = event.target.name.substring(event.target.name.length - n, event.target.name.length);
    var vOrcado = document.getElementById('vorcado' + nItem).value;
    var vTotal = document.getElementById('valorItemTotal' + nItem);
    var quantidade = event.target.value;
    var v = vOrcado > 0 ? vOrcado * quantidade : '';
    vTotal.innerText = v.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
    props.setvTotal(somaTotal());
  };

  const handleChangeOrcado = (event) => {
    let n = event.target.name.length - 7;
    let nItem = event.target.name.substring(event.target.name.length - n, event.target.name.length);
    var vOrcado = event.target.value;
    var vTotal = document.getElementById('valorItemTotal' + nItem);
    var quantidade = document.getElementById('quantidade' + nItem).value;
    var v = quantidade > 0 || quantidade == '' ? vOrcado * quantidade : '';
    vTotal.innerText = v.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
    props.setvTotal(somaTotal());
  };

  function somaTotal() {
    res = 0;
    for (let index = 1; index <= props.item.length; index++) {
      const element = document.getElementById('valorItemTotal' + index).innerText;
      var x = element.substring(3, element.length).replace('.', ',');
      var numero = x.toString().replace(',', '.');
      var res = parseFloat(res) + parseFloat(numero);
    }
    return res;
  }

  return (
    <Box>
      {' '}
      <Box sx={{ maxHeight: 380, overflow: 'auto' }}>
        <TableContainer>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow variant="head">
                <TableCell align="center">Id</TableCell>
                <TableCell align="center">Produto</TableCell>
                <TableCell align="center">Ultimo Valor (R$)</TableCell>
                <TableCell align="center">Valor Orçado(und)</TableCell>
                <TableCell align="center">Quantidade</TableCell>
                <TableCell align="center">Valor Total</TableCell>
                <TableCell align="center">Excluir</TableCell>
              </TableRow>
            </TableHead>
            <TableBody id="corpo">
              {props.item
                ? props.item.map((row) => {
                    return (
                      <TableRow id="linhas" className={classes.cab} hover tabIndex={-1} key={row}>
                        <TableCell align="left">{row}</TableCell>
                        <TableCell align="left">
                          <ComboForn
                            op={props.filterProdutos}
                            required
                            type="text"
                            id={'produto' + row}
                            name={'produto' + row}
                            autoComplete="Produto"
                            autoFocus
                            valor="id"
                            display="descricao"
                            onChange={handleChangeDados}
                          />
                        </TableCell>
                        <TableCell align="left">
                          <Typography id={'uvcompra' + row} name={'uvcompra' + row} variant="h6"></Typography>
                        </TableCell>
                        <TableCell align="left">
                          <TextField
                            id={'vorcado' + row}
                            onChange={handleChangeOrcado}
                            name={'vorcado' + row}
                            label="Valor Orçado"
                          />
                        </TableCell>
                        <TableCell align="left">
                          <TextField
                            id={'quantidade' + row}
                            onChange={handleChangeQuantidade}
                            name={'quantidade' + row}
                            type="number"
                          />
                        </TableCell>
                        <TableCell align="left">
                          <Typography
                            id={'valorItemTotal' + row}
                            name={'valorItemTotal' + row}
                            variant="h6"
                          ></Typography>
                        </TableCell>
                        <TableCell align="left">
                          <IconButton
                            aria-label="delete"
                            onClick={() => {
                              props.delete(row);
                            }}
                          >
                            <DeleteIcon />
                          </IconButton>
                        </TableCell>
                      </TableRow>
                    );
                  })
                : ''}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
};

export default SelectItem;

SelectItem.propTypes = {
  item: P.func.Required,
  filterProdutos: P.any.Required,
  delete: P.func.Required,
  setvTotal: P.any.Required,
};
