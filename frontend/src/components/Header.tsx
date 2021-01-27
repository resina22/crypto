import React from 'react';
import {
  createStyles,
  makeStyles,
  AppBar,
  Toolbar,
  Theme,
  Typography,
  Button,
  Avatar,
  IconButton,
  Grid,
  Box,
} from '@material-ui/core';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import { Link as RouterLink } from 'react-router-dom';
import logo from '../assets/logo.png';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    logo: {
      width: '50px',
      height: '50px',
    },
    'btn-link': {
      margin: '0 10px',
      color: '#fff',
      borderColor: '#fff',
    },
  }),
);

const Header: React.FC = () => {
  const style = useStyles();

  return (
    <div>
      <AppBar position="static">
        <Toolbar color="primary">
          <Grid container justify="flex-start" alignItems="center">
            <Box component="div">
              <Avatar alt="Remy Sharp" src={logo} className={style.logo} />
            </Box>

            <Grid item xs={8} lg={10}>
              <Typography variant="h6">
                <Button
                  variant="outlined"
                  className={style['btn-link']}
                  component={RouterLink}
                  to="/"
                >
                  Valor monetário
                </Button>
              </Typography>
            </Grid>

            <Grid item xs={1} lg={1}>
              <Box textAlign="end">
                <IconButton
                  aria-label="Sair"
                  className={style['btn-link']}
                  component={RouterLink}
                  to="login"
                >
                  <PowerSettingsNewIcon fontSize="small" />
                </IconButton>
              </Box>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
