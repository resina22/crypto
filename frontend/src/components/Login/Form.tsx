import React, { useState } from 'react';
import { VisibilityOff, Visibility } from '@material-ui/icons';
import { login } from './login.service';

import {
  Button,
  createStyles,
  FormControl,
  Grid,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  makeStyles,
  TextField,
  Theme,
} from '@material-ui/core';
import SimpleSnackbar from '../Notification/Snackbar';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    btn: {
      color: '#fff',
    },
  }),
);

const FormLogin = () => {
  const style = useStyles();
  const [showPassword, setShowPassword] = useState(false);
  const [invalidEmail, setInvalidEmail] = useState(false);
  const [invalidPassword, setInvalidPassword] = useState(false);
  const [password, setPassword] = useState(0);
  const [email, setEmail] = useState('');
  const [error, setError] = useState(false);

  const showPasswordChange = () => {
    setShowPassword(!showPassword);
  };

  const validEmail = (event: React.FocusEvent<HTMLInputElement>) => {
    const { target } = event;
    const valid = target.value.match(/\w{3,}@\w{2,}\.\w{2,}/);

    setEmail(target.value);
    setInvalidEmail(valid === null);
  };

  const validPassword = (event: React.FocusEvent<HTMLInputElement>) => {
    const { target } = event;
    const value = target.value.replace(/[^0-9]/gi, '');
    target.value = value.substr(0, 6);

    setPassword(parseInt(target.value));
    setInvalidPassword(target.value.length !== 6);
  };

  const submit = (event: React.FocusEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!invalidEmail && !invalidPassword) {
      login({ email, password });
    }
    setError(true);
    setTimeout(() => setError(false), 3000);
  };

  return (
    <div>
      <SimpleSnackbar open={error} message="Email ou senha inválido" />

      <form autoComplete="off" onSubmit={submit}>
        <Grid container justify="center" alignItems="center" spacing={3}>
          <Grid item xs={12} lg={12}>
            <TextField
              id="login"
              label="Email"
              fullWidth
              type="text"
              onBlur={validEmail}
              error={invalidEmail}
            />
          </Grid>

          <Grid item xs={12} lg={12}>
            <FormControl fullWidth>
              <InputLabel htmlFor="password">Senha</InputLabel>
              <Input
                id="password"
                type={showPassword ? 'text' : 'password'}
                error={invalidPassword}
                onChange={validPassword}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label={
                        showPassword ? 'Ocultar senha' : 'Exibir senha'
                      }
                      onClick={showPasswordChange}
                    >
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
          </Grid>

          <Grid item xs={12} lg={12}>
            <Button
              color="primary"
              variant="contained"
              className={style.btn}
              fullWidth
              type="submit"
            >
              Entrar
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default FormLogin;
