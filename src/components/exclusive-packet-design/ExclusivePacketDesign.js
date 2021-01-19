import React, { Component } from "react";

import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";


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

const useStyles = makeStyles((theme) => ({
  "@global": {},
}));

function ExclusivePacketDesign() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />

      <div className={classes.root}>
        {/* <Header />
        <Text1/>
        <Text2 />
        <Feature />
        <Text3 />
        <Review />
        <Teacher />
        <Text4 /> */}
        <Pricing />
        <SignUpForm/>
        {/* <Footer/> */}
      </div>
    </React.Fragment>
  );
}

export default ExclusivePacketDesign;
