import React, { Component } from "react";

import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import ImageIcon from "@material-ui/icons/Image";

import "./exclusive-packet-design.css";
import Pricing from "./../pricing/pricing";

class ExclusivePacketDesign extends Component {
  render() {
    return (
      <div className="ExclusivePacketDesign">
        <header>
          <Box bgcolor="info.main" color="primary.contrastText">
            <div className="row">
              <div className="col-xs-12 col-md-10 offset-md-1">
                <h1>
                  Kamu masih bingung belajar desain grafis, edit video atau
                  desain teknik di internet?
                </h1>
                <h1>
                  Untuk membantu mencari KERJA/ FREELANCE, KULIAH, membuat
                  YOUTUBE, atau PROMOSI BISNIS kamu?
                </h1>
              </div>
            </div>
          </Box>
        </header>

        <section>
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-8">
                <h4>
                  Kamu berada di tempat yang tepat, karena kami bisa membantumu.
                </h4>

                <p>
                  Kita semua tau, desain, dan edit video adalah skill penting
                  jika
                </p>

                <ul className="list-group">
                  <li className="list-group-item">
                    <i className="fa fa-check-square" aria-hidden="true"></i>
                    kamu berada industri kreatif, seperti drafter, desainer,
                    fotografer, atau pemilik usaha industri kreatif.
                  </li>
                  <li className="list-group-item">
                    <i className="fa fa-check-square" aria-hidden="true"></i>
                    kamu ingin belajar untuk menambah skill kamu untuk
                    mendapatkan pekerjaan atau freelance
                  </li>
                  <li className="list-group-item">
                    <i className="fa fa-check-square" aria-hidden="true"></i>
                    kamu ingin untuk mendesain / mempromosikan produk yang ada
                    di bisnis kamu
                  </li>
                </ul>

                <h4>
                  {" "}
                  Sayangnya, banyak orang yang ingin belajar desain, belajar
                  dengan cara yang kurang tepat.
                </h4>

                <p>
                  Mereka belajar melalui{" "}
                  <b>video, atau tempat belajar yang: </b>
                </p>

                <ul className="list-group">
                  <li className="list-group-item">
                    <i className="fa fa-times" aria-hidden="true"></i>
                    Tidak terstruktur, loncat-loncat, sehingga membuat bingung
                  </li>
                  <li className="list-group-item">
                    <i className="fa fa-times" aria-hidden="true"></i>
                    Tidak ada tempat bertanya, kalau ada kesulitan atau
                    kebingungan{" "}
                  </li>
                  <li className="list-group-item">
                    <i className="fa fa-times" aria-hidden="true"></i>
                    Tidak ada komunitas / teman-teman yang mendukung
                    pembelajaran
                  </li>
                </ul>

                <p>
                  Sehingga membuat{" "}
                  <b>mereka bingung terhadap topik yang diajarkan.</b>
                </p>

                <p>Apakah kamu termasuk orangnya?</p>
              </div>
            </div>
          </div>
        </section>

        <Box bgcolor="info.main" color="primary.contrastText">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-md-8">
                <h3>
                  Kamu sudah belajar berhari-hari, atau bahkan berbulan-bulan
                  tentang desain, tetapi kenapa kamu masih bingung?
                </h3>

                <h3> Bahkan dasarnya kamu tidak mengerti?</h3>

                <h3>
                  Oleh karena itu, disini kami bisa memberikan solusi untukmu,
                  yaitu dengan belajar online di Pintaar
                </h3>
              </div>
            </div>
          </div>
        </Box>

        <Container maxWidth="sm">
          <div className="row">
            <div className="col-xs-12 col-md-12">
              <h3>Keuntungan Belajar di Pintaar</h3>
            </div>
          </div>
        </Container>

        <Grid container spacing={2} direction="row" alignItems="stretch">
          <Grid item xs={12} md={3}>
            <Paper className="paper" variant="outlined">
              <div className="text-center">
                <ImageIcon style={{ fontSize: 100 }}></ImageIcon>
              </div>

              <h3>Belajar Dasar Desain Grafis dan Edit Video dari 0</h3>

              <p>
                Disini kamu akan belajar desain grafis, edit video, bahkan
                desain teknik dari dasar
              </p>
              <p> Kamu akan diajarkan: </p>

              <ul className="list-group">
                <li className="list-group-item">
                  <i className="fa fa-check-square" aria-hidden="true"></i>
                  Adobe Illusrator untuk desain grafis
                </li>
                <li className="list-group-item">
                  <i className="fa fa-check-square" aria-hidden="true"></i>
                  Adobe Photoshop untuk desain grafis
                </li>
                <li className="list-group-item">
                  <i className="fa fa-check-square" aria-hidden="true"></i>
                  Corel Draw untuk desain grafis
                </li>
                <li className="list-group-item">
                  <i className="fa fa-check-square" aria-hidden="true"></i>
                  Adobe Premier dan After Effects untuk edit video
                </li>
                <li className="list-group-item">
                  <i className="fa fa-check-square" aria-hidden="true"></i>
                  Skecthup dan Autocad untuk desain teknik
                </li>
              </ul>
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

        <Pricing />
      </div>
    );
  }
}

export default ExclusivePacketDesign;
