import { React, useState } from 'react';
import { Avatar } from '@material-ui/core';
import useStyles from './style';
import Popup from '../Popup/Popup';
import Tooltip from '@material-ui/core/Tooltip';
import P from 'prop-types';

const Camadas = (props) => {
  const { estoque, nivel } = props;
  const classes = useStyles();
  const [openPopup, setOpenPopup] = useState(false);
  const [Peso, setPeso] = useState('');
  const [Posicao, setPosicao] = useState('');
  const [Volume, setVolume] = useState('');
  const [Lote, setLote] = useState('');

  const v = estoque.filter((f) => f.nivel === nivel.toString());

  if (estoque != null) {
    return (
      <>
        {v.map((e) => {
          return (
            <div className={classes.ajustes} key={e.id}>
              <Tooltip title={'P: ' + e.peso + ' / ' + 'V: ' + e.volume}>
                <Avatar
                  onClick={() => {
                    setOpenPopup(true);
                    setPeso(e.peso);
                    setPosicao(e.nome);
                    setVolume(e.volume);
                    setLote(e.lote);
                  }}
                  variant="square"
                  className={e.peso ? classes.posicao : classes.vazio}
                  key={e.id}
                >
                  {e.predio}
                </Avatar>
              </Tooltip>
            </div>
          );
        })}

        <Popup
          openPopup={openPopup}
          setOpenPopup={setOpenPopup}
          peso={Peso}
          posicao={Posicao}
          volume={Volume}
          lote={Lote}
        ></Popup>
      </>
    );
  } else {
    return '';
  }
};
export default Camadas;

Camadas.propTypes = {
  rua: P.any,
  nivel: P.any,
  estoque: P.any,
};
