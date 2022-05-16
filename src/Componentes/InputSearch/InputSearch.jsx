import React from 'react';
import InputBase from '@material-ui/core/InputBase';
import { useStyles } from './style';
import SearchIcon from '@material-ui/icons/Search';
import PropTypes from 'prop-types';

const InputSearch = ({ setSearchValue, searchValue }) => {
  const classes = useStyles();

  function handleChange(e) {
    const { value } = e.target;
    setSearchValue ? setSearchValue(value) : '';
  }

  return (
    <div className={classes.search}>
      <div className={classes.searchIcon}>
        <SearchIcon />
      </div>
      <InputBase
        placeholder="Search…"
        classes={{
          root: classes.inputRoot,
          input: classes.inputInput,
        }}
        value={searchValue}
        inputProps={{ 'aria-label': 'search' }}
        onChange={handleChange}
      />
    </div>
  );
};

export default InputSearch;

InputSearch.propTypes = {
  handleChange: PropTypes.any.isRequired,
  searchValue: PropTypes.any.isRequired,
  setSearchValue: PropTypes.any.isRequired,
  dados: PropTypes.any.isRequired,
  campo1: PropTypes.any.isRequired,
  campo2: PropTypes.any.isRequired,
};
