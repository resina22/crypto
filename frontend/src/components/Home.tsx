import React from 'react';
import {
  Grid,
  createStyles,
  makeStyles,
  Theme,
  Card,
  CardContent,
  CardActions,
  Chip,
  Avatar,
  Box,
  TextField,
  Button,
} from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    gridCard: {
      minHeight: '80vh',
    },
    chip: {
      color: '#000 !important',
      fontWeight: 'bold',
      backgroundColor: '#fff !important',
      border: '1px solid #A9A9A9',
      padding: '0 15px',
    },
    btn: {
      color: '#fff',
    },
  }),
);

const Home: React.FC = () => {
  const style = useStyles();

  return (
    <div>
      <Grid
        container
        justify="center"
        alignItems="center"
        className={style.gridCard}
      >
        <Grid item xs={11} lg={4}>
          <Card>
            <CardContent>
              <Grid container justify="center" alignItems="center">
                <Box component="span" marginRight={1}>
                  <Chip
                    color="primary"
                    label="R$ 5000"
                    avatar={<Avatar className={style.chip}>USD</Avatar>}
                    variant="outlined"
                  />
                </Box>

                <Box component="span" marginRight={1}>
                  <Chip
                    label="R$ 5000"
                    color="primary"
                    avatar={<Avatar className={style.chip}>BRL</Avatar>}
                    variant="outlined"
                  />
                </Box>

                <Box component="span" marginRight={1}>
                  <Chip
                    label="R$ 5000"
                    color="primary"
                    avatar={<Avatar className={style.chip}>EUR</Avatar>}
                    variant="outlined"
                  />
                </Box>

                <Box component="span" marginRight={1}>
                  <Chip
                    label="R$ 5000"
                    color="primary"
                    avatar={<Avatar className={style.chip}>CAD</Avatar>}
                    variant="outlined"
                  />
                </Box>
              </Grid>

              <Grid container justify="center" alignItems="center">
                <Grid item xs={11} lg={2}>
                  <Box marginTop={4}>
                    <TextField id="value-btc" label="BTC" fullWidth />
                  </Box>
                </Grid>
              </Grid>
            </CardContent>

            <CardActions>
              <Box component="span" margin="auto" marginBottom={1}>
                <Button
                  variant="contained"
                  className={style.btn}
                  color="primary"
                  type="submit"
                >
                  Atualizar valor monetário
                </Button>
              </Box>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;
