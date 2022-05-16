import React from 'react';
import P from 'prop-types';

const EditePedido = (props) => {
  return <div>{props.pedido.id}</div>;
};

EditePedido.propTypes = { porps: P.any, id: P.any, pedido: P.any };

export default EditePedido;
