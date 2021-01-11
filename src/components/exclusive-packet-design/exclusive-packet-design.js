import React, { Component } from "react";

import "@fortawesome/fontawesome-free/css/all.css";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";

import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import ImageIcon from "@material-ui/icons/Image";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import InboxIcon from "@material-ui/icons/Inbox";
import DraftsIcon from "@material-ui/icons/Drafts";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import CancelIcon from "@material-ui/icons/Cancel";

import "./exclusive-packet-design.css";
import Pricing from "./pricing";
import Feature from "./feature";
import Review from "./review";
import Teacher from "./teacher";
import MainHeader from "./main-header";

const useStyles = makeStyles((theme) => ({
  "@global": {},
  boxContent2: {
    position: "relative",
    backgroundColor: theme.palette.info.main,
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    marginTop: theme.spacing(4),
    backgroundSize: "cover",
  },
  boxContent2Content: {
    position: "relative",
    padding: theme.spacing(6),
    [theme.breakpoints.down("md")]: {
      padding: theme.spacing(3),
    },
  },
  boxContent4: {
    position: "relative",
    backgroundColor: theme.palette.info.main,
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    marginTop: theme.spacing(4),
    backgroundSize: "cover",
  },
  boxContent4Content: {
    position: "relative",
    padding: theme.spacing(6),
    [theme.breakpoints.down("md")]: {
      padding: theme.spacing(3),
    },
  },
}));

function ExclusivePacketDesign() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />

      {/* <MainHeader /> */}

      <Container maxWidth="lg">
        <Grid container>
          <Grid item md={12}>
            <div className={classes.boxContent1}>
              <Typography variant="h4" color="inherit" gutterBottom>
                Kamu berada di tempat yang tepat, karena kami bisa membantumu.
              </Typography>
              <Typography component="p" color="inherit" gutterBottom>
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
                  <ListItemText primary="kamu ingin untuk mendesain / mempromosikan produk yang ada di bisnis kamu" />
                </ListItem>
              </List>

              <Typography variant="h4" gutterBottom>
                Sayangnya, banyak orang yang ingin belajar desain, belajar
                dengan cara yang kurang tepat.
              </Typography>

              <Typography component="p" gutterBottom>
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
                  <ListItemText
                    primary="Tidak ada tempat bertanya, kalau ada kesulitan atau
                  kebingungan"
                  />
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
                <br />
                Apakah kamu termasuk orangnya?
              </Typography>
            </div>
          </Grid>
        </Grid>
      </Container>

      <Box className={classes.boxContent2}>
        <Grid container>
          <Grid item md={12}>
            <div className={classes.boxContent2Content}>
              <Typography variant="h4" gutterBottom>
                Kamu sudah belajar berhari-hari, atau bahkan berbulan-bulan
                tentang desain, tetapi kenapa kamu masih bingung?
                <br />
                <br /> Bahkan dasarnya kamu tidak mengerti?
                <br />
                <br />
                Oleh karena itu, disini kami bisa memberikan solusi untukmu,
                yaitu dengan belajar online di Pintaar
              </Typography>
            </div>
          </Grid>
        </Grid>
      </Box>

      <Feature />

      <Container>
        <Grid container>
          <Grid item md={12}>
            <div className={classes.boxContent3}>
              <Typography component="h4" variant="h4" gutterBottom>
                "Tapi Saya Pemula, Saya Tidak Tau Bahwa Ini Cocok Buat Saya"
              </Typography>

              <Typography component="p" gutterBottom>
                Malah sebaliknya,
                <b> disini kamu akan diajarkan desain khusus pemula, dari 0</b>.
                Cocok bagi kamu yang belum pernah menyentuh desain sama sekali.
              </Typography>

              <Typography component="p" gutterBottom>
                Tentunya, kamu paket ini juga cocok untuk kamu yang ingin
                belajar desain topik studi kasus seperti Edit Foto, Tipografi
                dan lain sebagainya
              </Typography>

              <br />
              <br />

              <Typography component="h4" variant="h4" gutterBottom>
                "Saya Sibuk, Saya Tidak Yakin Bisa Belajar Sesuai Jadwal"
              </Typography>

              <Typography component="p" gutterBottom>
                Belajar di Pintaar merupakan belajar online. Dalam artian, kamu
                bisa belajar <b>kapanpun dan dimanapun kamu berada.</b>
              </Typography>
              <Typography component="p" gutterBottom>
                Kamu bisa{" "}
                <b>menyesuaikan waktu belajar mu dengan waktu kesibukkan</b>{" "}
                kamu sekarang, seperti kerja atau kuliah.
              </Typography>
              <Typography component="p" gutterBottom>
                <b>
                  Kamu bahkan bisa belajar saat tengah malam di dalam kamar
                  tidur-mu
                </b>
              </Typography>

              <br />
              <br />

              <Typography component="h4" variant="h4" gutterBottom>
                "Umur Saya Sudah Tidak Muda Lagi, Apakah Saya Bisa?"
              </Typography>

              <Typography component="p" gutterBottom>
                Tenang, belajar desain hanya membutuhkan semangat dan niat
                belajarmu yang kuat.
              </Typography>

              <Typography component="p" gutterBottom>
                <b>
                  Tidak peduli kamu berumur berapapun, kamu bisa belajar desain,
                </b>{" "}
                jika kamu punya hal tersebut
              </Typography>

              <br />
              <br />

              <Typography component="h4" variant="h4" gutterBottom>
                Tapi, ada 2 tipe orang yang tidak cocok untuk mengambil kelas
                ini:
              </Typography>

              <Typography component="div" gutterBottom>
                <ol>
                  <li>
                    <b>
                      Orang yang tidak mau mengeluarkan uang untuk investasi
                      ilmu, dan hanya menghabiskan uang untuk entertainment saja
                    </b>
                    <br />
                    <br />
                    Seperti beli gadget mahal, langganan film streaming atau
                    bahkan tidak peduli ilmu sama sekali
                  </li>
                  <br />
                  <li>
                    <b>
                      Orang yang punya budget / dana banyak dan lebih suka untuk
                      belajar di ruangan kelas
                    </b>
                    <br />
                    <br />
                    Kalau kamu bukan termasuk dua orang tersebut, silakan lanjut
                    ke bawah.
                  </li>
                </ol>
              </Typography>
            </div>
          </Grid>
        </Grid>
      </Container>

      {/* <Review /> */}

      {/* <Teacher /> */}

      <Box className={classes.boxContent4}>
        <Grid container>
          <Grid item md={12}>
            <div className={classes.boxContent4Content}>
              <Typography variant="h4" gutterBottom>
                P.S.
                <br/>
                  Jangan ragu, karena lebih dari 10 ribu murid sudah join di
                  Pintaar, belajar secara terstruktur, step by step, sehingga
                  tidak bingung lagi
                
              </Typography>
            </div>
          </Grid>
        </Grid>
      </Box>

      <Box maxWidth="md" bgcolor="info.main" color="primary.contrastText"></Box>

      <Pricing />
    </React.Fragment>
  );
}

export default ExclusivePacketDesign;
