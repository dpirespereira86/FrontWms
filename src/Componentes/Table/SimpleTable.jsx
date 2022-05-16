import { React, useState } from 'react';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import P from 'prop-types';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import EditIcon from '@material-ui/icons/Edit';
import { Button } from '@material-ui/core';
import { useStyles } from './style';
import axios from 'axios';
import Alert from '@material-ui/lab/Alert';
import Collapse from '@material-ui/core/Collapse';
import { BootstrapTooltip } from '../ToolTip/Tooltip';

export function SimpleTable({ col, row, title, botao, setOpen, setDados, end }) {
  const classes = useStyles();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const [resultado, setResultado] = useState('');
  const [tipo, setTipo] = useState('');
  const [msg, setMsg] = useState('');

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const [columns] = [col];
  const [rows] = [row];
  const [tit] = [title];

  function del(id, end) {
    axios
      .delete(end + id, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: localStorage.getItem('token'),
        },
      })
      .then((res) => {
        console.log('deu certo' + res);
        setTipo('success');
        setMsg('Salvo com sucesso!');
        setResultado(true);
        window.setTimeout(setResultado, 5000);
        window.location.reload();
      })
      .catch((erro) => {
        setTipo('error');
        setMsg(erro.response.data['message'] ? erro.response.data['message'] : 'Não foi possivel deletar!');
        setResultado(true);
        window.setTimeout(setResultado, 5000);
      });
  }

  return (
    <>
      <Collapse className={classes.alert} in={resultado}>
        <Alert variant="filled" severity={tipo}>
          {msg}
        </Alert>
      </Collapse>
      <Paper className={classes.root}>
        <TableContainer className={classes.container}>
          <Table className={classes.tabela} stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow variant="head">
                {tit.map((column) => (
                  <TableCell
                    className={classes.titleCol}
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.length > 0
                ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                    return (
                      <TableRow className={classes.cab} hover tabIndex={-1} key={row.code}>
                        {columns.map((column) => {
                          return (
                            <TableCell className={classes.linha} key={column.id} align={column.align}>
                              {row[column]}
                            </TableCell>
                          );
                        })}
                        {botao ? (
                          <TableCell className={classes.linha}>
                            <BootstrapTooltip title="Editar" placement="left-start">
                              <Button
                                onClick={() => {
                                  setDados ? setDados(row) : '';
                                  setOpen(true);
                                }}
                                className={classes.icon}
                              >
                                <EditIcon className={classes.edite} />
                              </Button>
                            </BootstrapTooltip>
                            <BootstrapTooltip title="Deletar" placement="left-start">
                              <Button onClick={() => del(row.id, end)} className={classes.icon}>
                                <DeleteForeverIcon className={classes.apaga} />
                              </Button>
                            </BootstrapTooltip>
                          </TableCell>
                        ) : (
                          ''
                        )}
                      </TableRow>
                    );
                  })
                : ''}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          className={classes.indice}
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </>
  );
}

SimpleTable.propTypes = {
  row: P.any.isRequired,
  col: P.any.isRequired,
  title: P.any.isRequired,
  botao: P.any.isRequired,
  setOpen: P.any,
  setDados: P.any,
  end: P.string,
};
