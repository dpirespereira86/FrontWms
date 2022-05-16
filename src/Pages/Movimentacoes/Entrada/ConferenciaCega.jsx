import { React, useState } from 'react';
import { Grid, Typography } from '@material-ui/core';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
//import AddIcon from '@mui/icons-material/Add';
import ContentPasteSearchIcon from '@mui/icons-material/ContentPasteSearch';
import { get } from '../../../Services/API/Axios.js';
import { SimpleTable } from '../../../Componentes/Table/SimpleTable';
import beep from '../../../Sounds/beep.mp3';
import serro from '../../../Sounds/serro.mp3';
import { Divider, Button } from '@mui/material';
import BookmarkAddedIcon from '@mui/icons-material/BookmarkAdded';
import P from 'prop-types';

const ConferenciaCega = (props) => {
  const [expanded, setExpanded] = useState(false);

  const { invalido } = props;
  const { setSteps } = props;
  const { valor } = props;
  const { setMsg } = props;
  const { setProduto } = props;
  const { Produto } = props;
  const { setPedido } = props;
  const { Pedido } = props;
  //const { setNpedido } = props;

  const col = ['codigoBarra', 'descricao', 'quantidade', 'peso'];
  const title = ['Código de Barras', 'Descrição', 'Quantidade', 'Peso(Kg)'];
  const bee = new Audio(beep);
  function handleChangeB(event) {
    if (event.target.value != null) {
      const serr = new Audio(serro);

      var c = Pedido.map((p) => p.itens.findIndex((element) => element.codigoBarra === event.target.value));

      if (c[0] > -1) {
        contaProduto(Pedido[0].itens[c[0]]);
        event.target.value = '';
        document.getElementById('npedido').focus;
      } else {
        serr.play();
        event.target.value = '';
        document.getElementById('npedido').focus;
      }
    }
  }

  function contaProduto(i) {
    if (Produto.length === 0) {
      setProduto([
        ...Produto,
        {
          codigoBarra: i['codigoBarra'],
          descricao: i['descricaoProduto'],
          quantidade: 1,
          peso: i['peso'] / i['quantidade'],
        },
      ]);
    } else {
      const y = Produto.findIndex((element) => element.codigoBarra === i.codigoBarra);
      if (y === -1) {
        setProduto([
          ...Produto,
          {
            codigoBarra: i['codigoBarra'],
            descricao: i['descricaoProduto'],
            quantidade: 1,
            peso: i['peso'] / i['quantidade'],
          },
        ]);
      } else {
        setProduto(
          Produto.map((p) =>
            p.codigoBarra === i.codigoBarra
              ? { ...p, quantidade: p.quantidade + 1, peso: (i['peso'] / i['quantidade']) * (p.quantidade + 1) }
              : { ...p },
          ),
        );
      }
    }
    bee.play();
  }

  function ObjCompare(obj1, obj2) {
    var x = 0;
    if (obj1.length === obj2.length) {
      for (let i = 0; i < obj1.length; i++) {
        const v = obj2.findIndex((element) => element.codigoBarra === obj1[i].codigoBarra);

        if (v > -1) {
          if (obj1[i].quantidade === obj2[v].quantidade) {
            x = x + 0;
          } else {
            x = x + 1;
          }
        }
      }
    } else {
      x = x + 1;
    }
    console.log(x);
    if (x == 0) {
      return true;
    } else {
      return false;
    }
  }

  function conferir() {
    const itens = [];
    Pedido.map((p) =>
      p.itens.map((i) =>
        itens.push({ codigoBarra: i.codigoBarra, descricao: i.descricaoProduto, quantidade: i.quantidade }),
      ),
    );

    if (ObjCompare(itens, Produto)) {
      setSteps(1);
      valor(1);
      invalido(-1);
    } else {
      invalido(0);
      setMsg('Itens Divergentes!');
    }
  }

  function ApagaError() {
    document.getElementById('msg').innerText = '';
  }

  function buscarPedido() {
    try {
      get(setPedido, 'pedidoscompras', 'v1/', document.getElementById('npedido').value);
      Pedido ? setExpanded(true) : (document.getElementById('msg').innerText = 'Pedido não encontrado!');
      window.setTimeout(ApagaError, 3000);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Grid container spacing={1}>
      <Grid item xs={2}>
        <TextField id="npedido" label="Busca Pedido" onChange={''} type="search" />
        <Typography id="msg" variant="overline" color="error"></Typography>
      </Grid>
      <Grid item xs={2}>
        <IconButton aria-label="pesquisa" onClick={() => buscarPedido()}>
          <ContentPasteSearchIcon />
        </IconButton>
      </Grid>
      <Grid item xs={12}>
        <Divider />
      </Grid>

      <Grid item xs={12}>
        <Accordion
          style={{ boxShadow: 'none', borderTop: 'none' }}
          expanded={expanded}
          /*onChange={handleChange('panel1')}*/
          className={'classes.adiciona'}
        >
          <AccordionSummary
            className={'classes.summary'}
            expandIcon={''}
            /*aria-controls="panel1a-content"*/ id="panel1a-header"
          ></AccordionSummary>
          <AccordionDetails>
            <Grid container spacing={1}>
              <Grid item xs={12}>
                <TextField id="localiza" label="Insere Produto" onChange={handleChangeB} type="search" />
              </Grid>
              <Grid item xs={12}>
                <Box>
                  <SimpleTable col={col} row={Produto} title={title} botao={false} />
                </Box>
              </Grid>
              <Grid container spacing={0}>
                <Grid item xs={2}>
                  <Button
                    variant="contained"
                    disabled={Produto.length > 0 != '' ? false : true}
                    color="primary"
                    startIcon={<BookmarkAddedIcon />}
                    onClick={conferir}
                  >
                    Conferir
                  </Button>
                </Grid>
                <Grid item xs={1}>
                  <Button
                    variant="contained"
                    disabled={Produto.length > 0 != '' ? false : true}
                    color="error"
                    startIcon={<BookmarkAddedIcon />}
                    onClick={() => setProduto([])}
                  >
                    Descartar
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </AccordionDetails>
        </Accordion>
      </Grid>
    </Grid>
  );
};

export default ConferenciaCega;

ConferenciaCega.propTypes = {
  steps: P.any.isRequired,
  invalido: P.func,
  setSteps: P.func,
  valor: P.func,
  setMsg: P.string,
  Produto: P.any,
  setProduto: P.func,
  Pedido: P.any,
  setPedido: P.func,
  setNpedido: P.any,
};
