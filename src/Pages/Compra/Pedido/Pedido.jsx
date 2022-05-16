import React from 'react';
import P from 'prop-types';
import Layout from '../../../Componentes/Layout/Layout';
import Typography from '@mui/material/Typography';
import CorpoPedido from './CorpoPedido';

const Pedido = (props) => {
  console.log(props);
  return (
    <div>
      <Typography id="modal-modal-title" variant="h4" component="h2">
        Compras
      </Typography>
      <Layout titulo={'Gerenciamento de Pedidos'} corpo={<CorpoPedido />} />
    </div>
  );
};

Pedido.propTypes = { props: P.any };

export default Pedido;
