import React, { Component } from "react";

import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "@fortawesome/fontawesome-free/css/all.css";

import "./review.css";

import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import ImageIcon from "@material-ui/icons/Image";

class Review extends Component {
  render() {
    return (
      <div className="Review">
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <h3>Perkataan Teman Kamu Yang Telah Belajar di Pintaar</h3>
            </div>
          </div>

          <div className="row">
            <div className="col-xs-12">
              <div className="testimonials">
                <div className="testimonial">
                  <div className="testimonial-photo">
                    <img
                      src="https://storage.googleapis.com/pintaar-web.appspot.com/user-photo/tmiabq1si75draBiVgZZTtSfpdlKFTPKqICV29Nx.jpeg"
                      alt=""
                      
                    />
                  </div>
                  <h4>Syarifudin Tep</h4>
                  <p>
                    Mantuuuul... untuk pemula wajib ikut. Dan untuk yg mmng
                    sudah mngenal Ai juga bisa ikut.. pelatian nya terstruktur d
                    ajari dari 0. Jadi bisa buat ingat" materi yg dulu sudah
                    lupa. Ndak rugi gabung d kelas ini. Terimakasih 😇
                  </p>
                </div>
                <div className="testimonial">
                  <div className="testimonial-photo">
                    <img
                      src="https://storage.googleapis.com/pintaar-web.appspot.com/user-photo/sZknnNG7UD9UEHyhbRHl0AhnhR7kEOI35eMvm2tJ.jpeg"
                      alt=""
                      
                    />
                  </div>
                  <h4>SHALIZAM</h4>
                  <p>
                    terima kasih yang saya mau ucapkan, setidaknya saya sdh tau
                    beberapa cara untuk melakukan editing pada aplikasi
                    photoshop. cara penjelasannya jelas, dan terinci sehingga
                    mudah untuk dipahami.
                  </p>
                </div>
                <div className="testimonial">
                  <div className="testimonial-photo">
                    <img
                      src="https://storage.googleapis.com/pintaar-web.appspot.com/user-photo/H5lBdDpp5NJ9mKdDL9v1q0voBb7OqKTxsGaIYApd.jpeg"
                      
                    />
                  </div>
                  <h4>Aldi Prasedya</h4>
                  <p>
                    Untuk kelas ini saya rasa sangat cukup membantu untuk para
                    pemula yang ingin belajar motion grapic.. Penjelasannya
                    sangat jelas dan materinya terstruktur. Bermanfaat banget..
                    Sukses tetus pintaar.com
                  </p>
                </div>
                <div className="testimonial">
                  <div className="testimonial-photo">
                    <img
                      src="https://storage.googleapis.com/pintaar-web.appspot.com/user-photo/ZKqu2lbF2BTuQbCiiqnmLNhn3o89OMuWPWlN2O2o.jpeg"
                      alt=""
                      
                    />
                  </div>
                  <h4>ROHMAD BUDI P</h4>
                  <p>
                    kelas online ini sangat membantu, bisa belajar ilmu skill
                    tambahan apalagi bisa kapanpun dan dimanapun, terimakasih
                    piintar!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Review;
