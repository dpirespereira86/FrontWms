import { React } from 'react';
import Camadas from './Nivel';
import { Avatar } from '@material-ui/core';
import AvatarGroup from '@material-ui/lab/AvatarGroup';
import Grid from '@material-ui/core/Grid';
import useStyles from './style';
import P from 'prop-types';

function Street(props) {
  const classes = useStyles();
  const { Valor } = props;

  const Nivel = Valor.map((e) => {
    var x = e.nivel;
    x > parseInt(e.nivel) || x != parseInt(e.nivel) ? x : (x = parseInt(e.nivel));
    return x;
  });

  const repNivel = Nivel.slice(Nivel.length / 2);

  return (
    <div>
      <Grid item xs={12}>
        {repNivel.map((e) => {
          return (
            <div key={e}>
              <AvatarGroup max={30}>
                <Avatar variant="square" className={classes.nivel}>
                  {e}
                </Avatar>
                <Camadas estoque={Valor} nivel={e} />
              </AvatarGroup>
            </div>
          );
        })}
      </Grid>
    </div>
  );
}

export default Street;

Street.propTypes = {
  Valor: P.any,
  Nivel: P.any,
};
