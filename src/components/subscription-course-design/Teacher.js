import React, { Component } from "react";

import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import SupervisedUserCircleIcon from "@material-ui/icons/SupervisedUserCircle";

const useStyles = makeStyles((theme) => ({
  content: {
    padding: theme.spacing(6, 24),
    [theme.breakpoints.down("md")]: {
      padding: theme.spacing(3),
    },
  },
  image: {
    width: theme.spacing(10),
    height: theme.spacing(10),
    margin: "auto",
  },
  title: {
    paddingBottom: theme.spacing(3),
  },
}));

function Teacher() {
  const classes = useStyles();
  return (
    <div className={classes.content}>
      <Grid
        container
        justify="center"
        alignItems="center"
        className={classes.title}
      >
        <Typography variant="h5" align="center">
          Tim Pengajar Pintaar
        </Typography>
      </Grid>

      <Grid container justify="center" alignItems="center" spacing={2}>
        <Grid item xs={6} md={4} align="center">
          <Avatar
            className={classes.image}
            alt="Image"
            src="https://storage.googleapis.com/pintaar-web.appspot.com/course-photo/D7U6P05aSeMhu8fkDbYkOw7iyuKP9cXrFOaGKuhu.jpeg"
          />

          <Typography>Fathur - Video Editor</Typography>
        </Grid>
        <Grid item xs={6} md={4} align="center">
          <Avatar
            className={classes.image}
            alt="Image"
            src="https://storage.googleapis.com/pintaar-web.appspot.com/course-photo/egCwNpwj6dqH02aFBJ1UfHyahSkOJUY5hegjVrRl.jpeg"
          />

          <Typography>Dean - Desainer</Typography>
        </Grid>
        <Grid item xs={6} md={4} align="center">
          <Avatar
            className={classes.image}
            alt="Image"
            src="https://storage.googleapis.com/pintaar-web.appspot.com/course-photo/OpSMJF8dhPqYCpxzyHeRFu6wAsi0H49Y9gHRtQUJ.jpeg"
          />

          <Typography>Gunawan - Desainer</Typography>
        </Grid>

        <Grid item xs={6} md={4} align="center">
          <Avatar
            className={classes.image}
            alt="Image"
            src="https://storage.googleapis.com/pintaar-web.appspot.com/course-photo/rrj81RNPbUDvWOU8Lde1AyZTd6U0xn6ryTRlAnHi.jpeg"
          />

          <Typography>Imron - Desainer</Typography>
        </Grid>

        <Grid item xs={6} md={4} align="center">
          <Avatar
            className={classes.image}
            alt="Image"
            src="https://storage.googleapis.com/pintaar-web.appspot.com/course-photo/y3RdB3qjYlHwSVMPPeTo8Rq53oIclg44ERvcMoq0.jpeg"
          />

          <Typography>Benrik - Trainer Autocad</Typography>
        </Grid>

        <Grid item xs={6} md={4} align="center">
          <SupervisedUserCircleIcon
            className={classes.image} color="primary"
          />

          <Typography>+ Puluhan Pengajar Praktisi Lainnya</Typography>
        </Grid>
      </Grid>
    </div>
  );
}

export default Teacher;
