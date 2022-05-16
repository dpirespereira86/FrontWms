import { React, useState, useEffect } from 'react';
//import P from 'prop-types';
import Grid from '@material-ui/core/Grid';
import { get } from '../../../Services/API/Axios.js';
import { SimpleTable } from '../../../Componentes/Table/SimpleTable';
import BasicModel from '../../../Componentes/Model/Model';
import EditePedido from './EditePedido';
import NovoPedido from './NovoPedido';
import Button from '@mui/material/Button';
import CreateNewFolderIcon from '@mui/icons-material/CreateNewFolder';
import InputSearch from '../../../Componentes/InputSearch/InputSearch';

const CorpoPedido = () => {
  const [dadosPedido, setDadosPedido] = useState('');
  const [openEdite, setOpenEdite] = useState(false);
  const [openNovo, setOpenNovo] = useState(false);
  const [dados, setDados] = useState('');
  const [searchValue, setSearchValue] = useState('');

  const title = [
    'Numero',
    'D.Criação',
    'D.Aprovação',
    'D.Entrega',
    'P.Entrega',
    'Prazo.Entrega',
    'Valor',
    'Origem',
    'C.Pagamento',
    'P.Pagamento',
    'Status',
    'R.Aprovação',
    'Fornecedor',
    '',
  ];
  const col = [
    'id',
    'instante',
    'dataAprovacao',
    'dataEntrega',
    'previsaoentrega',
    'prazoEntrega',
    'valortotal',
    'origem',
    'condicaoPagamento',
    'prazoPagamento',
    'status',
    'respAprovacao',
    'fornecedor',
  ];

  useEffect(() => {
    get(setDadosPedido, 'pedidoscompras', 'v1/', '');
  }, []);

  function handleCloseEdite() {
    setOpenEdite(false);
  }

  function handleCloseNovo() {
    setOpenNovo(false);
  }

  const filterDados = searchValue
    ? dadosPedido.filter((dados) => {
        return (
          dados.id.includes(searchValue) ||
          dados.fornecedor.toLowerCase().includes(searchValue.toLowerCase()) ||
          dados.instante.includes(searchValue)
        );
      })
    : dadosPedido;

  return (
    <>
      <Grid container direction="row" spacing={1}>
        <Grid item xs={1}>
          <Button onClick={() => setOpenNovo(true)} variant="contained" endIcon={<CreateNewFolderIcon />}>
            Novo
          </Button>
        </Grid>
        <Grid item xs={8} />
        <Grid item xs={3}>
          <InputSearch setSearchDados={setSearchValue} />
        </Grid>
        <Grid item xs={12}>
          <SimpleTable
            col={col}
            row={filterDados}
            title={title}
            botao={true}
            setOpen={setOpenEdite}
            setDados={setDados}
            end={''}
          />
        </Grid>
      </Grid>
      <BasicModel corpo={<EditePedido pedido={dados} />} close={handleCloseEdite} open={openEdite} />
      <BasicModel corpo={<NovoPedido />} tamanho={1100} close={handleCloseNovo} open={openNovo} />
    </>
  );
};

CorpoPedido.propTypes = {};

export default CorpoPedido;
