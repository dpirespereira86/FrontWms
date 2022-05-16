import { React, useState /*useRef */ } from 'react';
import Box from '@material-ui/core/Box';
import { Formik } from 'formik';
import Grid from '@material-ui/core/Grid';
import { useStyles } from './style';
import Button from '@material-ui/core/Button';
import P from 'prop-types';
import axios from 'axios';
import { base } from '../../../../Services/API/enderecos';
import Alert from '@material-ui/lab/Alert';
import Collapse from '@material-ui/core/Collapse';
import Campo from '../../../../Componentes/Inputs/input';

const Form = (produto) => {
  const classes = useStyles();

  const [resultado, setResultado] = useState('');
  const [tipo, setTipo] = useState('');
  const [msg, setMsg] = useState('');
  const prod = Object.values(produto);

  function salvar(values) {
    axios
      .put(base + 'v1/1/fornecedores/' + prod[0].id, values, {
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
        setMsg(erro.response.data['message']);
        setResultado(true);
        window.setTimeout(setResultado, 5000);
      });
  }
  console.log(produto);
  return (
    <div>
      <Box>
        <Formik
          initialValues={{
            id: prod[0].id,
            cnpj: prod[0].cnpj,
            email: prod[0].email,
            razaoSocial: prod[0].razaoSocial,
            empresa: { id: +parseInt(localStorage.getItem('empresa')) },
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
              <Campo
                variant="outlined"
                margin="normal"
                required
                type="text"
                fullWidth
                id="cnpj"
                label="Cnpj"
                name="cnpj"
                autoComplete="Cnpj"
                autoFocus
              />
              <Campo
                variant="outlined"
                margin="normal"
                required
                type="text"
                fullWidth
                id="email"
                label="Email"
                name="email"
                autoComplete="Email"
                autoFocus
              />
              <Campo
                variant="outlined"
                margin="normal"
                required
                type="text"
                fullWidth
                id="razaoSocial"
                label="Razão Social"
                name="razaoSocial"
                autoComplete="Razão Social"
                autoFocus
              />
              <Grid container className={classes.terceiro} direction="row" spacing={1}>
                <Grid className={classes.gSalvar} item xs={3}>
                  <Button type="submit" variant="contained" color="primary" className={classes.submit}>
                    {' '}
                    Salvar Alteração
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

export default Form;

Form.propTypes = {
  func: P.any,
  handleSubmit: P.any,
};
