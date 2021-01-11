import React, { Component } from "react";

import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "@fortawesome/fontawesome-free/css/all.css";

import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import ImageIcon from "@material-ui/icons/Image";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import CheckBoxIcon from "@material-ui/icons/CheckBox";

class Feature extends Component {
  render() {
    return (
      <div className="Feature">
        <Typography variant="h4" gutterBottom>
          Keuntungan Belajar di Pintaar
        </Typography>

        <Grid container spacing={2} direction="row" alignItems="stretch">
          <Grid item xs={12} md={3}>
            <Paper className="paper" variant="outlined">
              
              <ImageIcon style={{ fontSize: 100 }}></ImageIcon>
              

              <Typography variant="h4" gutterBottom>
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
            </Paper>
          </Grid>

          <Grid item xs={12} md={3}>
            <Paper className="paper" variant="outlined">
              <div className="box-icon">
                <i className="fas fa-list-ol fa-7x"></i>
              </div>
              <h3>Belajar dengan Terstruktur</h3>
              <br />
              <p>
                Kamu tidak perlu lagi bingung karena belajar secara acak, disini{" "}
                <b>kamu akan belajar dengan terstruktur, tahap-demi-tahap.</b>
                Tentunya, dapat membantumu belajar dengan mudah dan cepat.
              </p>
            </Paper>
          </Grid>

          <Grid item xs={12} md={3}>
            <Paper className="paper" variant="outlined">
              <div className="box-icon">
                <i className="fas fa-chalkboard-teacher fa-7x"></i>
              </div>
              <h3>Dimentoring oleh Praktisi Berpengalaman</h3>
              <br />
              <p>
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
              </p>
            </Paper>
          </Grid>

          <Grid item xs={12} md={3}>
            <Paper className="paper" variant="outlined">
              <div className="box-icon">
                <i className="fas fa-comments fa-7x"></i>
              </div>
              <h3>Punya Komunitas</h3>
              <br />
              <p>
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
              </p>
            </Paper>
          </Grid>
        </Grid>

        <Grid container spacing={2} direction="row" alignItems="stretch">
          <Grid item xs={12} md={3}>
            <Paper className="paper" variant="outlined">
              <div className="box-icon">
                <i className="fas fa-clock fa-7x"></i>
              </div>
              <h3>Bisa Belajar Kapanpun dan Dimanapun</h3>
              <br />
              <p>
                Kamu punya waktu terbatas dan tidak bebas? Serta tidak bisa
                datang ke tempat? Karena sibuk bekerja atau kuliah?
                <br />
                <br />
                Oleh karena itu, belajar online adalah solusinya, karena kamu{" "}
                <b>bisa belajar dimana saja dan kapan saja.</b>
              </p>
            </Paper>
          </Grid>

          <Grid item xs={12} md={3}>
            <Paper className="paper" variant="outlined">
              <div className="box-icon">
                <i className="fas fa-edit fa-7x"></i>
              </div>
              <h3>Banyak Studi Kasus</h3>
              <br />
              <p>
                Kalau kamu mengambil kelas ini, kamu akan mendapatkan banyak
                latihan serta studi kasus, yang membantumu belajar desain dengan
                baik
              </p>
            </Paper>
          </Grid>

          <Grid item xs={12} md={3}>
            <Paper className="paper" variant="outlined">
              <div className="box-icon">
                <i className="fas fa-file-alt fa-7x"></i>
              </div>
              <h3>Dapat sertifikat</h3>
              <br />
              <p>
                Kamu juga akan mendapatkan sertifikat jika kamu membutuhkannya
                setelah mengambil kelas ini.
              </p>
            </Paper>
          </Grid>

          <Grid item xs={12} md={3}>
            <Paper className="paper" variant="outlined">
              <div className="box-icon">
                <i className="fas fa-shield-alt fa-7x"></i>
              </div>
              <h3>Garansi 100%, 7 hari uang kembali</h3>
              <br />
              <p>
                Kamu takut kelasnya tidak sesuai ekspetasi mu?
                <br />
                <br />
                Tenang, kami punya 100% uang garansi yang bisa kamu tuntut jika
                kamu tidak puas dengan kelasnya.
              </p>
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default Feature;
