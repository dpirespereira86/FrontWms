import { React } from 'react';
import { useField } from 'formik';
import { TextField } from '@material-ui/core';
import P from 'prop-types';
import useStyles from './style';

const Campo = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  const classes = useStyles();
  return (
    <div>
      <TextField
        {...field}
        {...props}
        label={!!meta.error && meta.touched ? 'Error' : label}
        className={!!meta.error && meta.touched ? '' : classes.root}
        helperText={!!meta.error && meta.touched ? meta.error : ''}
        error={!!meta.error && meta.touched ? true : false}
      />
    </div>
  );
};

export default Campo;

Campo.propTypes = {
  label: P.string.isRequired,
};
