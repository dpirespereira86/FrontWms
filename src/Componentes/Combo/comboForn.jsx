import { React } from 'react';
import { useField } from 'formik';
import P from 'prop-types';
import useStyles from './styles.js';
import { MenuItem, TextField } from '@material-ui/core';

const ComboForn = ({ op, ...props }) => {
  const classes = useStyles();
  const [field, meta] = useField(props);

  const { display } = props;
  const { valor } = props;

  if (op) {
    return (
      <>
        <TextField
          select
          variant={'outlined'}
          {...field}
          {...props}
          id={props.id}
          label={props.label}
          name={props.name}
          helperText={meta.error && meta.touched ? meta.error : ''}
          error={meta.error && meta.touched ? true : false}
          className={meta.error && meta.touched ? classes.option : classes.formControl}
          defaultValue=""
        >
          <MenuItem className={classes.option} value="">
            Selecione
          </MenuItem>
          {op.map((dados) => {
            return (
              <MenuItem className={classes.option} key={dados.id} value={dados[valor]}>
                {dados[display]}
              </MenuItem>
            );
          })}
        </TextField>
      </>
    );
  } else {
    return (
      <>
        <select
          {...field}
          {...props}
          variant="outlined"
          margin="normal"
          required
          type="text"
          fullWidth
          id={props.id}
          label="Descrição"
          name={props.name}
          autoComplete="descrição"
          autoFocus
          helperText={meta.error && meta.touched ? meta.error : ''}
          error={meta.error && meta.touched ? true : false}
        >
          <option value="0">Falhou</option>
        </select>
      </>
    );
  }
};

export default ComboForn;

ComboForn.propTypes = {
  id: P.string.isRequired,
  op: P.any.isRequired,
};
