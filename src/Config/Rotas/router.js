import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import SignInSide from '../../Pages/Login/login';
import P from 'prop-types';
import { history } from '../Rotas/history';
import { Controle } from '../../Pages/Controles/Controle';
//import Home from '../../Pages/Home/home';
import { IsAutentcted } from '../../Config/Rotas/pivateroutes';
import Configuracao from '../../Pages/Configuracao/Configuracao';
import CadProduto from '../../Pages/Produto/Cadastro/CadProduto';
import CadFornecedor from '../../Pages/Fornecedor/Cadastro/CadFornecedor';
import Page404 from '../../Pages/404/Page404';
import ListaProduto from '../../Pages/Produto/Lista/ListaProdutos';
import ListaFornecedor from '../../Pages/Fornecedor/Lista/ListaFornecedor';
import Pedido from '../../Pages/Compra/Pedido/Pedido';
import Entrada from '../../Pages/Movimentacoes/Entrada/Entrada';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) => (IsAutentcted() ? <Component {...props} /> : <Redirect to={{ pathname: '/' }} />)}
  />
);

function Routes() {
  return (
    <BrowserRouter history={history}>
      <Switch>
        <Route exact path="/" component={SignInSide} />
        <PrivateRoute exact path="/home" component={Controle} />
        <PrivateRoute exact path="/configuracao" component={Configuracao} role={1} />
        <PrivateRoute exact path="/produtos/cadastro" component={CadProduto} role={1} />
        <PrivateRoute exact path="/produtos/pesquisa" component={ListaProduto} role={1} />
        <PrivateRoute exact path="/fornecedor/cadastro" component={CadFornecedor} role={1} />
        <PrivateRoute exact path="/fornecedor/pesquisa" component={ListaFornecedor} role={1} />
        <PrivateRoute exact path="/compra/pedido" component={Pedido} role={1} />
        <PrivateRoute exact path="/movimentacao/entrada" component={Entrada} role={1} />
        <Route component={Page404} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;

PrivateRoute.propTypes = {
  component: P.any,
};
