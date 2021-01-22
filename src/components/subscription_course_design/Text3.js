import React from "react";

import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

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

export default function Text3() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={12} md={12}>
          <div className={classes.content}>
            <Typography component="h4" variant="h5" gutterBottom>
              "Tapi Saya Pemula, Saya Tidak Tau Bahwa Ini Cocok Buat Saya"
            </Typography>

            <Typography gutterBottom>
              Malah sebaliknya,
              <b> disini kamu akan diajarkan desain khusus pemula, dari 0</b>.
              Cocok bagi kamu yang belum pernah menyentuh desain sama sekali.
            </Typography>

            <Typography gutterBottom>
              Tentunya, kamu paket ini juga cocok untuk kamu yang ingin belajar
              desain topik studi kasus seperti Edit Foto, Tipografi dan lain
              sebagainya
            </Typography>

            <br />
            <br />

            <Typography component="h4" variant="h5" gutterBottom>
              "Saya Sibuk, Saya Tidak Yakin Bisa Belajar Sesuai Jadwal"
            </Typography>

            <Typography gutterBottom>
              Belajar di Pintaar merupakan belajar online. Dalam artian, kamu
              bisa belajar <b>kapanpun dan dimanapun kamu berada.</b>
            </Typography>
            <Typography gutterBottom>
              Kamu bisa{" "}
              <b>menyesuaikan waktu belajar mu dengan waktu kesibukkan</b> kamu
              sekarang, seperti kerja atau kuliah.
            </Typography>
            <Typography gutterBottom>
              <b>
                Kamu bahkan bisa belajar saat tengah malam di dalam kamar
                tidur-mu
              </b>
            </Typography>

            <br />
            <br />

            <Typography component="h4" variant="h5" gutterBottom>
              "Umur Saya Sudah Tidak Muda Lagi, Apakah Saya Bisa?"
            </Typography>

            <Typography gutterBottom>
              Tenang, belajar desain hanya membutuhkan semangat dan niat
              belajarmu yang kuat.
            </Typography>

            <Typography gutterBottom>
              <b>
                Tidak peduli kamu berumur berapapun, kamu bisa belajar desain,
              </b>{" "}
              jika kamu punya hal tersebut
            </Typography>

            <br />
            <br />

            <Typography component="h3" variant="h5" gutterBottom>
              Tapi, ada 2 tipe orang yang tidak cocok untuk mengambil kelas ini:
            </Typography>

            <Typography component="div" gutterBottom>
              <ol>
                <li>
                  <b>
                    Orang yang tidak mau mengeluarkan uang untuk investasi ilmu,
                    dan hanya menghabiskan uang untuk entertainment saja
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
                </li>
              </ol>
            </Typography>
            <Typography>
              Kalau kamu bukan termasuk dua orang tersebut, silakan lanjut ke
              bawah.
            </Typography>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
