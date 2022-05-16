import { Formik } from 'formik';
import Campo from '../../Componentes/Inputs/input';
import Button from '@material-ui/core/Button';
import { React, useState } from 'react';
import { useStyles } from './style';
import Grid from '@material-ui/core/Grid';
import P from 'prop-types';
import { base } from '../../Services/API/enderecos';
import axios from 'axios';
import { history } from '../../Config/Rotas/history';
//import { Context } from '../../Config/Context/ContextEstoque';
import Alert from '@material-ui/lab/Alert';
import Collapse from '@material-ui/core/Collapse';

const Form = () => {
  const classes = useStyles();
  // const { handleUser } = useContext(Context);

  const [resultado, setResultado] = useState(false);
  const [tipo, setTipo] = useState('error');
  const [msg, setMsg] = useState('');

  function logar(values) {
    axios
      .post(base + 'login', values, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then((response) => {
        if (response.data) {
          localStorage.setItem('token', response.data);
          localStorage.setItem('email', values['email']);
          history.push('/home');
          window.location.reload();
        }
      })
      .catch((erro) => {
        if (erro.response) {
          setTipo('error');
          setMsg(erro.response.data['message'] ? erro.response.data['message'] : 'Email ou senha inválidos');
          setResultado(true);
          window.setTimeout(setResultado, 5000);
        }
      });
  }

  return (
    <Formik
      initialValues={{
        email: '',
        senha: '',
      }}
      onSubmit={(values) => {
        logar(values);
      }}
    >
      {(props) => (
        <form onSubmit={props.handleSubmit} className={classes.form} noValidate>
          <Grid container spacing={0}>
            <Collapse className={classes.alert} in={resultado}>
              <Alert variant="filled" severity={tipo}>
                {msg}
              </Alert>
            </Collapse>
            <Grid item xs={12}>
              <Campo
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />

              <Campo
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="senha"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
            </Grid>
          </Grid>

          <Button
            type="submit"
            onClick={logar}
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            {' '}
            Sign In
          </Button>
        </form>
      )}
    </Formik>
  );
};

export default Form;

Form.propTypes = {
  func: P.any,
  handleSubmit: P.any,
};
