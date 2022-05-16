import React from 'react';
import clsx from 'clsx';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import P from 'prop-types';
import Router from '../../Config/Rotas/router';
import useStyles from './styles';
import MenuLateral from './MenuLateral';
import Toolbars from './Toolbar';

export default function MiniDrawer() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbars open={open} setOpen={setOpen} />
      </AppBar>
      <MenuLateral open={open} setOpen={setOpen} />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Router />
      </main>
    </div>
  );
}

MiniDrawer.propTypes = {
  componente: P.any,
};
