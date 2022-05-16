import { Button, Dialog, DialogContent, DialogTitle } from '@material-ui/core';
import React from 'react';
import P from 'prop-types';

//setOpenPopup
//title
//children
function Popup(props) {
  const { openPopup, setOpenPopup, posicao, peso, volume, lote } = props;

  return (
    <Dialog open={openPopup}>
      <DialogTitle>
        <Button onClick={() => setOpenPopup(false)} />
        <div>{posicao}</div>
      </DialogTitle>
      <DialogContent>
        <div>{peso}</div>
        <div>{volume}</div>
        <div>{lote}</div>
      </DialogContent>
    </Dialog>
  );
}

export default Popup;

Popup.propTypes = {
  openPopup: P.any,
  setOpenPopup: P.any,
  posicao: P.any,
  peso: P.any,
  volume: P.any,
  lote: P.any,
};
