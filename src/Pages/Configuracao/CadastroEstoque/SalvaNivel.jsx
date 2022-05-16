import { React, useState } from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';
import axios from 'axios';
import { base } from '../../../Services/API/enderecos';
import Alert from '@material-ui/lab/Alert';
import Collapse from '@material-ui/core/Collapse';
import useStyles from './style';
import { Formik } from 'formik';
import Campo from '../../../Componentes/Inputs/input';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';

const SalvaNivel = (props) => {
  const classes = useStyles();

  const [resultado, setResultado] = useState('');
  const [tipo, setTipo] = useState('');
  const [msg, setMsg] = useState('');

  function salvarNivel(values) {
    axios
      .post(base + 'v1/' + localStorage.getItem('empresa') + '/niveis', values, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: localStorage.getItem('token'),
        },
      })
      .then(() => {
        setTipo('success');
        setMsg('Salvo com sucesso!');
        props.atualiza(true);
        setResultado(true);
        window.setTimeout(setResultado, 5000);
      })
      .catch((erro) => {
        setTipo('error');
        setMsg(erro.response.data['message']);
        setResultado(true);
        window.setTimeout(setResultado, 5000);
      });
  }

  return (
    <div>
      <Box>
        <Formik
          initialValues={{
            nome: '',
          }}
          /*validationSchema={SignInSchema}*/
          onSubmit={(values) => {
            salvarNivel(values);
          }}
        >
          {(props) => (
            <form onSubmit={props.handleSubmit} className={classes.form}>
              <Grid container className={classes.terceiro} direction="row" spacing={1} />
              <Grid container direction="row" spacing={1}>
                <Grid item xs={0} />
                <Grid item xs={12}>
                  <Collapse className={classes.alert} in={resultado}>
                    <Alert variant="filled" severity={tipo}>
                      {msg}
                    </Alert>
                  </Collapse>
                </Grid>
                <Grid item xs={0} />
              </Grid>
              <Grid container direction="row" spacing={1}>
                <Grid item xs={4}>
                  <Campo
                    variant="outlined"
                    margin="normal"
                    required
                    type="number"
                    fullWidth
                    id="nome"
                    label="Nome"
                    name="nome"
                    autoComplete="Capacidade"
                    autoFocus
                  />
                </Grid>
              </Grid>
              <Grid container className={classes.terceiro} direction="row" spacing={1}>
                <Grid className={classes.gSalvar} item xs={4}>
                  <Button type="submit" variant="contained" color="primary" className={classes.submit}>
                    {' '}
                    Salvar
                  </Button>
                </Grid>
              </Grid>
            </form>
          )}
        </Formik>
      </Box>
    </div>
  );
};

SalvaNivel.propTypes = {
  props: PropTypes.any,
  handleSubmit: PropTypes.any,
  atualiza: PropTypes.any,
};

export default SalvaNivel;
