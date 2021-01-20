import React from "react";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";
import axios from "axios";
import { useHistory, Link as LinkRoute, withRouter } from "react-router-dom";

const styles = (theme) => ({
  content: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: theme.spacing(6),
    [theme.breakpoints.down("md")]: {
      padding: theme.spacing(1),
    },
  },
});

class SignUpForm extends React.Component {
  state = {
    name: "",
    phone_number: "",
    email: "",
    category: "design",
  };

  handleChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const name = this.state.name;
    const phone_number = this.state.phone_number;
    const email = this.state.email;
    const category = this.state.category;
    const { history } = this.props;

    axios
      .post("http://127.0.0.1:8000/api/subscription-course-design", {
        name,
        phone_number,
        email,
        category,
      })
      .then((response) => {
        history.push("/submit-lead-done");
      });
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Container component="main" maxWidth="sm">
          <CssBaseline />

          <div className={classes.content}>
            <Typography variant="h5" gutterBottom align="center">
              Kamu ingin daftar? Atau ingin tanya-tanya dulu? Isi formulir
              dibawah ini
            </Typography>

            <form className={classes.form} onSubmit={this.handleSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={12} md={12}>
                  <TextField
                    id="name"
                    name="name"
                    label="Nama Kamu"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    required
                    onChange={this.handleChange}
                  />
                </Grid>
                <Grid item xs={12} md={12}>
                  <TextField
                    id="phone_number"
                    name="phone_number"
                    label="Nomor HP/Whatsapp"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    required
                    onChange={this.handleChange}
                  />
                </Grid>
                <Grid item xs={12} md={12}>
                  <TextField
                    id="email"
                    name="email"
                    label="Alamat Email Kamu"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    required
                    onChange={this.handleChange}
                  />
                </Grid>
              </Grid>
              <br />
              <br />

              <Button
                type="submit"
                size="large"
                fullWidth
                variant="contained"
                color="primary"
              >
                Simpan
              </Button>
            </form>

            <br />
            <br />
            <br />

            <Typography variant="h5" gutterBottom align="center">
              Kamu mau langsung beli SEKARANG? Klik tombol dibawah!
            </Typography>

            <Button
              href="https://pintaar.com/exclusive-packet/new"
              size="large"
              fullWidth
              variant="contained"
              color="primary"
              target="_blank"
            >
              Saya Mau Belajar Sekarang
            </Button>

            <br />
            <br />
            <br />
            <Typography variant="h5" gutterBottom align="center">
              Atau kamu TIDAK PUNYA UANG dan ORANG KURANG MAMPU? Kamu bisa
              dapatkan kelasnya secara GRATIS!
            </Typography>

            <Button
              href="https://pintaar.com/scholarship"
              size="large"
              fullWidth
              variant="contained"
              color="primary"
              target="_blank"
            >
              Saya Orang Kurang Mampu
            </Button>

            <Grid container justify="center">
              <Grid item></Grid>
            </Grid>
          </div>
        </Container>
      </div>
    );
  }
}

function showSubmitLeadDonePage() {
  const history = useHistory();
  history.push("/submit-lead-done");
}

export default withRouter(withStyles(styles)(SignUpForm));
