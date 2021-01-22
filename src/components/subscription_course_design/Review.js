import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import SwiperCore, { Navigation, Pagination, Autoplay, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";

// install Swiper components
SwiperCore.use([Navigation, Pagination, Autoplay, A11y]);

const useStyles = makeStyles((theme) => ({
  content: {
    padding: theme.spacing(6, 24),
    [theme.breakpoints.down("md")]: {
      padding: theme.spacing(3, 0, 3),
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
    [theme.breakpoints.down("md")]: {
      padding: theme.spacing(3),
    }
  },
  carouselContent: {
    padding: theme.spacing(9),
    [theme.breakpoints.down("md")]: {
      padding: theme.spacing(4, 6, 4),
    },
  },
}));

const reviews = [
  {
    name: "Syarifudin Tep",
    imageUrl:
      "https://storage.googleapis.com/pintaar-web.appspot.com/user-photo/tmiabq1si75draBiVgZZTtSfpdlKFTPKqICV29Nx.jpeg",
    review:
      'Mantuuuul... untuk pemula wajib ikut. Dan untuk yg mmng sudah mngenal Ai juga bisa ikut.. pelatian nya terstruktur diajari dari 0. Jadi bisa buat ingat" materi yg dulu sudah lupa. Ndak rugi gabung d kelas ini. Terimakasih 😇',
  },
  {
    name: "SHALIZAM",
    imageUrl:
      "https://storage.googleapis.com/pintaar-web.appspot.com/user-photo/sZknnNG7UD9UEHyhbRHl0AhnhR7kEOI35eMvm2tJ.jpeg",
    review:
      "Terima kasih yang saya mau ucapkan, setidaknya saya sdh tau beberapa cara untuk melakukan editing pada aplikasi photoshop. cara penjelasannya jelas, dan terinci sehingga mudah untuk dipahami.",
  },
  {
    name: "Aldi Prasedya",
    imageUrl:
      "https://storage.googleapis.com/pintaar-web.appspot.com/user-photo/H5lBdDpp5NJ9mKdDL9v1q0voBb7OqKTxsGaIYApd.jpeg",
    review:
      "Untuk kelas ini saya rasa sangat cukup membantu untuk para pemula yang ingin belajar motion grapic.. Penjelasannya sangat jelas dan materinya terstruktur. Bermanfaat banget.. Sukses terus pintaar.com",
  },
  {
    name: "ROHMAD BUDI P",
    imageUrl:
      "https://storage.googleapis.com/pintaar-web.appspot.com/user-photo/ZKqu2lbF2BTuQbCiiqnmLNhn3o89OMuWPWlN2O2o.jpeg",
    review:
      "Kelas online ini sangat membantu, bisa belajar ilmu skill tambahan apalagi bisa kapanpun dan dimanapun, terimakasih piintar!",
  },
];

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

      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        navigation
        autoplay={{
          delay: 8000,
          disableOnInteraction: false,
        }}
        loop={true}
        pagination={{ clickable: true }}
      >
        {reviews.map((review) => (
          <SwiperSlide key={review.name}>
            <div>
              <div className={classes.carouselContent}>
                <Grid
                  container
                  direction="column"
                  alignItems="center"
                  justify="center"
                >
                  <Grid item xs={12}>
                    <Avatar
                      className={classes.image}
                      alt="Image"
                      src={review.imageUrl}
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <div className={classes.userName}>
                      <Typography variant="h6" gutterBottom align="center">
                        {review.name}
                      </Typography>
                    </div>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography gutterBottom align="center">
                      {review.review}
                    </Typography>
                  </Grid>
                </Grid>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Review;
