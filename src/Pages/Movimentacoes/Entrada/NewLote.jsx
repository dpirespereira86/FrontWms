import { React, useState /*,useEffect*/ } from 'react';
import P from 'prop-types';
//import { get } from '../../../Services/API/Axios.js';
import TransferList from '../../../Componentes/TextTranfer/TextTransfer';
import Grid from '@mui/material/Grid';
import CadBasic from '../../../Componentes/Card/CadBasic.jsx';
//import AnimationIcon from '@mui/icons-material/Animation';
import ScaleIcon from '@mui/icons-material/Scale';
import BookmarkAddedIcon from '@mui/icons-material/BookmarkAdded';
import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';
import Button from '@mui/material/Button';
import CollapsibleTable from '../../../Componentes/Table/TableCollapse.jsx';
import StyleIcon from '@mui/icons-material/Style';
import BatchPredictionIcon from '@mui/icons-material/BatchPrediction';

const NewLote = (props) => {
  const { Produto } = props;
  const { nPedido } = props;
  const { lote } = props;
  const { setLote } = props;
  const { valor } = props;
  const { setSteps } = props;
  const { invalido } = props;

  const esquerda = [];

  Produto.map((p) => {
    for (let index = 0; index < p.quantidade; index++) {
      esquerda.push({
        nEstoque: nPedido[0].id + p.codigoBarra + '-' + index,
        codigoBarra: p.codigoBarra,
        descricao: p.descricao,
        peso: p.peso / p.quantidade,
      });
    }
  });

  const [left, setLeft] = useState(esquerda);
  const [right, setRight] = useState([]);

  function somaPeso() {
    var peso = 0;
    right.map((p) => (peso = peso + p.peso));
    return peso;
  }

  function somaPesoLeft() {
    var peso = 0;
    left.map((p) => (peso = peso + p.peso));
    return peso;
  }

  function criaLote() {
    if (lote.length === 0) {
      setLote([{ id: 1, quantidade: right.length, peso: somaPeso(), itens: right }]);
      setRight([]);
    } else {
      const x = lote.length - 1;
      lote.push({ id: lote[x].id + 1, quantidade: right.length, peso: somaPeso(), itens: right });
      setRight([]);
    }
  }

  function next() {
    setSteps(2);
    valor(2);
    invalido(-1);
  }

  return (
    <div>
      <Grid container spacing={1}>
        <Grid item xs={2} />
        <Grid item xs={3}>
          <CadBasic
            title={'Tipo de Produto'}
            subTitle={''}
            valor={Produto.length}
            icone={
              <BookmarkAddIcon
                sx={{ fontSize: 80, color: '#E6E6FA', position: 'absolute', paddingTop: 0, marginX: 7, marginY: -5 }}
              />
            }
            color={'#F0F8FF'}
            largura={200}
            altura={110}
          />
        </Grid>
        <Grid item xs={3}>
          <CadBasic
            title={'Qt Produtos'}
            subTitle={''}
            valor={left.length}
            icone={
              <BookmarkAddedIcon
                sx={{ fontSize: 80, color: '#E6E6FA', position: 'absolute', paddingTop: 0, marginX: 4, marginY: -5 }}
              />
            }
            color={'#F0F8FF'}
            largura={200}
            altura={110}
          />
        </Grid>
        <Grid item xs={3}>
          <CadBasic
            title={'Peso (Kg)'}
            subTitle={''}
            valor={somaPesoLeft()}
            icone={
              <ScaleIcon
                sx={{ fontSize: 80, color: '#E6E6FA', position: 'absolute', paddingTop: 0, marginX: 3, marginY: -5 }}
              />
            }
            color={'#F0F8FF'}
            largura={200}
            altura={110}
          />
        </Grid>
        <Grid item xs={1} />
      </Grid>
      <Grid sx={{ marginTop: 5 }} container spacing={1}>
        <Grid item xs={12}>
          <TransferList
            left={left}
            setLeft={setLeft}
            titleR={'Lotes'}
            titleL={'Recebidos'}
            right={right}
            setRight={setRight}
            desc1={'nEstoque'}
            desc2={'descricao'}
          />
        </Grid>
        <Grid item xs={2}>
          <Button
            onClick={criaLote}
            disabled={right.length > 0 != '' ? false : true}
            variant="contained"
            endIcon={<BatchPredictionIcon />}
          >
            Fechar Lote
          </Button>
        </Grid>
        <Grid item xs={2}>
          <Button
            onClick={next}
            disabled={left.length === 0 && right.length === 0 ? false : true}
            variant="contained"
            endIcon={<StyleIcon />}
          >
            Etiquetas
          </Button>
        </Grid>
        <Grid item xs={12}>
          <CollapsibleTable rows={lote} />
        </Grid>
      </Grid>
    </div>
  );
};

NewLote.propTypes = {
  Produto: P.any.isRequired,
  nPedido: P.any.isRequired,
  lote: P.any.isRequired,
  setLote: P.func.isRequired,
  valor: P.any.isRequired,
  setSteps: P.func.isRequired,
  invalido: P.func.isRequired,
};

export default NewLote;
