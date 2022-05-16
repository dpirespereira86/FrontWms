import { React, useState } from 'react';
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import CloseIcon from '@mui/icons-material/Close';
import PropTypes from 'prop-types';

export default function TransitionAlerts(props) {
  const [openAlert, setOpenAlert] = useState(false);
  const { msg } = props;
  setOpenAlert(props.open);

  return (
    <Box sx={{ width: '100%' }}>
      <Collapse in={openAlert}>
        <Alert
          variant="filled"
          severity="success"
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setOpenAlert(false);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          sx={{ mb: 2 }}
        >
          {msg}
        </Alert>
      </Collapse>
    </Box>
  );
}

TransitionAlerts.propTypes = {
  props: PropTypes.any,
  msg: PropTypes.string.isRequired,
  open: PropTypes.bool.isRequired,
};
