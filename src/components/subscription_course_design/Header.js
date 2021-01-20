import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    backgroundColor: theme.palette.info.main,
    color: theme.palette.common.white,
  },
  content: {
    position: 'relative',
    padding: theme.spacing(6, 24),
    [theme.breakpoints.down('md')]: {
      padding: theme.spacing(3),
    },
  },
}));

export default function MainHeader() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={12} md={12}>
          <div className={classes.content}>
            <Typography component="h2" variant="h5" color="inherit">
            Kamu masih bingung belajar desain grafis, edit video atau desain
              teknik di internet?
              <br/><br/>
              Untuk membantu mencari KERJA/FREELANCE, KULIAH, membuat YOUTUBE,
              atau PROMOSI BISNIS kamu?
            </Typography>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
