import React, { Component } from "react";

import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "@fortawesome/fontawesome-free/css/all.css";

import "./teacher.css";

import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import ImageIcon from "@material-ui/icons/Image";

class Teacher extends Component {
  render() {
    return (
      <div className="Teacher">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-6">
              <h3>Tim Pengajar Pintaar</h3>
            </div>
          </div>

          <div className="row text-center">
            <div className="col-xs-12 col-sm-4 col-md-4">
              <br />
              <img
                className="profile-user-img img-responsive rounded-circle center-block"
                src="https://storage.googleapis.com/pintaar-web.appspot.com/course-photo/D7U6P05aSeMhu8fkDbYkOw7iyuKP9cXrFOaGKuhu.jpeg"
                alt="User profile picture"
                
              />
              <br />
              <p>Fathur - Video Editor</p>
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4">
              <br />
              <img
                className="profile-user-img img-responsive rounded-circle center-block"
                src="https://storage.googleapis.com/pintaar-web.appspot.com/course-photo/egCwNpwj6dqH02aFBJ1UfHyahSkOJUY5hegjVrRl.jpeg"
                alt="User profile picture"
                
              />
              <br />
              <p>Dean - Desainer</p>
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4">
              <br />
              <img
                className="profile-user-img img-responsive rounded-circle center-block"
                src="https://storage.googleapis.com/pintaar-web.appspot.com/course-photo/OpSMJF8dhPqYCpxzyHeRFu6wAsi0H49Y9gHRtQUJ.jpeg"
                alt="User profile picture"
                
              />
              <br />
              <p>Gunawan - Desainer</p>
            </div>
          </div>
          <div className="row text-center">
            <div className="col-xs-12 col-sm-4 col-md-4">
              <br />
              <img
                className="profile-user-img img-responsive rounded-circle center-block"
                src="https://storage.googleapis.com/pintaar-web.appspot.com/course-photo/y3RdB3qjYlHwSVMPPeTo8Rq53oIclg44ERvcMoq0.jpeg"
                alt="User profile picture"
                
              />
              <br />
              <p>Benrik - Trainer Autocad</p>
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4">
              <br />
              <img
                className="profile-user-img img-responsive rounded-circle center-block"
                src="https://storage.googleapis.com/pintaar-web.appspot.com/course-photo/rrj81RNPbUDvWOU8Lde1AyZTd6U0xn6ryTRlAnHi.jpeg"
                alt="User profile picture"
                
              />
              <br />
              <p>Imron - Desainer</p>
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4">
              <br />
              <p className="text-primary">
                <i className="fas fa-users fa-7x"></i>
              </p>
              <p>+ Puluhan Pengajar Praktisi Lainnya</p>
              <br></br>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Teacher;
