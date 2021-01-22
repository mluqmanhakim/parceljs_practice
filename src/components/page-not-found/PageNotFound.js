import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  content: {
    position: "relative",
    padding: theme.spacing(6, 24),
    [theme.breakpoints.down("md")]: {
      padding: theme.spacing(3),
    },
  },
}));

export default function PageNotFound() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={12} md={12}>
          <div className={classes.content}>
            <Typography component="h2" variant="h5" align="center">
              404 Halaman tidak ditemukan. Silakan kembali.
            </Typography>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
