import { React } from 'react';
import P from 'prop-types';
import Layout from '../../../Componentes/Layout/Layout';
import Form from './Form';
import { Typography } from '@material-ui/core';

const CadProduto = () => {
  return (
    <div>
      <Typography variant="h3">Produto/</Typography>
      <Layout titulo="Cadastro" corpo={<Form />} />
    </div>
  );
};

export default CadProduto;

CadProduto.propTypes = {
  func: P.any,
  handleSubmit: P.any,
};
