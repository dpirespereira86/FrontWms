import React, { useState } from 'react';
import { List, ListItem, ListItemIcon, ListItemSecondaryAction, Typography } from '@material-ui/core';
import { useStyles } from './submenustyles';
import P from 'prop-types';

const SubMenu = ({ item, open }) => {
  const classes = useStyles();
  const [subnav, setSubnav] = useState(false);
  const showSubnav = () => setSubnav(!subnav);

  return (
    <List classes={{ root: classes.geral }}>
      <ListItem classes={{ root: classes.sidebar }} key={item.title} to={item.path} onClick={item.subNav && showSubnav}>
        <ListItemIcon classes={{ root: classes.icone }}>{item.icon}</ListItemIcon>
        <a href={item.path} className={classes.label}>
          <Typography variant="h6" component="h2">
            {item.title}
          </Typography>
        </a>

        {open ? (
          <ListItemSecondaryAction>
            {item.subNav && subnav ? item.iconOpened : item.subNav ? item.iconClosed : null}
          </ListItemSecondaryAction>
        ) : null}
      </ListItem>

      {subnav &&
        item.subNav.map((item, index) => {
          return (
            <>
              <a className={classes.Sublabel} href={item.path}>
                <ListItem key={index} classes={{ root: classes.subar }} to={item.path}>
                  <ListItemIcon classes={{ root: classes.Subicone }}>{item.icon}</ListItemIcon>
                  <Typography className={classes.Sublabel}>{item.title}</Typography>
                </ListItem>
              </a>
            </>
          );
        })}
    </List>
  );
};

export default SubMenu;

SubMenu.propTypes = {
  item: P.any,
  open: P.any,
};
