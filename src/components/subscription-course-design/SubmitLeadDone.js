import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import Footer from "./Footer";

const useStyles = makeStyles((theme) => ({
  root: {},
  content: {
    position: "relative",
    padding: theme.spacing(6, 24),
    [theme.breakpoints.down("md")]: {
      padding: theme.spacing(3),
    },
  },
}));

export default function SubmitLeadDone() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.content}>
        <Grid container direction="column" alignItems="center" justify="center">
          <Grid item xs={12}>
            <CheckBoxIcon color="primary" style={{ fontSize: 50 }} />
          </Grid>
          <Grid item xs={12}>
            <Typography component="h2" variant="h4" align="center">
              Terima kasih
            </Typography>
            <Typography align="center">
              Mohon ditunggu, kami akan segera menghubungi Anda.
            </Typography>
          </Grid>
        </Grid>
      </div>

      <Footer />
    </div>
  );
}
