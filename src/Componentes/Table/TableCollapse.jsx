import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
          <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.id}
        </TableCell>
        <TableCell align="right">{row.quantidade}</TableCell>
        <TableCell align="right">{row.peso}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                Itens
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>ID</TableCell>
                    <TableCell>ID Produto</TableCell>
                    <TableCell align="right">Descrição</TableCell>
                    <TableCell align="right">Peso (Kg)</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.itens.map((historyRow) => (
                    <TableRow key={historyRow.nEstoque}>
                      <TableCell component="th" scope="row">
                        {historyRow.nEstoque}
                      </TableCell>
                      <TableCell>{historyRow.codigoBarra}</TableCell>
                      <TableCell align="right">{historyRow.descricao}</TableCell>
                      <TableCell align="right">{historyRow.peso}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    id: PropTypes.number.isRequired,
    quantidade: PropTypes.number.isRequired,
    peso: PropTypes.number.isRequired,
    itens: PropTypes.arrayOf(
      PropTypes.shape({
        codigoBarra: PropTypes.string.isRequired,
        descricao: PropTypes.string.isRequired,
        nEstoque: PropTypes.string.isRequired,
        peso: PropTypes.number.isRequired,
      }),
    ).isRequired,
  }).isRequired,
};

export default function CollapsibleTable(props) {
  const { rows } = props;

  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Nº Lote</TableCell>
            <TableCell align="right">Q. Itens</TableCell>
            <TableCell align="right">Peso Total(KG)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>{rows ? rows.map((row) => <Row key={row.id} row={row} />) : ''}</TableBody>
      </Table>
    </TableContainer>
  );
}

CollapsibleTable.propTypes = {
  rows: PropTypes.func.isRequired,
};
