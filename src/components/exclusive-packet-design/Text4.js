import React from "react";

import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    backgroundColor: theme.palette.info.main,
    color: theme.palette.common.white,
  },
  content: {
    position: "relative",
    padding: theme.spacing(5, 24),
    [theme.breakpoints.down("md")]: {
      padding: theme.spacing(3),
    },
  },
}));

export default function Text4() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={12} md={12}>
          <div className={classes.content}>
            <Typography variant="h5" gutterBottom>
              P.S.
              <br />
              Jangan ragu, karena lebih dari 10 ribu murid sudah join di
              Pintaar, belajar secara terstruktur, step by step, sehingga tidak
              bingung lagi
            </Typography>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
