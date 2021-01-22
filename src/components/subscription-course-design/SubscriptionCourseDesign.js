import React, { Component } from "react";
import Pricing from "./pricing";
import Feature from "./Feature";
import Review from "./Review";
import Teacher from "./Teacher";
import Header from "./Header";
import Text1 from "./Text1";
import Text2 from "./Text2";
import Text3 from "./Text3";
import Text4 from "./Text4";
import SignUpForm from "./SignUpForm";
import Footer from "./Footer";
import {
  createMuiTheme,
  makeStyles,
  ThemeProvider,
} from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#1976d2",
    },
  },
});

const useStyles = makeStyles((theme) => ({
  root: {},
}));

function SubscriptionCourseDesign() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ThemeProvider theme={theme}>
        <Header />
        <Text1 />
        <Text2 />
        <Feature />
        <Text3 />
        <Review />
        <Teacher />
        <Text4 />
        <Pricing />
        <SignUpForm />
        <Footer />
      </ThemeProvider>
    </div>
  );
}

export default SubscriptionCourseDesign;
