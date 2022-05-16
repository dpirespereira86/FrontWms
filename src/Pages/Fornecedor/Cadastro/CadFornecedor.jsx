import { React } from 'react';
import P from 'prop-types';
import Layout from '../../../Componentes/Layout/Layout';
import Form from './Form';
import Typography from '@mui/material/Typography';

const CadProduto = () => {
  return (
    <div>
      <Typography id="modal-modal-title" variant="h4" component="h2">
        Fornecedor
      </Typography>
      <Layout titulo="Cadastro" corpo={<Form />} />
    </div>
  );
};

export default CadProduto;

CadProduto.propTypes = {
  func: P.any,
  handleSubmit: P.any,
};
