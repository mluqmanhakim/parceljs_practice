import React, { Component } from "react";

import Grid from "@material-ui/core/Grid";
import ImageIcon from "@material-ui/icons/Image";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import FormatListNumberedIcon from "@material-ui/icons/FormatListNumbered";
import LocalAtmIcon from "@material-ui/icons/LocalAtm";
import CardMembershipIcon from "@material-ui/icons/CardMembership";
import CollectionsIcon from "@material-ui/icons/Collections";
import AccessAlarmIcon from "@material-ui/icons/AccessAlarm";
import PeopleOutlineIcon from "@material-ui/icons/PeopleOutline";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    padding: theme.spacing(6),
    [theme.breakpoints.down("md")]: {
      padding: theme.spacing(3),
    },
  },
  title : {
    paddingBottom: theme.spacing(3),
  }
}));

function Feature() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container justify="center" className={classes.title} >
        <Typography variant="h5" gutterBottom align="center">
          Keuntungan Belajar di Pintaar
        </Typography>
      </Grid>

      <Grid container spacing={2} direction="row" alignItems="stretch">
        <Grid item xs={12} md={3}>
          <Card className={classes.card}>
            <CardContent>
              <Grid container justify="center">
                <ImageIcon
                  className={classes.image}
                  style={{ fontSize: 100 }}
                ></ImageIcon>
              </Grid>

              <Typography variant="h5" gutterBottom>
                Belajar Dasar Desain Grafis dan Edit Video dari 0
              </Typography>

              <Typography>
                Disini kamu akan belajar desain grafis, edit video, bahkan
                desain teknik dari dasar <br />
                Kamu akan diajarkan:
              </Typography>

              <List>
                <ListItem>
                  <ListItemIcon>
                    <CheckBoxIcon />
                  </ListItemIcon>
                  <ListItemText primary="Adobe Illusrator untuk desain grafis" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CheckBoxIcon />
                  </ListItemIcon>
                  <ListItemText primary="Adobe Photoshop untuk desain grafis" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CheckBoxIcon />
                  </ListItemIcon>
                  <ListItemText primary="Corel Draw untuk desain grafis" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CheckBoxIcon />
                  </ListItemIcon>
                  <ListItemText primary="Adobe Premier dan After Effects untuk edit video" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CheckBoxIcon />
                  </ListItemIcon>
                  <ListItemText primary="Skecthup dan Autocad untuk desain teknik" />
                </ListItem>
              </List>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={3}>
          <Card className={classes.card}>
            <CardContent>
              <Grid container justify="center">
                <FormatListNumberedIcon
                  className={classes.image}
                  style={{ fontSize: 100 }}
                ></FormatListNumberedIcon>
              </Grid>

              <Typography variant="h5" gutterBottom>
                Belajar dengan Terstruktur
              </Typography>

              <Typography>
                Kamu tidak perlu lagi bingung karena belajar secara acak, disini{" "}
                <b>kamu akan belajar dengan terstruktur, tahap-demi-tahap.</b>
                Tentunya, dapat membantumu belajar dengan mudah dan cepat.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={3}>
          <Card className={classes.card}>
            <CardContent>
              <Grid container justify="center">
                <VerifiedUserIcon
                  className={classes.image}
                  style={{ fontSize: 100 }}
                ></VerifiedUserIcon>
              </Grid>

              <Typography variant="h5" gutterBottom>
                Dimentoring oleh Praktisi Berpengalaman
              </Typography>

              <Typography>
                Semua kelas programming yang kamu dapatkan di ajarkan oleh{" "}
                <b>praktisi dan profesional di bidangnya.</b>
                <br />
                <br />
                Sehingga, kamu bisa mengetahui apa yang dibutuhkan dengan
                industri sekarang.
                <br />
                <br />
                Bahkan, kamu juga mendapatkan kesempatan untuk{" "}
                <b>bertanya ke mereka untuk konsultasi jika ada kebingungan.</b>
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={3}>
          <Card className={classes.card}>
            <CardContent>
              <Grid container justify="center">
                <PeopleOutlineIcon
                  className={classes.image}
                  style={{ fontSize: 100 }}
                ></PeopleOutlineIcon>
              </Grid>

              <Typography variant="h5" gutterBottom>
                Punya Komunitas
              </Typography>

              <Typography>
                Kamu tidak suka belajar sendiri dan tidak teman?
                <br />
                <br />
                Oleh karena itu, jika kamu mengambil kelasnya,{" "}
                <b>
                  kamu berhak masuk ke group Facebook khusus.
                  <br /> <br />
                  Jumlah membernya sudah ribuan untuk belajar, berdiskusi dan
                  berkolaborasi dengan murid lainnya.
                </b>
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Grid container spacing={2} direction="row" alignItems="stretch">
        <Grid item xs={12} md={3}>
          <Card className={classes.card}>
            <CardContent>
              <Grid container justify="center">
                <AccessAlarmIcon
                  className={classes.image}
                  style={{ fontSize: 100 }}
                ></AccessAlarmIcon>
              </Grid>

              <Typography variant="h5" gutterBottom>
                Bisa Belajar Kapanpun dan Dimanapun
              </Typography>

              <Typography>
                Kamu punya waktu terbatas dan tidak bebas? Serta tidak bisa
                datang ke tempat? Karena sibuk bekerja atau kuliah?
                <br />
                <br />
                Oleh karena itu, belajar online adalah solusinya, karena kamu{" "}
                <b>bisa belajar dimana saja dan kapan saja.</b>
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={3}>
          <Card className={classes.card}>
            <CardContent>
              <Grid container justify="center">
                <CollectionsIcon
                  className={classes.image}
                  style={{ fontSize: 100 }}
                ></CollectionsIcon>
              </Grid>

              <Typography variant="h5" gutterBottom>
                Banyak Studi Kasus
              </Typography>

              <Typography>
                Kalau kamu mengambil kelas ini, kamu akan mendapatkan banyak
                latihan serta studi kasus, yang membantumu belajar desain dengan
                baik
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={3}>
          <Card className={classes.card}>
            <CardContent>
              <Grid container justify="center">
                <CardMembershipIcon
                  className={classes.image}
                  style={{ fontSize: 100 }}
                ></CardMembershipIcon>
              </Grid>

              <Typography variant="h5" gutterBottom>
                Dapat e-certificate
              </Typography>

              <Typography>
                Kamu juga akan mendapatkan sertifikat jika kamu membutuhkannya
                setelah mengambil kelas ini.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={3}>
          <Card className={classes.card}>
            <CardContent>
              <Grid container justify="center">
                <LocalAtmIcon
                  className={classes.image}
                  style={{ fontSize: 100 }}
                ></LocalAtmIcon>
              </Grid>

              <Typography variant="h5" gutterBottom>
                Garansi 100%, 7 Hari Uang Kembali
              </Typography>

              <Typography>
                Kamu takut kelasnya tidak sesuai ekspetasi mu?
                <br />
                <br />
                Tenang, kami punya 100% uang garansi yang bisa kamu tuntut jika
                kamu tidak puas dengan kelasnya.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}

export default Feature;
