import React, { Component } from "react"
import Slider from "react-slick"
import "../../node_modules/slick-carousel/slick/slick.css"
import "../../node_modules/slick-carousel/slick/slick-theme.css"

import act1 from '../../static/img/activities/act1.jpg'
import act2 from '../../static/img/activities/act2.jpg'
import act3 from '../../static/img/activities/act3.jpg'
import act4 from '../../static/img/activities/act4.jpg'
import act5 from '../../static/img/activities/act5.jpg'
import act6 from '../../static/img/activities/act6.jpg'
import act7 from '../../static/img/activities/act7.jpg'
import act8 from '../../static/img/activities/act8.jpg'
import act9 from '../../static/img/activities/act9.jpg'


export default class PauseOnHover extends Component {
  render() {
    var settings = {
      className: "center",
      dots: false,
      infinite: true,
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      // pauseOnHover: false,
      arrows: false
    };
    return (
      <div className="section section-feature-grey-logo" align="center">
 <div className="container">
        <Slider {...settings}>
          <div className="carousels">
            <img src={act1} alt="projects" style={{ height: '200px'}}/>
            <span>&nbsp;</span><span className="subtitle is-size-5 is-block">CSR By Swakruta</span>
          </div>
          <div className="carousels">
            <img src={act4} alt="projects" style={{ height: '200px'}}/>
            <span>&nbsp;</span><span className="subtitle is-size-5 is-block">Trade shows & Stalls</span>
          </div>
          <div className="carousels">
            <img src={act3} alt="projects" style={{ height: '200px'}}/>
            <span>&nbsp;</span><span className="subtitle is-size-5 is-block">Training Sessions by experts</span>
          </div>
          <div className="carousels">
            <img src={act5} alt="projects" style={{ height: '200px'}}/>
            <span>&nbsp;</span><span className="subtitle is-size-5 is-block">Members stalls</span>
          </div>
          <div className="carousels">
            <img src={act6} alt="projects" style={{ height: '200px'}}/>
            <span>&nbsp;</span><span className="subtitle is-size-5 is-block">Entrepreneur awards</span>
          </div>
          <div className="carousels">
            <img src={act2} alt="projects" style={{ height: '200px'}}/>
            <span>&nbsp;</span><span className="subtitle is-size-5 is-block">Helping underprivileged women</span>
          </div>
          <div className="carousels">
            <img src={act7} alt="projects" style={{ height: '200px'}}/>
            <span>&nbsp;</span><span className="subtitle is-size-5 is-block">Workshops for our members</span>
          </div>
          <div className="carousels">
            <img src={act8} alt="projects" style={{ height: '200px'}}/>
            <span>&nbsp;</span><span className="subtitle is-size-5 is-block">Fun & Entertainment</span>
          </div>
          <div className="carousels">
            <img src={act9} alt="projects" style={{ height: '200px'}}/>
            <span>&nbsp;</span><span className="subtitle is-size-5 is-block">Trips By Swakruta</span>
          </div>
        </Slider>
        </div>
      </div>
    );
  }
}
