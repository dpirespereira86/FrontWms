import { React, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Campo from '../../../Componentes/Inputs/input';
import Grid from '@material-ui/core/Grid';
import ComboForn from '../../../Componentes/Combo/comboForn';
import axios from 'axios';
import { base } from '../../../Services/API/enderecos';

const Linha_3 = () => {
  const [fornecedor, setFornecedor] = useState('');

  useEffect(() => {
    axios
      .get(base + 'v1/1/fornecedores', {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then((resp) => {
        setFornecedor(resp.data);
      });
  }, []);

  return (
    <Grid container direction="row" spacing={1}>
      <Grid item xs={1}>
        <Campo
          variant="outlined"
          margin="normal"
          required
          type="number"
          step="0.25"
          min="0"
          fullWidth
          id="unidade"
          label="Unidade"
          name="unidade"
          autoComplete="Unidade"
          autoFocus
        />
      </Grid>
      <Grid item xs={5}>
        <ComboForn
          op={fornecedor != null ? fornecedor : []}
          id="fornecedor"
          label="Fornecedor"
          name="fornecedor"
          variant="outlined"
          margin="normal"
          required
          type="text"
          fullWidth
          autoComplete="fornecedor"
          autoFocus
        />
      </Grid>
      <Grid item xs={2}>
        <Campo
          variant="outlined"
          margin="normal"
          required
          type="doble"
          fullWidth
          id="ultimoPrecoCompra"
          label="Ultimo Preço Compra"
          name="ultimoPrecoCompra"
          autoComplete="Ultimo Preço Compra"
          autoFocus
        />
      </Grid>
      <Grid item xs={1}>
        <Campo
          variant="outlined"
          margin="normal"
          required
          type="number"
          fullWidth
          id="quantidade"
          label="Quantidade"
          name="quantidade"
          autoComplete="Quantidade"
          autoFocus
        />
      </Grid>
      <Grid item xs={1}>
        <Campo
          variant="outlined"
          margin="normal"
          required
          type="number"
          fullWidth
          id="estoqueMinimo"
          label="Estoque Minimo"
          name="estoqueMinimo"
          autoComplete="Estoque Minimo"
          autoFocus
        />
      </Grid>
      <Grid item xs={1}>
        <Campo
          variant="outlined"
          margin="normal"
          required
          type="number"
          step="0.25"
          min="0"
          fullWidth
          id="estoqueMaximo"
          label="Estoque Máximo"
          name="estoqueMaximo"
          autoComplete="Estoque Máximo"
          autoFocus
        />
      </Grid>
      <Grid item xs={1}>
        <Campo
          variant="outlined"
          margin="normal"
          required
          type="number"
          step="0.25"
          min="0"
          fullWidth
          id="prazoEntrega"
          label="Prazo de Entrega"
          name="prazoEntrega"
          autoComplete="Prazo de Entrega"
          autoFocus
        />
      </Grid>
    </Grid>
  );
};

Linha_3.propTypes = {
  props: PropTypes.any,
};

export default Linha_3;
