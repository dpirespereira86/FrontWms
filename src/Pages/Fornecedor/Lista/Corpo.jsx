import { React, useEffect, useState } from 'react';
import axios from 'axios';
import { base } from '../../../Services/API/enderecos';
import { SimpleTable } from '../../../Componentes/Table/SimpleTable';
import Grid from '@material-ui/core/Grid';
import InputSearch from '../../../Componentes/InputSearch/InputSearch';

import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import { Model } from './Model';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 1200,
  bgcolor: 'background.paper',
  border: '0px solid #000',
  boxShadow: 24,
  p: 4,
  borderRadius: 5,
};

export default function Corpo() {
  const [produtos, setProdutos] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [open, setOpen] = useState(false);
  const [dados, setDados] = useState('');

  const handleClose = () => setOpen(false);

  const col = ['razaoSocial', 'cnpj', 'email'];
  const title = ['Razão Social', 'Cnpj', 'E-mail', ''];

  useEffect(() => {
    axios
      .get(base + 'v1/1/fornecedores', {
        headers: {
          'Content-Type': 'application/json',
          Authorization: localStorage.getItem('token'),
        },
      })
      .then((resp) => {
        setProdutos(resp.data);
      });
  }, []);

  function handleChange(e) {
    const { value } = e.target;
    setSearchValue(value);
  }

  const filterProdutos = searchValue
    ? produtos.filter((produto) => {
        return (
          produto.cnpj.includes(searchValue) || produto.razaoSocial.toLowerCase().includes(searchValue.toLowerCase())
        );
      })
    : produtos;

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={10} />
        <Grid item xs={2}>
          <InputSearch searchValue={searchValue} handleChange={handleChange} />
        </Grid>
        <Grid item xs={12}>
          <SimpleTable
            row={filterProdutos}
            col={col}
            title={title}
            botao={true}
            setDados={setDados}
            setOpen={setOpen}
            end={base + 'v1/1/fornecedores/'}
          />
        </Grid>
      </Grid>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Model dados={dados} />
        </Box>
      </Modal>
    </>
  );
}
