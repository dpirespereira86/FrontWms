import { React } from 'react';
import P from 'prop-types';
import Layout from '../../../Componentes/Layout/Layout';
import Corpo from './Corpo';

const ListaFornecedor = () => {
  return (
    <div>
      <h1>Fornecedor/</h1>
      <Layout titulo="Lista de Fornecedores" corpo={<Corpo />} />
    </div>
  );
};

export default ListaFornecedor;

ListaFornecedor.propTypes = {
  func: P.any,
  handleSubmit: P.any,
};
