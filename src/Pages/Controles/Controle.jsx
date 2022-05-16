import { Divider } from '@material-ui/core';
import { React /*,useEffect, useState*/ } from 'react';
//import { CardKpi } from '../../Componentes/CardKpi/CardKpi';
//import Rua from '../../Componentes/Estoque/Principal/Rua';
import TituloPagina from '../../Componentes/Titulo/TituloPagina';
import CardContent from '@material-ui/core/CardContent';
//import axios from 'axios';
//import { ApiEstoquePrincipal } from '../../Services/API/enderecos';
//import AcUnitIcon from '@material-ui/icons/AcUnit';
//import AvatarGroup from '@material-ui/lab/AvatarGroup';
//import WidgetsOutlinedIcon from '@material-ui/icons/WidgetsOutlined';
//import useStyles from './style';

export const Controle = () => {
  // const [Principal, setPrincipal] = useState([]);
  //const classes = useStyles();

  // useEffect(() => {
  //   axios
  //     .get(ApiEstoquePrincipal, {
  //       headers: {
  //         Authorization: 'Token ' + localStorage.getItem('token'),
  //         'Content-Type': 'application/json',
  //       },
  //     })
  //     .then((res) => {
  //       setPrincipal(res.data);
  //     });
  // }, []);

  // const Volume = Principal.reduce((Acumulador, VolumeAtual) => {
  //   const x = VolumeAtual.volume === null ? 0 : parseInt(VolumeAtual.volume);
  //   Acumulador = x + Acumulador;
  //   return parseInt(Acumulador);
  // }, {});

  // const Peso = Principal.reduce((Acumulador, VolumeAtual) => {
  //   const x = VolumeAtual.peso === null ? 0 : parseInt(VolumeAtual.peso);
  //   Acumulador = x + Acumulador;
  //   return parseInt(Acumulador);
  // }, {});

  // const v = Volume.toString();
  // const p = Peso.toString();

  return (
    <>
      <div>
        <TituloPagina titulo={'Home'} />
      </div>
      <Divider />
      {/* INICO CARDS */}
      {/* VOLUMES */}
      {/*<AvatarGroup max={7}>
        <div className={classes.cards}>
          <WidgetsOutlinedIcon className={classes.icone} />
          {/*<CardKpi titulo={'Volume:'} numero={v} info={'valor atual'}></CardKpi>*
        {/*</div>
        <div className={classes.cards}>
          <AcUnitIcon className={classes.icone} />
          {/*<CardKpi titulo={'Peso:'} numero={p} info={'valor atual'}></CardKpi>*
        </div>
        <div className={classes.cards}>
          <AcUnitIcon className={classes.icone} />
          <CardKpi titulo={'Volume:'} numero={'5'} info={'valor atual'}></CardKpi>
        </div>

        {/* INICO CARDS
  </AvatarGroup>*/}

      <CardContent>
        <strong>Controle</strong>
      </CardContent>
    </>
  );
};
