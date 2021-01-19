import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    backgroundColor: theme.palette.info.main,
    color: theme.palette.common.white,
  },
  content: {
    position: "relative",
    padding: theme.spacing(6, 24),
    [theme.breakpoints.down("md")]: {
      padding: theme.spacing(3),
    },
  },
}));

export default function Text2() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={12} md={12}>
          <div className={classes.content}>
            <Typography variant="h5">
              Kamu sudah belajar berhari-hari, atau bahkan berbulan-bulan
              tentang desain, tetapi kenapa kamu masih bingung?
              <br />
              <br /> Bahkan dasarnya kamu tidak mengerti?
              <br />
              <br />
              Oleh karena itu, disini kami bisa memberikan solusi untukmu, yaitu
              dengan belajar online di Pintaar
            </Typography>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
