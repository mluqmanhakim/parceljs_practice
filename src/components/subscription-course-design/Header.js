import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    backgroundColor: "#1976d2",
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

export default function MainHeader() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.content}>
        <Typography component="h2" variant="h5">
          Kamu masih bingung belajar desain grafis, edit video atau desain
          teknik di internet?
          <br />
          <br />
          Untuk membantu mencari KERJA/FREELANCE, KULIAH, membuat YOUTUBE, atau
          PROMOSI BISNIS kamu?
        </Typography>
      </div>
    </div>
  );
}
