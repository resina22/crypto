import React from 'react';
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  createStyles,
  Divider,
  Grid,
  IconButton,
  makeStyles,
  Theme,
} from '@material-ui/core';
import logo from '../../assets/logo.png';
import FormLogin from '../Login/Form';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    img: {
      width: '100px',
      height: '100px',
      margin: '0 auto',
    },
    gridCard: {
      minHeight: '80vh',
    },
  }),
);

const Login: React.FC = () => {
  const style = useStyles();

  return (
    <div>
      <Grid
        container
        justify="center"
        alignItems="center"
        className={style.gridCard}
      >
        <Grid item xs={11} sm={5} md={5} lg={2}>
          <Card>
            <CardMedia image={logo} title="Logo" className={style.img} />
            <Divider />

            <CardContent>
              <FormLogin />
            </CardContent>

            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites"></IconButton>
              <IconButton aria-label="share"></IconButton>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default Login;
