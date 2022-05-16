import { React, useState /*useRef */ } from 'react';
import Box from '@material-ui/core/Box';
import { Formik } from 'formik';
import Grid from '@material-ui/core/Grid';
import { useStyles } from './style';
import Button from '@material-ui/core/Button';
import P from 'prop-types';
import axios from 'axios';
import { base } from '../../../Services/API/enderecos';
import Linha_2 from './Linha_2';
import Linha_1 from './Linha_1';
import Linha_3 from './Linha_3';
import Modal from '@material-ui/core/Modal';
import Upload from './upload/Upload';
import Alert from '@material-ui/lab/Alert';
import Collapse from '@material-ui/core/Collapse';
import { exportFile } from '../../../Services/Excel/Excel';
import { SignInSchema } from './Validacao';

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const Form = () => {
  const classes = useStyles();
  const [image, setImage] = useState([]);
  const [dados] = useState([
    [
      'codigoBarra',
      'sku',
      'descricao',
      'comprimento',
      'largura',
      'altura',
      'peso',
      'ultimoPrecoCompra',
      'unidade',
      'estoqueMinimo',
      'estoqueMaximo',
      'quantidade',
      'prazoEntrega',
      'fornecedor',
    ],
  ]);

  const [open, setOpen] = useState(false);
  const [modalStyle] = useState(getModalStyle);
  const [resultado, setResultado] = useState('');
  const [tipo, setTipo] = useState('');
  const [msg, setMsg] = useState('');

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

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
    console.log(values);
    axios
      .post(base + 'v1/1/produtos', values, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: localStorage.getItem('token'),
        },
      })
      .then((resp) => {
        console.log(values['file']);
        const formData = new FormData();
        console.log(image);
        formData.append('file', image);
        axios.post(base + 'v1/1/produtos/picture/' + resp.data, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: localStorage.getItem('token'),
          },
        });
      })
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

  return (
    <div>
      <Box>
        <Formik
          initialValues={{
            codigoBarra: '',
            sku: '',
            descricao: '',
            comprimento: 0.0,
            largura: 0.0,
            altura: 0.0,
            peso: 0.0,
            ultimoPrecoCompra: 0.0,
            unidade: '',
            estoqueMinimo: 0.0,
            estoqueMaximo: 0.0,
            quantidade: 0.0,
            prazoEntrega: 0,
            fornecedor: '',
          }}
          validationSchema={SignInSchema}
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
                <Grid className={classes.gSalvar} item xs={1}>
                  <Button type="submit" variant="contained" color="primary" className={classes.submit}>
                    {' '}
                    Salvar
                  </Button>
                </Grid>

                <Grid className={classes.gUpload} item xs={2}>
                  <Button variant="contained" onClick={handleOpen} className={classes.upload}>
                    Upload
                  </Button>
                </Grid>
                <Grid className={classes.gDowload} item xs={3}>
                  <Button
                    variant="contained"
                    className={classes.dowload}
                    onClick={() => {
                      exportFile(dados, 'template_produto.xlsx');
                    }}
                  >
                    Baixar Template
                  </Button>
                </Grid>
              </Grid>
            </form>
          )}
        </Formik>
      </Box>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div style={modalStyle} className={classes.paper}>
          <Upload open={setOpen} />
        </div>
      </Modal>
    </div>
  );
};

export default Form;

Form.propTypes = {
  func: P.any,
  handleSubmit: P.any,
};
