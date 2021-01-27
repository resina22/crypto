import React from 'react';
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  createStyles,
  FormControl,
  Grid,
  InputLabel,
  makeStyles,
  MenuItem,
  Select,
  TextField,
  Theme,
} from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    gridCard: {
      minHeight: '80vh',
    },
    btn: {
      color: '#fff',
    },
    backBtn: {
      color: '#000',
    },
  }),
);

const Currency: React.FC = () => {
  const style = useStyles();

  return (
    <div>
      <Grid
        container
        justify="center"
        alignItems="center"
        className={style.gridCard}
      >
        <Grid item xs={11} lg={2}>
          <Card>
            <CardContent>
              <FormControl fullWidth>
                <InputLabel id="label-currency">Moeda</InputLabel>
                <Select labelId="label-currency" id="select-currency">
                  <MenuItem value={'BRL'}>BRL</MenuItem>
                </Select>
              </FormControl>

              <Box component="div" marginTop={3}>
                <b>Valor atual:</b> R$ 5,40
              </Box>

              <Box component="div" marginTop={1}>
                <TextField id="new-value" label="Novo valor" />
              </Box>
            </CardContent>

            <CardActions>
              <Box component="div" margin="auto">
                <Box component="span" marginRight={1}>
                  <Button
                    type="submit"
                    color="primary"
                    variant="contained"
                    className={style.btn}
                  >
                    Atualizar
                  </Button>
                </Box>

                <Button
                  variant="outlined"
                  color="primary"
                  className={style.backBtn}
                >
                  Voltar
                </Button>
              </Box>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default Currency;
