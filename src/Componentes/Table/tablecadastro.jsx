// import { React, useState } from 'react';

// import { Lin } from '../../Estilos/styled';
// import { withStyles, makeStyles } from '@material-ui/core/styles';
// import Paper from '@material-ui/core/Paper';
// import Table from '@material-ui/core/Table';
// import TableBody from '@material-ui/core/TableBody';
// import TableCell from '@material-ui/core/TableCell';
// import TableContainer from '@material-ui/core/TableContainer';
// import TableHead from '@material-ui/core/TableHead';
// import TablePagination from '@material-ui/core/TablePagination';
// import TableRow from '@material-ui/core/TableRow';

// const StyledTableCell = withStyles((theme) => ({
//   head: {
//     backgroundColor: theme.palette.background.paper,
//     color: theme.palette.secondary.contrastText,
//     paddingTop: 1,
//     paddingBottom: 1,
//     borderBottom: 3,
//   },
//   body: {
//     fontSize: 14,
//     padding: 5,
//   },
// }))(TableCell);

// const StyledTableRow = withStyles((theme) => ({
//   root: {
//     '&:nth-of-type(odd)': {
//       backgroundColor: theme.palette.action.hover,
//     },
//   },
// }))(TableRow);

// const useStyles = makeStyles((theme) => ({
//   table: {
//     minWidth: 600,
//   },
// }));

// const TableCadastroModulo = ({ filtramod }) => {
//   const classes = useStyles();
//   const [page, setPage] = useState(0);
//   const [rowsPerPage, setRowsPerPage] = useState(30);

//   const handleChangePage = (event, newPage) => {
//     setPage(newPage);
//   };

//   const handleChangeRowsPerPage = (event) => {
//     setRowsPerPage(+event.target.value);
//     setPage(0);
//   };

//   return (
//     <div>
//       <TableContainer component={Paper}>
//         <Table className={classes.table} aria-label="sticky table">
//           <TableHead>
//             <TableRow>
//               <StyledTableCell align="center">Serial</StyledTableCell>
//               <StyledTableCell align="center">S.Serial</StyledTableCell>
//               <StyledTableCell align="center">Modelo</StyledTableCell>
//               <StyledTableCell align="center">Proprietárrio</StyledTableCell>
//               <StyledTableCell align="center">Operação</StyledTableCell>
//               <StyledTableCell align="center">D.Contrato</StyledTableCell>
//               <StyledTableCell align="center">Fronecedor</StyledTableCell>
//               <StyledTableCell align="center">Vigência</StyledTableCell>
//               <StyledTableCell align="center">D.Inicio</StyledTableCell>
//               <StyledTableCell align="center">Iccid</StyledTableCell>
//               <StyledTableCell align="center">Valor</StyledTableCell>
//               <StyledTableCell align="center">Config</StyledTableCell>
//               <StyledTableCell align="center">Local</StyledTableCell>
//               <StyledTableCell align="center">D.Inst.</StyledTableCell>
//               <StyledTableCell align="center">D.Ret.</StyledTableCell>
//               <StyledTableCell align="center">Prestador</StyledTableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {filtramod.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
//               return (
//                 <StyledTableRow key={row.serial}>
//                   <StyledTableCell align="center" component="th" scope="row">
//                     <Lin href="#">{row.serial}</Lin>
//                   </StyledTableCell>
//                   <StyledTableCell align="center">{row.serialserver}</StyledTableCell>
//                   <StyledTableCell align="center">{row.modelo}</StyledTableCell>
//                   <StyledTableCell align="center">{row.proprietario}</StyledTableCell>
//                   <StyledTableCell align="center">{row.operacao}</StyledTableCell>
//                   <StyledTableCell align="center">{row.dtcontrato}</StyledTableCell>
//                   <StyledTableCell align="center">{row.fornecedor}</StyledTableCell>
//                   <StyledTableCell align="center">{row.vigencia}</StyledTableCell>
//                   <StyledTableCell align="center">{row.dtinicio}</StyledTableCell>
//                   <StyledTableCell align="center">{row.iccid}</StyledTableCell>
//                   <StyledTableCell align="center">{row.vloc}</StyledTableCell>
//                   <StyledTableCell align="center">{row.ult_config}</StyledTableCell>
//                   <StyledTableCell align="center">{row.armazem}</StyledTableCell>
//                   <StyledTableCell align="center">{row.ult_inst}</StyledTableCell>
//                   <StyledTableCell align="center">{row.ult_ret}</StyledTableCell>
//                   <StyledTableCell align="center">{row.ult_prestador}</StyledTableCell>
//                 </StyledTableRow>
//               );
//             })}
//           </TableBody>
//         </Table>
//       </TableContainer>
//       <TablePagination
//         rowsPerPageOptions={[10, 25, 100]}
//         component="div"
//         count={filtramod.length}
//         rowsPerPage={rowsPerPage}
//         page={page}
//         onChangePage={handleChangePage}
//         onChangeRowsPerPage={handleChangeRowsPerPage}
//       />
//     </div>
//   );
// };

// export default TableCadastroModulo;
