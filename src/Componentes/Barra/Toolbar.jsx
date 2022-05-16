import { React, useEffect, useState } from 'react';
import useStyles from './styles';
import P from 'prop-types';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Avatar, Box } from '@material-ui/core';
import logoColor from '../../image/2D Projetos_lbranca.png';
import clsx from 'clsx';
//import { Context } from '../../Config/Context/ContextEstoque';
import Pop from './Pop';
import axios from 'axios';
import { base } from '../../Services/API/enderecos';

const Toolbars = (props) => {
  const classes = useStyles();
  const { open, setOpen } = props;
  //const { first_name, last_name, setUser } = useContext(Context);
  const [dadosUser, setdadosUser] = useState('');
  const [email] = useState({ email: localStorage.getItem('email') });

  useEffect(() => {
    axios
      .post(base + 'v1/usuarios', email, {
        headers: {
          Authorization: localStorage.getItem('token'),
          'Content-Type': 'application/json',
        },
      })
      .then((res) => {
        setdadosUser(res.data), localStorage.setItem('empresa', res.data['empresa']);
      });
  }, [email]);

  const nome = dadosUser['nome'] != null ? dadosUser.nome.substring(0, 1) : 'N';
  //const sobrenome = last_name != null ? last_name.substring(0, 1) : 'N';

  return (
    <div>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={() => setOpen(true)}
          edge="start"
          className={clsx(classes.menuButton, {
            [classes.hide]: open,
          })}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" noWrap>
          <img className={classes.logo} src={logoColor} alt="logo" />
          WMS
        </Typography>
        <Box className={classes.box} />
        <Avatar className={classes.avatar}>{nome}</Avatar>
        <div>
          <Typography variant="h6" component="h2" noWrap className={classes.saud}>
            Bem Vindo:
          </Typography>
          <h4 className={classes.usuario}>{dadosUser.nome}</h4>
        </div>
        <div>
          <Pop className={classes.openicon} />
        </div>
      </Toolbar>
    </div>
  );
};

export default Toolbars;

Toolbars.propTypes = {
  open: P.any,
  setOpen: P.any,
};
