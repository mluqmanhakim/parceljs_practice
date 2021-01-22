import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import CancelIcon from "@material-ui/icons/Cancel";

const useStyles = makeStyles((theme) => ({
  content: {
    padding: theme.spacing(6, 24),
    [theme.breakpoints.down("md")]: {
      padding: theme.spacing(3),
    },
  },
}));

export default function Text1() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={12} md={12}>
          <div className={classes.content}>
            <Typography variant="h5" gutterBottom>
              Kamu berada di tempat yang tepat, karena kami bisa membantumu.
            </Typography>
            <Typography gutterBottom>
              Kita semua tau, desain, dan edit video adalah skill penting jika
            </Typography>

            <List>
              <ListItem>
                <ListItemIcon>
                  <CheckBoxIcon />
                </ListItemIcon>
                <ListItemText primary="kamu berada industri kreatif, seperti drafter, desainer, fotografer, atau pemilik usaha industri kreatif" />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <CheckBoxIcon />
                </ListItemIcon>
                <ListItemText primary="kamu ingin belajar untuk menambah skill kamu untuk mendapatkan pekerjaan atau freelance" />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <CheckBoxIcon />
                </ListItemIcon>
                <ListItemText primary="kamu ingin mendesain / mempromosikan produk yang ada di bisnis kamu" />
              </ListItem>
            </List>

            <Typography variant="h5" gutterBottom>
              Sayangnya, banyak orang yang ingin belajar desain, belajar dengan
              cara yang kurang tepat.
            </Typography>

            <Typography gutterBottom>
              Mereka belajar melalui <b>video atau tempat belajar yang: </b>
            </Typography>

            <List>
              <ListItem>
                <ListItemIcon>
                  <CancelIcon />
                </ListItemIcon>
                <ListItemText primary="Tidak terstruktur, loncat-loncat, sehingga membuat bingung" />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <CancelIcon />
                </ListItemIcon>
                <ListItemText primary="Tidak ada komunitas / teman-teman yang mendukung pembelajaran" />
              </ListItem>
            </List>

            <Typography component="p" gutterBottom>
              Sehingga membuat{" "}
              <b> mereka bingung terhadap topik yang diajarkan.</b>
              <br /><br />
              Apakah kamu termasuk orangnya?
            </Typography>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
