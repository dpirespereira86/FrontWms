import React from 'react';
import Layout from '../../../Componentes/Layout/Layout';
import Corpo from './Corpo';

const Entrada = () => {
  return (
    <div>
      {' '}
      <h1>Entrada/</h1>
      <Layout titulo="Entrada" corpo={<Corpo />} />
    </div>
  );
};

export default Entrada;
