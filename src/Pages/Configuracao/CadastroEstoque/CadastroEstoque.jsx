import { React, useState /*useRef */ } from 'react';
import PropTypes from 'prop-types';
import { Divider, Tooltip, Typography } from '@material-ui/core';
import Campo from '../../../Componentes/Inputs/input';
import Grid from '@material-ui/core/Grid';
import { Formik } from 'formik';
import Box from '@material-ui/core/Box';
import axios from 'axios';
import { base } from '../../../Services/API/enderecos';
import useStyles from './style';
import Collapse from '@material-ui/core/Collapse';
import Alert from '@material-ui/lab/Alert';
import Button from '@material-ui/core/Button';
import AddIcon from '@mui/icons-material/Add';
import TabCadastro from './TabCadastro';

const CadastroEstoque = (props) => {
  const classes = useStyles();

  const [resultado, setResultado] = useState('');
  const [tipo, setTipo] = useState('');
  const [msg, setMsg] = useState('');
  console.log(props);

  function salvar(values) {
    console.log(values);
    axios
      .post(base + 'v1/' + localStorage.getItem('empresa') + '/estoques', values, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: localStorage.getItem('token'),
        },
      })
      .then((res) => {
        console.log('deu certo' + res);
        setTipo('success');
        setMsg('Salvo com sucesso!');
        setResultado(true);
        window.setTimeout(setResultado, 5000);
      })
      .catch((erro) => {
        setTipo('error');
        setMsg(erro.response.data['message'] ? erro.response.data['message'] : 'Não foi Possivel Salvar!');
        setResultado(true);
        window.setTimeout(setResultado, 5000);
      });
  }

  return (
    <div>
      <Typography variant="h6">Cadastro de Estoque</Typography>
      <Box>
        <Formik
          initialValues={{
            nome: '',
            empresa: { id: parseInt(localStorage.getItem('empresa')) },
          }}
          /*validationSchema={SignInSchema}*/
          onSubmit={(values) => {
            salvar(values);
          }}
        >
          {(props) => (
            <form onSubmit={props.handleSubmit} className={classes.form}>
              <Grid container className={classes.terceiro} direction="row" spacing={1} />
              <Grid container direction="row" spacing={1}>
                <Grid item xs={3} />
                <Grid item xs={6}>
                  <Collapse className={classes.alert} in={resultado}>
                    <Alert variant="filled" severity={tipo}>
                      {msg}
                    </Alert>
                  </Collapse>
                </Grid>
                <Grid item xs={3} />
              </Grid>
              <Grid container className={classes.terceiro} direction="row" spacing={2}>
                <Grid item xs={3}>
                  <Campo
                    variant="outlined"
                    margin="normal"
                    required
                    type="text"
                    fullWidth
                    id="nome"
                    label="Nome"
                    name="nome"
                    autoComplete="Nome"
                    autoFocus
                  />
                </Grid>
                <Grid item xs={5}>
                  <Tooltip title="Salvar">
                    <Button type="submit" variant="contained" className={classes.submit}>
                      {' '}
                      <AddIcon />
                    </Button>
                  </Tooltip>
                </Grid>
              </Grid>
            </form>
          )}
        </Formik>
      </Box>
      <Divider />
      <Box>
        <TabCadastro salvar={salvar} />
      </Box>
    </div>
  );
};

CadastroEstoque.propTypes = {
  props: PropTypes.any,
  handleSubmit: PropTypes.any,
};

export default CadastroEstoque;
