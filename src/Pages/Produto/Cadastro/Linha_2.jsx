import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Campo from '../../../Componentes/Inputs/input';

const Linha_2 = () => {
  return (
    <Grid container direction="row" spacing={1}>
      <Grid item xs={2}>
        <Campo
          variant="outlined"
          margin="normal"
          required
          type="text"
          fullWidth
          id="codigoBarra"
          label="Código de Barra"
          name="codigoBarra"
          autoComplete="Código de Barra"
          autoFocus
        />
      </Grid>
      <Grid item xs={2}>
        <Campo
          variant="outlined"
          margin="normal"
          required
          type="text"
          fullWidth
          id="sku"
          label="SKU"
          name="sku"
          autoComplete="sku"
          autoFocus
        />
      </Grid>
      <Grid item xs={4}>
        <Campo
          variant="outlined"
          margin="normal"
          required
          type="text"
          fullWidth
          id="descricao"
          label="Descrição"
          name="descricao"
          autoComplete="descrição"
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
          id="comprimento"
          label="Comprimento"
          name="comprimento"
          autoComplete="Comprimento"
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
          id="largura"
          label="Largura"
          name="largura"
          autoComplete="Largura"
          step="0.010"
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
          id="altura"
          label="Altura"
          name="altura"
          autoComplete="Altura"
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
          id="peso"
          label="Peso"
          name="peso"
          autoComplete="Peso"
          autoFocus
        />
      </Grid>
    </Grid>
  );
};

Linha_2.propTypes = {
  props: PropTypes.any,
};

export default Linha_2;
