import { React, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import { Formik } from 'formik';
import { Grid } from '@material-ui/core';
import axios from 'axios';
import { base } from '../../../Services/API/enderecos';
import Alert from '@material-ui/lab/Alert';
import Collapse from '@material-ui/core/Collapse';
import Campo from '../../../Componentes/Inputs/input';
import useStyles from './style';
import Button from '@material-ui/core/Button';
import ComboForn from '../../../Componentes/Combo/comboForn';
import AddIcon from '@mui/icons-material/Add';
import { BootstrapTooltip } from '../../../Componentes/ToolTip/Tooltip';
import BasicModal from '../../../Componentes/Model/Model';
import SalvaRua from './SalvaRua';
import SalvaPredio from './SalvaPredio';
import SalvaNivel from './SalvaNivel';

const FormPosicao = (props) => {
  const classes = useStyles();
  const [resultado, setResultado] = useState('');
  const [tipo, setTipo] = useState('');
  const [msg, setMsg] = useState('');
  const [rua, setRua] = useState('');
  const [predio, setPredio] = useState('');
  const [nivel, setNivel] = useState('');
  //Controle do model Rua
  const [openRua, setOpenRua] = useState(false);
  const handleOpenRua = () => setOpenRua(true);
  const handleCloseRua = () => setOpenRua(false);
  //Controle do model Predio
  const [openPredio, setOpenPredio] = useState(false);
  const handleOpenPredio = () => setOpenPredio(true);
  const handleClosePredio = () => setOpenPredio(false);
  //Controle do model Nivel
  const [openNivel, setOpenNivel] = useState(false);
  const handleOpenNivel = () => setOpenNivel(true);
  const handleCloseNivel = () => setOpenNivel(false);

  const [atualizaRua, setAtualizaRua] = useState(false);
  const [atualizaPredio, setAtualizaPredio] = useState(false);
  const [atualizaNivel, setAtualizaNivel] = useState(false);

  function salvarPosicao(values) {
    axios
      .post(base + 'v1/' + localStorage.getItem('empresa') + '/posicoes', values, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: localStorage.getItem('token'),
        },
      })
      .then(() => {
        setTipo('success');
        setMsg('Salvo com sucesso!');
        setResultado(true);
        window.setTimeout(setResultado, 5000);
        props.atualizar(true);
        props.atualizar(false);
      })
      .catch((erro) => {
        setTipo('error');
        setMsg(erro.response.data['message']);
        setResultado(true);
        window.setTimeout(setResultado, 5000);
      });
  }

  useEffect(() => {
    axios
      .get(base + 'v1/' + localStorage.getItem('empresa') + '/ruas', {
        headers: {
          'Content-Type': 'application/json',
          Authorization: localStorage.getItem('token'),
        },
      })
      .then((resp) => {
        setRua(resp.data);
        setAtualizaRua(false);
      });
  }, [atualizaRua]);

  useEffect(() => {
    axios
      .get(base + 'v1/' + localStorage.getItem('empresa') + '/niveis', {
        headers: {
          'Content-Type': 'application/json',
          Authorization: localStorage.getItem('token'),
        },
      })
      .then((resp) => {
        setNivel(resp.data);
        setAtualizaNivel(false);
      });
  }, [atualizaNivel]);

  useEffect(() => {
    axios
      .get(base + 'v1/' + localStorage.getItem('empresa') + '/predios', {
        headers: {
          'Content-Type': 'application/json',
          Authorization: localStorage.getItem('token'),
        },
      })
      .then((resp) => {
        setPredio(resp.data);
        setAtualizaPredio(false);
      });
  }, [atualizaPredio]);

  return (
    <div>
      {' '}
      <Box>
        <Formik
          initialValues={{
            capacidade: '',
            estoque: props.id,
            rua: '',
            predio: '',
            nivel: '',
            ordem: '',
          }}
          /*validationSchema={SignInSchema}*/
          onSubmit={(values) => {
            salvarPosicao(values);
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
              <Grid container direction="row" spacing={1}>
                <Grid item xs={2}>
                  <Campo
                    variant="outlined"
                    margin="normal"
                    required
                    type="number"
                    fullWidth
                    id="capacidade"
                    label="Capacidade"
                    name="capacidade"
                    autoComplete="Capacidade"
                    autoFocus
                  />
                </Grid>
                <Grid item xs={2}>
                  <ComboForn
                    op={rua != null ? rua : []}
                    id="rua"
                    label="Rua"
                    name="rua"
                    variant="outlined"
                    margin="normal"
                    required
                    type="text"
                    fullWidth
                    autoComplete="Rua"
                    autoFocus
                    valor="id"
                    display="nome"
                  />
                </Grid>
                <Grid item xs={1}>
                  <BootstrapTooltip title="Salvar">
                    <Button
                      type="submit"
                      onClick={handleOpenRua}
                      variant="contained"
                      color="primary"
                      className={classes.submit}
                    >
                      {' '}
                      <AddIcon />
                    </Button>
                  </BootstrapTooltip>
                </Grid>
                <Grid item xs={2}>
                  <ComboForn
                    op={predio != null ? predio : []}
                    id="predio"
                    label="Predio"
                    name="predio"
                    variant="outlined"
                    margin="normal"
                    required
                    type="text"
                    fullWidth
                    autoComplete="Predio"
                    autoFocus
                    valor="id"
                    display="nome"
                  />
                </Grid>
                <Grid item xs={1}>
                  <BootstrapTooltip title="Salvar">
                    <Button
                      type="submit"
                      onClick={handleOpenPredio}
                      variant="contained"
                      color="primary"
                      className={classes.submit}
                    >
                      {' '}
                      <AddIcon />
                    </Button>
                  </BootstrapTooltip>
                </Grid>
                <Grid item xs={2}>
                  <ComboForn
                    op={nivel != null ? nivel : []}
                    id="nivel"
                    label="Nivel"
                    name="nivel"
                    variant="outlined"
                    margin="normal"
                    required
                    type="text"
                    fullWidth
                    autoComplete="Nivel"
                    autoFocus
                    valor="id"
                    display="nome"
                  />
                </Grid>
                <Grid item xs={1}>
                  <BootstrapTooltip title="Salvar">
                    <Button
                      type="submit"
                      onClick={handleOpenNivel}
                      variant="contained"
                      color="primary"
                      className={classes.submit}
                    >
                      {' '}
                      <AddIcon />
                    </Button>
                  </BootstrapTooltip>
                </Grid>
                <Grid item xs={1}>
                  <Campo
                    variant="outlined"
                    margin="normal"
                    required
                    type="number"
                    fullWidth
                    id="ordem"
                    label="Ordem"
                    name="ordem"
                    autoComplete="Ordem"
                    autoFocus
                  />
                </Grid>
              </Grid>
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
      <BasicModal open={openRua} close={handleCloseRua} corpo={<SalvaRua atualiza={setAtualizaRua} />} />
      <BasicModal open={openPredio} close={handleClosePredio} corpo={<SalvaPredio atualiza={setAtualizaPredio} />} />
      <BasicModal open={openNivel} close={handleCloseNivel} corpo={<SalvaNivel atualiza={setAtualizaNivel} />} />
    </div>
  );
};

FormPosicao.propTypes = {
  props: PropTypes.any,
  id: PropTypes.any,
  handleSubmit: PropTypes.any,
  atualizar: PropTypes.any,
};

export default FormPosicao;
