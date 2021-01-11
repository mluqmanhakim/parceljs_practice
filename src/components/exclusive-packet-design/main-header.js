import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles((theme) => ({
  mainHeader: {
    position: 'relative',
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: 'rgba(0,0,0,.3)',
  },
  mainHeaderContent: {
    position: 'relative',
    padding: theme.spacing(6),
    [theme.breakpoints.down('md')]: {
      padding: theme.spacing(3),
    },
  },
}));

export default function MainHeader() {
  const classes = useStyles();

  return (
    <Paper className={classes.mainHeader}>
      <div className={classes.overlay} />
      <Grid container>
        <Grid item md={12}>
          <div className={classes.mainHeaderContent}>
            <Typography component="h2" variant="h4" color="inherit" gutterBottom>
            Kamu masih bingung belajar desain grafis, edit video atau desain
              teknik di internet?
              <br/><br/>
              Untuk membantu mencari KERJA/ FREELANCE, KULIAH, membuat YOUTUBE,
              atau PROMOSI BISNIS kamu?
            </Typography>
          </div>
        </Grid>
      </Grid>
    </Paper>
  );
}
