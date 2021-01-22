import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import axios from "axios";
import { withStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";

const styles = (theme) => ({
  "@global": {},
  root: {
    position: "relative",
    padding: theme.spacing(6, 24),
    [theme.breakpoints.down("md")]: {
      padding: theme.spacing(3),
    },
  },
  title: {
    paddingBottom: theme.spacing(3),
  },
  cardHeader: {
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[200]
        : theme.palette.grey[700],
  },
  cardPricing: {
    display: "flex",
    justifyContent: "center",
    alignItems: "baseline",
    marginBottom: theme.spacing(1),
  },
});

class Pricing extends React.Component {
  state = {
    isLoading: true,
    courses: [],
  };

  componentDidMount() {
    axios
      .get("http://127.0.0.1:8000/api/subscription-course-design")
      .then((response) => {
        this.setState({
          isLoading: false,
          courses: response.data.data,
        });
      })
      .catch(function (error) {
        if (error.response) {
          console.log(error.response);
        } else if (error.request) {
          console.log(error.request);
        } else {
          console.log("Error", error.message);
        }
      });
  }

  render() {
    const { classes } = this.props;

    // console.log(classes);

    if (this.state.isLoading) {
      return <CircularProgress />;
    }

    return (
      <React.Fragment>
        <CssBaseline />
        <div className={classes.root}>
          <div className={classes.content}>
            <div className={classes.title}>
              <Typography
                component="h1"
                variant="h5"
                align="center"
                color="textPrimary"
                gutterBottom
              >
                PROMO PAKET KHUSUS hanya untuk 5 Pendaftar Pertama
              </Typography>
            </div>

            <Grid container spacing={2} alignItems="stretch">
              {this.state.courses.map((course) => (
                <Grid item key={course.id} xs={12} sm={6} md={3}>
                  <Card>
                    <CardHeader
                      title={course.nama_course}
                      titleTypographyProps={{ align: "center" }}
                      subheaderTypographyProps={{ align: "center" }}
                      className={classes.cardHeader}
                    />
                    <CardContent>
                      <div className={classes.cardPricing}>
                        <Typography
                          component="h2"
                          variant="subtitle1"
                          color="textPrimary"
                        >
                          <s>Rp {course.harga.toLocaleString("id-ID")}</s>
                        </Typography>
                      </div>

                      <div className={classes.cardPricing}>
                        <Typography
                          component="h2"
                          variant="h5"
                          color="textPrimary"
                        >
                          Rp{" "}
                          {(
                            course.harga -
                            (course.harga * course.diskon) / 100
                          ).toLocaleString("id-ID")}
                        </Typography>
                      </div>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(Pricing);
