import { React, useState /*useRef */ } from 'react';
import Box from '@material-ui/core/Box';
import { Formik } from 'formik';
import Grid from '@material-ui/core/Grid';
import { useStyles } from './style';
import Button from '@material-ui/core/Button';
import P from 'prop-types';
import axios from 'axios';
import { base } from '../../../../Services/API/enderecos';
import Linha_2 from './Linha_2';
import Linha_1 from './Linha_1';
import Linha_3 from './Linha_3';
import Alert from '@material-ui/lab/Alert';
import Collapse from '@material-ui/core/Collapse';

const Form = (produto) => {
  const classes = useStyles();
  const [image, setImage] = useState([]);

  const [resultado, setResultado] = useState('');
  const [tipo, setTipo] = useState('');
  const [msg, setMsg] = useState('');
  const prod = Object.values(produto);

  const previewImg = document.getElementById('imagem');

  function imageRegister(e) {
    const fileToUpload = e.target.files.item(0);
    setImage(fileToUpload);
    console.log(previewImg);
    const reader = new FileReader();
    console.log(e.target.result);
    reader.onload = (e) => (previewImg.src = e.target.result);
    reader.readAsDataURL(fileToUpload);
  }

  function salvar(values) {
    axios
      .put(base + 'v1/1/produtos/' + prod[0].id + '/' + values.fornecedor, values, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: localStorage.getItem('token'),
        },
      })
      // .then((resp) => {
      //   console.log(values['file']);
      //   const formData = new FormData();
      //   console.log(image);
      //   formData.append('file', image);
      //   axios.post(base + 'v1/1/produtos/picture/' + resp.data, formData, {
      //     headers: {
      //       'Content-Type': 'multipart/form-data',
      //       Authorization: localStorage.getItem('token'),
      //     },
      //   });
      // })
      .then((res) => {
        console.log('deu certo' + res);
        setTipo('success');
        setMsg('Salvo com sucesso!');
        setResultado(true);
        window.setTimeout(setResultado, 5000);
      })
      .catch((erro) => {
        console.log('errado: ' + image);
        console.log('deu errado' + erro);
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
            codigoBarra: prod[0].codigoBarra,
            sku: prod[0].sku,
            descricao: prod[0].descricao,
            comprimento: prod[0].comprimento,
            largura: prod[0].largura,
            altura: prod[0].altura,
            peso: prod[0].peso,
            ultimoPrecoCompra: prod[0].ultimoPrecoCompra,
            unidade: prod[0].unidade,
            estoqueMinimo: prod[0].estoqueMinimo,
            estoqueMaximo: prod[0].estoqueMaximo,
            quantidade: prod[0].quantidade,
            prazoEntrega: prod[0].prazoEntrega,
            fornecedor: prod[0].fornecedor,
          }}
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
              <Linha_1 image={imageRegister} setImage={setImage} />
              <Linha_2 />
              <Linha_3 />
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
