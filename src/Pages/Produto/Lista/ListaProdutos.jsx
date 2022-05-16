import { React } from 'react';
import P from 'prop-types';
import Layout from '../../../Componentes/Layout/Layout';
import Corpo from './Corpo';

const ListaProduto = () => {
  return (
    <div>
      <h1>Produto/</h1>
      <Layout titulo="Lista Produtos" corpo={<Corpo />} />
    </div>
  );
};

export default ListaProduto;

ListaProduto.propTypes = {
  func: P.any,
  handleSubmit: P.any,
};
