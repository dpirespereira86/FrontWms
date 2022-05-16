import { React, useState } from 'react';
import PropTypes from 'prop-types';
import { Divider, Grid, Typography } from '@material-ui/core';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import useStyles from './style';
import AddIcon from '@mui/icons-material/Add';
import FormPosicao from './FormPosicao';
import TabPosicao from './TabPosicao';

const ModelEstoque = (props) => {
  const classes = useStyles();
  const [atualizar, setAtualizar] = useState(false);

  return (
    <div>
      <Grid container direction="row" spacing={1}>
        <Grid item xs={1}>
          {' '}
          <Typography>{props.dados.id}</Typography>
        </Grid>
        <Grid item xs={3}>
          {' '}
          <Typography>{props.dados.nome}</Typography>
        </Grid>
        <Grid item xs={1}>
          {' '}
          <Typography>{props.dados.capacidade}</Typography>
        </Grid>
        <Grid item xs={1}>
          {' '}
          <Typography>{props.dados.quantidade}</Typography>
        </Grid>
      </Grid>
      <Divider />
      <Grid container direction="row" spacing={1}>
        <Typography>Posições</Typography>
      </Grid>
      <Accordion style={{ boxShadow: 'none', borderTop: 'none' }} className={classes.adiciona}>
        <AccordionSummary
          className={classes.summary}
          expandIcon={<AddIcon />}
          /*aria-controls="panel1a-content"*/ id="panel1a-header"
        >
          <Typography>Adicionar Posição</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <FormPosicao id={props.dados.id} atualizar={setAtualizar} />
        </AccordionDetails>
      </Accordion>
      <Divider />
      <TabPosicao id={props.dados.id} atualizar={atualizar} />
    </div>
  );
};

ModelEstoque.propTypes = {
  props: PropTypes.any,
  dados: PropTypes.any,
};

export default ModelEstoque;
