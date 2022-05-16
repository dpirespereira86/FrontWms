import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import PropTypes from 'prop-types';

export default function BasicModal(props) {
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: props.tamanho,
    maxHeigth: 400,
    bgcolor: 'background.paper',
    border: '',
    boxShadow: 24,
    borderRadius: 3,
    p: 4,
  };

  return (
    <div>
      <Modal
        open={props.open}
        onClose={props.close}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>{props.corpo}</Box>
      </Modal>
    </div>
  );
}

BasicModal.propTypes = {
  props: PropTypes.any,
  close: PropTypes.any,
  open: PropTypes.any,
  corpo: PropTypes.any,
  tamanho: PropTypes.any,
};
