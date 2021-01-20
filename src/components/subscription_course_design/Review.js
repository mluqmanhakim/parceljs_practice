import React, { Component } from "react";

import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

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
  userName: {
    [theme.breakpoints.down("md")]: {
      display: "flex",
      justifyContent: "center",
    },
  },
  title: {
    paddingBottom: theme.spacing(3),
  },
}));

function Review() {
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
          Perkataan Teman Kamu Yang Telah Belajar di Pintaar
        </Typography>
      </Grid>

      <Grid container justify="center" alignItems="center" spacing={2}>
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Grid container>
                <Grid item xs={12} md={2}>
                  <Avatar
                    className={classes.image}
                    alt="Image"
                    src="https://storage.googleapis.com/pintaar-web.appspot.com/user-photo/tmiabq1si75draBiVgZZTtSfpdlKFTPKqICV29Nx.jpeg"
                  />
                </Grid>

                <Grid item xs={12} md={10}>
                  <div className={classes.userName}>
                    <Typography variant="h6" gutterBottom>
                      Syarifudin Tep
                    </Typography>
                  </div>

                  <Typography>
                    Mantuuuul... untuk pemula wajib ikut. Dan untuk yg mmng
                    sudah mngenal Ai juga bisa ikut.. pelatian nya terstruktur d
                    ajari dari 0. Jadi bisa buat ingat" materi yg dulu sudah
                    lupa. Ndak rugi gabung d kelas ini. Terimakasih 😇
                  </Typography>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Grid container>
                <Grid item xs={12} md={2}>
                  <Avatar
                    className={classes.image}
                    alt="Image"
                    src="https://storage.googleapis.com/pintaar-web.appspot.com/user-photo/sZknnNG7UD9UEHyhbRHl0AhnhR7kEOI35eMvm2tJ.jpeg"
                  />
                </Grid>

                <Grid item xs={12} md={10}>
                  <div className={classes.userName}>
                    <Typography variant="h6" gutterBottom>
                      SHALIZAM
                    </Typography>
                  </div>

                  <Typography>
                    terima kasih yang saya mau ucapkan, setidaknya saya sdh tau
                    beberapa cara untuk melakukan editing pada aplikasi
                    photoshop. cara penjelasannya jelas, dan terinci sehingga
                    mudah untuk dipahami.
                  </Typography>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Grid container>
                <Grid item xs={12} md={2}>
                  <Avatar
                    className={classes.image}
                    alt="Image"
                    src="https://storage.googleapis.com/pintaar-web.appspot.com/user-photo/H5lBdDpp5NJ9mKdDL9v1q0voBb7OqKTxsGaIYApd.jpeg"
                  />
                </Grid>

                <Grid item xs={12} md={10}>
                  <div className={classes.userName}>
                    <Typography variant="h6" gutterBottom>
                      Aldi Prasedya
                    </Typography>
                  </div>

                  <Typography>
                    {" "}
                    Untuk kelas ini saya rasa sangat cukup membantu untuk para
                    pemula yang ingin belajar motion grapic.. Penjelasannya
                    sangat jelas dan materinya terstruktur. Bermanfaat banget..
                    Sukses tetus pintaar.com
                  </Typography>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Grid container>
                <Grid item xs={12} md={2}>
                  <Avatar
                    className={classes.image}
                    alt="Image"
                    src="https://storage.googleapis.com/pintaar-web.appspot.com/user-photo/ZKqu2lbF2BTuQbCiiqnmLNhn3o89OMuWPWlN2O2o.jpeg"
                  />
                </Grid>

                <Grid item xs={12} md={10}>
                  <div className={classes.userName}>
                    <Typography variant="h6" gutterBottom>
                      ROHMAD BUDI P
                    </Typography>
                  </div>

                  <Typography>
                    kelas online ini sangat membantu, bisa belajar ilmu skill
                    tambahan apalagi bisa kapanpun dan dimanapun, terimakasih
                    piintar!
                  </Typography>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}

export default Review;
