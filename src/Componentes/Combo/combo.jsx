import { React } from 'react';
import { useField } from 'formik';
import { Select } from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';
import useStyles from './styles.js';
import P from 'prop-types';

const Combo = ({ label, ...props }) => {
  const classes = useStyles();

  const [field, meta] = useField(props);

  return (
    <div>
      <label htmlFor={props.id}>{label}</label>
      <Select
        {...field}
        {...props}
        className={meta.error && meta.touched ? '' : classes.formControl}
        helperText={meta.error && meta.touched ? meta.error : ''}
        error={meta.error && meta.touched ? true : false}
      >
        <MenuItem value=""></MenuItem>
        <MenuItem value="LOCAÇÃO">LOCAÇÃO</MenuItem>
        <MenuItem value="CLIENTE">CLIENTE</MenuItem>
        <MenuItem value="COMPRA">COMPRA</MenuItem>
      </Select>
    </div>
  );
};

export default Combo;

Combo.propTypes = {
  label: P.string.isRequired,
  id: P.string.isRequired,
};
