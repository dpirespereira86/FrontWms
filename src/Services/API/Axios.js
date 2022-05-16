import { base } from './enderecos';
import axios from 'axios';

export function logar(values, setTipo, setMsg, setResultado, msgError, versao) {
  axios
    .post(base + versao, values, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then((response) => {
      if (response.data) {
        localStorage.setItem('token', response.data);
        localStorage.setItem('email', values['email']);
        window.location.reload();
        history.push('/home');
      }
    })
    .catch((erro) => {
      if (erro.response) {
        setTipo('error');
        setMsg(erro.response.data['message'] ? erro.response.data['message'] : msgError);
        setResultado(true);
        window.setTimeout(setResultado, 5000);
      }
    });
}

export function get(setDados, end, versao, param) {
  axios
    .get(base + versao + localStorage.getItem('empresa') + '/' + end + '/' + param, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: localStorage.getItem('token'),
      },
    })
    .then((response) => {
      setDados(response.data);
    })
    .catch((erro) => {
      if (erro.response) {
        null;
      }
    });
}

export function post(values, setTipo, setMsg, setResultado, msgError, msgSuccess, versao, end) {
  axios
    .post(base + versao + '/' + localStorage.getItem('empresa') + '/' + end, values, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: localStorage.getItem('tokem'),
      },
    })
    .then(() => {
      setTipo('success');
      setMsg(msgSuccess);
      setResultado(true);
      window.setTimeout(setResultado, 5000);
    })
    .catch((erro) => {
      if (erro.response) {
        setTipo('error');
        setMsg(erro.response.data['message'] ? erro.response.data['message'] : msgError);
        setResultado(true);
        window.setTimeout(setResultado, 5000);
      }
    });
}
