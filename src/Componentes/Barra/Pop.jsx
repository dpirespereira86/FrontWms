import { Divider, Typography } from '@material-ui/core';
import { React, useContext } from 'react';
import useStyles from '../Barra/styles';
import { Context } from '../../Config/Context/ContextEstoque';
import Box from '@material-ui/core/Box';
import Popover from '@material-ui/core/Popover';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import SettingsIcon from '@material-ui/icons/Settings';

const Pop = () => {
  const classes = useStyles();
  const { email, last_login, setor } = useContext(Context);

  const data =
    last_login != null
      ? last_login.substring(8, 10) + '/' + last_login.substring(5, 7) + '/' + last_login.substring(0, 4)
      : '';
  const hora = last_login != null ? last_login.substring(11, 19) : '';

  function handlexit() {
    localStorage.removeItem('token');
    localStorage.removeItem('empresa');
    localStorage.removeItem('email');
    window.location.reload();
  }

  return (
    <PopupState variant="popover" popupId="demo-popup-popover">
      {(popupState) => (
        <div>
          <MoreVertIcon className={classes.openicon} variant="contained" color="primary" {...bindTrigger(popupState)} />
          <Popover
            anchorReference="anchorPosition"
            anchorPosition={{ top: 60, left: 1530 }}
            {...bindPopover(popupState)}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'center',
            }}
          >
            <Box p={2}>
              <Typography className={classes.titulopaper}>Minha Conta:</Typography>
              <Divider className={classes.justo} />
              <Typography className={classes.emailpaper}>{email}</Typography>
              <Typography className={classes.emailpaper}>{'Setor: ' + setor}</Typography>
              <Typography className={classes.loginpaper}>{'Último login: ' + data + ' ' + ' ' + hora}</Typography>

              <Divider className={classes.justo} />
              <div className={classes.lmenusair}>
                <SettingsIcon className={classes.iconconfig} />
                <h4 className={classes.button} variant="contained" color="primary">
                  <a href="\configuracao">Configuração</a>
                </h4>
                <PowerSettingsNewIcon className={classes.iconsair} />
                <h4 className={classes.button} onClick={handlexit} variant="contained" color="primary">
                  Sair
                </h4>
              </div>
            </Box>
          </Popover>
        </div>
      )}
    </PopupState>
  );
};

export default Pop;

// Pop.propTypes = {
//   openP: P.any,
//   anchorEl: P.any,
//   setAnchorEl: P.any,
//   email: P.any,
//   handleClose: P.any,
//   id: P.any,
// };
