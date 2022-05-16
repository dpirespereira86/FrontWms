import { React, useState, useEffect } from 'react';
//import TextField from '@mui/material/TextField';
import P from 'prop-types';
import { Formik } from 'formik';
import Typography from '@mui/material/Typography';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import useStyles from './style';
import { Grid, TextField } from '@material-ui/core';
import { post /*get*/ } from '../../../Services/API/Axios.js';
import { get } from '../../../Services/API/Axios.js';
import Alert from '@material-ui/lab/Alert';
import Collapse from '@material-ui/core/Collapse';
import Campo from '../../../Componentes/Inputs/input';
import ComboForn from '../../../Componentes/Combo/comboForn';
import BasicSelect from '../../../Componentes/Combo/Select';
import InfoIcon from '@mui/icons-material/Info';
import { BootstrapTooltip } from '../../../Componentes/ToolTip/Tooltip';
import Divider from '@mui/material/Divider';
import SelectItem from './Novo/SelectItem';

const NovoPedido = () => {
  const classes = useStyles();

  const [tipo, setTipo] = useState('');
  const [msg, setMsg] = useState('');
  const [resultado, setResultado] = useState('');
  const [fornecedor, setFornecedor] = useState('');
  const [produtos, setProdutos] = useState('');
  const [selected, setSelected] = useState('');
  const [item, setItem] = useState([1]);
  //const [itensPedido, setItenPedido] = useState('');
  const [forne, setForne] = useState('');
  const [vTota, setvTotal] = useState(0.0);
  const [vData, setvData] = useState('');

  useEffect(() => {
    get(setFornecedor, 'fornecedores', 'v1/', '');
  }, []);

  useEffect(() => {
    get(setProdutos, 'produtos', 'v1/', '');
  }, []);

  const handleChangeForne = (event) => {
    setForne(event.target.value);
    console.log(event.target.value);
    fornecedor.map((f) => (f.id == event.target.value ? setSelected(f.razaoSocial) : ''));
  };

  function salvarPedido(values) {
    preparaItens();
    values.fornecedor = { id: forne };
    values.itens = Pedido;
    values.previsaoEntrega = Date.parse(vData);
    values.prazoEntrega = document.getElementById('prazoEntrega').value;
    values.valorTotal = vTota;

    post(
      values,
      setTipo,
      setMsg,
      setResultado,
      'Pedido não pode ser Salvo',
      'Salvo com Sucesso',
      'v1',
      'pedidoscompras',
    );
  }

  const handleChangeDate = (event) => {
    let hoje = new Date();
    hoje.setDate(hoje.getDate() + parseInt(event.target.value) + 31);
    setvData(hoje.getDate() + '/' + hoje.getMonth() + '/' + hoje.getFullYear());
  };

  const filterProdutos = selected
    ? produtos.filter((dados) => {
        return dados.fornecedor.toLowerCase().includes(selected.toLowerCase());
      })
    : produtos;

  function addItem() {
    item.length == 0 ? setItem([...item, 1]) : setItem([...item, item[item.length - 1] + 1]);
  }

  function deleteItem(linha) {
    // captura o valor total do Item e transforma em Float
    const element = document.getElementById('valorItemTotal' + linha).innerText;
    var x = element.substring(3, element.length).replace('.', ',');
    var numero = x.toString().replace(',', '.');
    var res = parseFloat(numero);

    // verifica se é o último item da lista
    if (linha < item[item.length - 1]) {
      // Pega os valores da linha de baixo
      var produto = document.getElementById('produto' + (linha + 1).toString()).nextElementSibling.value;
      var produtoNome = document.getElementById('produto' + (linha + 1).toString()).innerText;
      var uvcompra = document.getElementById('uvcompra' + (linha + 1)).innerText;
      var vorcado = document.getElementById('vorcado' + (linha + 1)).value;
      var quantidade = document.getElementById('quantidade' + (linha + 1)).value;
      var valorItemTotal = document.getElementById('valorItemTotal' + (linha + 1)).innerText;

      // exclui o numero da linha do array
      let novo = [];
      item.length > 0 ? item.splice(linha - 1, 1) : console.log('errado');

      // reconstroi o array em uma nova ordem
      for (let index = 0; index < item.length; index++) {
        index == 0 ? novo.push(index + 1) : novo.push(parseInt(index) + 1);
      }
      // diminui o valor do item do valor total
      setvTotal(vTota - res);
      setItem(novo);

      // adiciona os valores na linha anterior
      document.getElementById('produto' + linha).nextElementSibling.value = produto;
      document.getElementById('produto' + linha).innerText = produtoNome;
      document.getElementById('uvcompra' + linha).innerText = uvcompra;
      document.getElementById('vorcado' + linha).value = vorcado;
      document.getElementById('quantidade' + linha).value = quantidade;
      document.getElementById('valorItemTotal' + linha).innerText = valorItemTotal;
    } else {
      // exclui o numero da linha do array
      let novo = [];
      item.length > 0 ? item.splice(linha - 1, 1) : console.log('errado');
      // reconstroi o array em uma nova ordem
      for (let index = 0; index < item.length; index++) {
        index == 0 ? novo.push(index + 1) : novo.push(parseInt(index) + 1);
      }
      // diminui o valor do item do valor total
      setvTotal(vTota - res);

      setItem(novo);
    }
  }

  const Pedido = [];

  function preparaItens() {
    for (let index = 0; index <= item.length; index++) {
      if (index > 0) {
        var val = document
          .getElementById('valorItemTotal' + index)
          .innerText.substring(3, document.getElementById('valorItemTotal' + index).innerText.length);

        var prod = document.getElementById('produto' + index);

        Pedido.push({
          produto: { id: parseInt(prod.nextElementSibling.value) },
          quantidade: parseFloat(
            document
              .getElementById('quantidade' + index)
              .value.toString()
              .replace(',', '.'),
          ),
          valorUnitario: parseFloat(
            document
              .getElementById('vorcado' + index)
              .value.toString()
              .replace(',', '.'),
          ),
          valorItem: parseFloat(val.toString().replace(',', '.')),
        });
      }
    }
  }

  return (
    <div>
      <Typography id="modal-modal-title" variant="h6" component="h2">
        Novo Pedido
      </Typography>
      <Box>
        <Formik
          initialValues={{
            prazoEntrega: 0,
            previsaoEntrega: vData,
            valorTotal: vTota,
            origem: 0,
            condicaoPagamento: '',
            prazoPagamento: '',
            status: 2,
            fornecedor: '',
            itens: {},
          }}
          /*validationSchema={'validationSchema'}*/
          onSubmit={(values) => {
            salvarPedido(values);
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
                  <TextField
                    id="prazoEntrega"
                    variant="outlined"
                    label="Prazo de Entrega"
                    onChange={handleChangeDate}
                    type="number"
                    autoFocus
                  />
                </Grid>
                <Grid item xs={1}>
                  <BootstrapTooltip title="Inserir em quantos dias corridos o pedido será entregue">
                    <InfoIcon />
                  </BootstrapTooltip>
                </Grid>
                <Grid item xs={2}>
                  <Campo
                    variant="outlined"
                    id="previsaoEntrega"
                    name="previsaoEntrega"
                    label="Previsão de Entrega"
                    fullWidth
                    type="text"
                    value={vData}
                    disabled
                  />
                </Grid>
                <Grid item xs={2}>
                  <Typography id={'valorTotal'} name={'valorTotal'} variant="h6">
                    {vTota.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}
                  </Typography>
                </Grid>
                <Grid item xs={2}>
                  <ComboForn
                    op={[
                      { valor: 0, name: 'A Vista' },
                      { valor: 1, name: 'A Prazo' },
                    ]}
                    id="condicaoPagamento"
                    name="condicaoPagamento"
                    label="Condição de Pagamento"
                    valor="valor"
                    display="name"
                  />
                </Grid>
                <Grid item xs={2}>
                  <Campo
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="prazoPagamento"
                    type="text"
                    name="prazoPagamento"
                    label="Prazo de Pagamento"
                    autoFocus
                  />
                </Grid>
                <Grid item xs={5}>
                  <BasicSelect
                    variant="outlined"
                    dados={fornecedor}
                    definido={forne}
                    display="razaoSocial"
                    valor="id"
                    label="Fornecedor"
                    handleChange={handleChangeForne}
                    key="id"
                    name="Fornecedor"
                  />
                </Grid>
                <Grid className={classes.nitem} item xs={12}>
                  <Divider />
                  <button className={classes.nitem} onClick={addItem}>
                    novo item
                  </button>
                </Grid>
              </Grid>
              <SelectItem setvTotal={setvTotal} item={item} delete={deleteItem} filterProdutos={filterProdutos} />
              <Grid container direction="row" spacing={1}>
                <Divider />
              </Grid>
              <Grid container className={classes.terceiro} direction="row" spacing={1}>
                <Grid className={classes.gSalvar} item xs={1}>
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

NovoPedido.propTypes = { props: P.any, handleSubmit: P.any };

export default NovoPedido;
