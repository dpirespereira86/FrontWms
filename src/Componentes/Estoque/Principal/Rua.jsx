import { React } from 'react';
import Street from './street';
import P from 'prop-types';

const Rua = (props) => {
  const { Principal } = props;

  const estoquePorRua = Principal.reduce((estoquePorRua, estoqueAtual) => {
    estoquePorRua[estoqueAtual.rua] = estoquePorRua[estoqueAtual.rua] || [];
    estoquePorRua[estoqueAtual.rua].push(estoqueAtual);
    return estoquePorRua;
  }, {});

  const x = Object.keys(estoquePorRua);

  return (
    <>
      {x.map((e) => {
        return (
          <div spacing={1} key={e}>
            <h4>{`Rua ${e}`}</h4>
            <Street Valor={estoquePorRua[e]} />
          </div>
        );
      })}
    </>
  );
};

export default Rua;

Rua.propTypes = {
  Principal: P.any,
};
