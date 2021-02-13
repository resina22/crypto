import React, { useEffect, useState } from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

interface SimpleSnackbar {
  timeout?: number;
  open: boolean;
  message: string;
}

export default function SimpleSnackbar(props: SimpleSnackbar) {
  const [open, setOpen] = useState(props.open);
  const handleClose = (
    event: React.SyntheticEvent | React.MouseEvent,
    reason?: string,
  ) => {
    setOpen(false);
  };

  useEffect(() => {
    setOpen(props.open);
  }, [props.open]);

  const { timeout, message } = props;
  return (
    <div>
      <Snackbar
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={open}
        message={message}
        autoHideDuration={timeout || 3000}
        onClose={handleClose}
        action={
          <React.Fragment>
            <IconButton
              size="small"
              aria-label="close"
              color="inherit"
              onClick={handleClose}
            >
              <CloseIcon fontSize="small" />
            </IconButton>
          </React.Fragment>
        }
      />
    </div>
  );
}
