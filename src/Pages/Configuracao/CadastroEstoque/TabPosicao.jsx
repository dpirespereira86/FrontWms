import { React, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { SimpleTable } from '../../../Componentes/Table/SimpleTable';
import axios from 'axios';
import { base } from '../../../Services/API/enderecos';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import ModelEstoque from './ModelEstoque';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 1200,
  bgcolor: 'background.paper',
  border: '0px solid #000',
  boxShadow: 24,
  p: 4,
  borderRadius: 5,
};

const TabPosicao = (props) => {
  const [estoques, setEstoques] = useState([]);
  const [dados, setDados] = useState('');
  const [open, setOpen] = useState(false);

  const col = ['nome', 'capacidade', 'quantidade', 'ordem'];
  const title = ['Nome', 'Capacidade(KG)', 'Quantidade(KG)', 'Ordem', ''];

  useEffect(() => {
    axios
      .get(base + 'v1/' + localStorage.getItem('empresa') + '/posicoes/' + props.id, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: localStorage.getItem('token'),
        },
      })
      .then((resp) => {
        setEstoques(resp.data);
      });
  }, [props.atualizar, props.id]);

  const handleClose = () => setOpen(false);

  return (
    <div>
      <SimpleTable
        row={estoques}
        col={col}
        title={title}
        botao={true}
        setDados={setDados}
        setOpen={setOpen}
        end={base + 'v1/' + localStorage.getItem('empresa') + '/posicoes/'}
      />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <ModelEstoque dados={dados} />
        </Box>
      </Modal>
    </div>
  );
};

TabPosicao.propTypes = {
  props: PropTypes.any,
  id: PropTypes.any,
  atualizar: PropTypes.any,
};

export default TabPosicao;
