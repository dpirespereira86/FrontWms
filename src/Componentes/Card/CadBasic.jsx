import React from 'react';
import P from 'prop-types';
import Grid from '@mui/material/Grid';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import useStyles from './style';

const CadBasic = (props) => {
  const classes = useStyles();

  const { action } = props;
  const { avatar } = props;
  const { title } = props;
  const { subTitle } = props;
  const { valor } = props;
  const { icone } = props;
  const { color } = props;
  const { altura } = props;
  const { largura } = props;

  return (
    <Card sx={{ backgroundColor: color, width: largura, height: altura }}>
      <CardHeader
        avatar={avatar ? <Avatar aria-label=""></Avatar> : ''}
        action={action ? <IconButton aria-label=""></IconButton> : ''}
        title={<Typography className={classes.titulo}>{title}</Typography>}
        subheader={
          <Typography variant="body2" color="initial">
            {subTitle}
          </Typography>
        }
        className={classes.card}
        titleTypographyProps
      />
      <CardContent>
        <Grid container spacing={1}>
          <Grid className={classes.contValor} item sx={6}>
            <Typography variant="h4" className={classes.valor}>
              {valor}
            </Typography>
          </Grid>
          <Grid className={classes.icone} alignItems="center" item sx={6}>
            {icone}
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

CadBasic.propTypes = {
  action: P.any,
  avatar: P.any,
  title: P.any,
  subTitle: P.any,
  valor: P.any,
  icone: P.any,
  color: P.any,
  altura: P.any,
  largura: P.any,
};

export default CadBasic;
